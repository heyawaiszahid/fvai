import fs from "fs";
import path from "path";
import * as xlsx from "xlsx";

function parseSpreadsheet() {
  const file = path.join(process.cwd(), "private", "spreadsheet.xlsx");
  const buffer = fs.readFileSync(file);

  const workbook = xlsx.read(buffer, { type: "buffer" });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const data = xlsx.utils
    .sheet_to_json(sheet, { header: 1 })
    .map((row) => row.map((cell) => (cell === "NA" ? null : cell)));

  const regions = {
    Africa: { low: 1, high: 2 },
    Americas: { low: 3, high: 4 },
    Asia: { low: 5, high: 6 },
    Europe: { low: 7, high: 8 },
    Oceania: { low: 9, high: 10 },
  };

  const industries = new Set();
  const stages = ["Seed", "Series A", "Series B", "Series C"];
  const structuredData = {};

  Object.keys(regions).forEach((region) => {
    structuredData[region] = {};
  });

  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (!row[0]) continue;

    const industry = row[0].trim();

    if (!stages.includes(industry)) {
      industries.add(industry);

      Object.entries(regions).forEach(([region, { low, high }]) => {
        structuredData[region][industry] = {};

        stages.forEach((stage, stageIndex) => {
          const stageRow = data[i + stageIndex + 1];
          if (!stageRow) return;

          structuredData[region][industry][stage] = [
            stageRow[low] !== null ? Math.round(stageRow[low] * 10) / 10 : null,
            stageRow[high] !== null ? Math.round(stageRow[high] * 10) / 10 : null,
          ];
        });
      });
    }
  }

  return {
    regions: Object.keys(regions),
    industries: Array.from(industries),
    stages,
    structuredData,
  };
}

export async function GET() {
  const { regions, industries, stages } = parseSpreadsheet();

  return Response.json({ regions, industries, stages });
}

export async function POST(req) {
  const { region, industry, stage } = await req.json();
  const { structuredData } = parseSpreadsheet();

  if (!structuredData[region] || !structuredData[region][industry] || !structuredData[region][industry][stage]) {
    return Response.json({ error: "Invalid region, industry, or stage" }, { status: 400 });
  }

  return Response.json({ range: structuredData[region][industry][stage] });
}
