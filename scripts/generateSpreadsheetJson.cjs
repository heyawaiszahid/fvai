const fs = require("fs");
const path = require("path");
const xlsx = require("xlsx");

function loadSpreadsheet() {
  const filePath = path.join(process.cwd(), "private", "spreadsheet.xlsx");
  const buffer = fs.readFileSync(filePath);
  const workbook = xlsx.read(buffer, { type: "buffer" });
  const sheet = workbook.Sheets[workbook.SheetNames[0]];

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
  const structuredData = Object.fromEntries(Object.keys(regions).map((region) => [region, {}]));

  for (let i = 0, len = data.length; i < len; i++) {
    const row = data[i];
    if (!row[0]) continue;

    const industry = row[0].trim();
    if (stages.includes(industry)) continue;

    industries.add(industry);

    for (const [region, { low, high }] of Object.entries(regions)) {
      structuredData[region][industry] = Object.fromEntries(
        stages.map((stage, stageIndex) => {
          const stageRow = data[i + stageIndex + 1];
          return [
            stage,
            stageRow
              ? [
                  stageRow[low] !== null ? Math.round(stageRow[low] * 10) / 10 : null,
                  stageRow[high] !== null ? Math.round(stageRow[high] * 10) / 10 : null,
                ]
              : null,
          ];
        })
      );
    }
  }

  return {
    regions: Object.keys(regions),
    industries: Array.from(industries),
    stages,
    structuredData,
  };
}

const outputFile = path.join(process.cwd(), "lib", "spreadsheet.json");
fs.writeFileSync(outputFile, JSON.stringify(loadSpreadsheet(), null, 2));

console.log(`✅ Spreadsheet data saved to ${outputFile}`);
