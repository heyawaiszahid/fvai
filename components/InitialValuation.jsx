"use client";

import spreadsheet from "@/lib/spreadsheet.json";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const InitialValuation = () => {
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    const storedData = getCookie("appData");
    if (storedData) setAppData(JSON.parse(storedData));
  }, []);

  if (!appData) return;

  const { region, industry, stage } = appData.initialQuestions;

  const range = spreadsheet.structuredData?.[region]?.[industry]?.[stage] || [null, null];

  return (
    <>
      <div className="lg:hidden">
        <h1 className="text-[27px] lg:text-[47px] text-text-secondary leading-[40px] lg:leading-[64px] mb-1">
          {stage} Stage {industry} startups in {region} have{" "}
          <span className="text-primary-dark font-bold">pre-money valuations</span> range between :
        </h1>
        <p className="text-[39px] font-bold text-text-secondary mb-5 lg:mb-8">
          ${range[0] || 0}M - ${range[1] || 0}M
        </p>
      </div>

      <div className="hidden lg:block">
        <h1 className="text-[47px] text-text-secondary leading-[64px] mb-12 text-center">
          {stage} Stage {industry} startups in {region} have{" "}
          <span className="text-primary-dark font-bold">pre-money valuations</span> range <br /> between:{" "}
          <span className="text-text-secondary font-bold">
            ${range[0] || 0}M - ${range[1] || 0}M
          </span>
        </h1>
      </div>
    </>
  );
};

export default InitialValuation;
