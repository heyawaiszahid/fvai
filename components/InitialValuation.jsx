"use client";

import spreadsheet from "@/lib/spreadsheet.json";
import { getCookie, setCookie } from "cookies-next";
import { useEffect, useState } from "react";
import CTA from "./CTA";
import Retry from "./Retry";

const InitialValuation = () => {
  const [appData, setAppData] = useState(null);

  useEffect(() => {
    const storedData = getCookie("appData");

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      const { region, industry, stage } = parsedData.initialQuestions;

      const range = spreadsheet.structuredData?.[region]?.[industry]?.[stage] || [null, null];

      const updatedData = {
        ...parsedData,
        initialQuestions: {
          ...parsedData.initialQuestions,
          range,
        },
      };

      setAppData(updatedData);

      setCookie("appData", JSON.stringify(updatedData));
    }
  }, []);

  if (!appData) return;

  const { region, industry, stage, range } = appData.initialQuestions;

  return (
    <>
      <div className="lg:hidden">
        {range[0] === null ? (
          <div className="text-center">
            <h1 className="text-[27px] text-text-secondary leading-[40px] mb-5">
              Fundraising data is <span className="text-primary-dark font-bold">not available</span> for this region.
            </h1>
            <CTA href="/initial-questions" className="mb-6">
              Start Over
            </CTA>
            <Retry href="/initial-questions">Try Again</Retry>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-[27px] text-text-secondary leading-[40px] mb-1">
              {stage} Stage {industry} startups in {region} have{" "}
              <span className="text-primary-dark font-bold">pre-money valuations</span> range between :
            </h1>
            <p className="text-[39px] font-bold text-text-secondary mb-5">
              ${range[0] || 0}M - ${range[1] || 0}M
            </p>
            <CTA href="/detailed-questionnaire" className="mb-6">
              Refine My Valuation <br />
              Start Scorecard
            </CTA>
            <p className="text-[13px] text-text-primary leading-[24px] mb-6">
              The valuation range above is based on the 1st to 3rd quartile pre-money valuations implied from
              fundraising transactions in your region, stage of development, and vertical.
            </p>
            <Retry href="/initial-questions">Try Again</Retry>
          </div>
        )}
      </div>

      <div className="hidden lg:block">
        {range[0] === null ? (
          <div className="text-center">
            <h1 className="text-[47px] text-text-secondary leading-[64px] mb-12 text-center">
              Fundraising data is <span className="text-primary-dark font-bold">not available</span> for this region.
            </h1>
            <CTA href="/initial-questions" className="mb-20">
              Start Over
            </CTA>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-[47px] text-text-secondary leading-[64px] mb-12 text-center">
              {stage} Stage {industry} startups in {region} have{" "}
              <span className="text-primary-dark font-bold">pre-money valuations</span> range <br /> between:{" "}
              <span className="text-text-secondary font-bold">
                ${range[0] || 0}M - ${range[1] || 0}M
              </span>
            </h1>
            <CTA href="/detailed-questionnaire" className="mb-20">
              Refine My Valuation - <br /> Start Scorecard
            </CTA>
            <p className="text-[27px] leading-[40px] mb-20 text-center">
              The valuation range above is based on the 1st quartile to 3rd quartile pre-money valuations implied from
              fundraising transactions in your region, stage of development, and vertical.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default InitialValuation;
