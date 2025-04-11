import Done from "@/components/icons/Done";
import { Fragment } from "react";

const letters = ["A", "B", "C", "D", "E"];

const stepMapping = {
  "Product Tech Solution": "Product",
  "Competitive Landscape": "Competitiveness",
};

const StepsIndicator = ({ steps, currentStep, isSubmitted }) => {
  return (
    <>
      <div className="bg-text-primary text-background-paper lg:hidden">
        <div className="container flex justify-between gap-2 pt-3 pb-3 cursor-default">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <div
                className={`relative flex items-center justify-center w-[30px] h-[30px] rounded-full text-center border ${
                  index < currentStep || isSubmitted
                    ? "bg-info border-info"
                    : index === currentStep
                    ? "bg-info border-background-default"
                    : "bg-info-light border-info text-background-default"
                }`}
              >
                {index < currentStep || isSubmitted ? <Done className="w-[16px] h-[12px]" /> : <span>{index + 1}</span>}
              </div>
              {index < steps.length - 1 && (
                <div className="flex items-center flex-1">
                  <span className="w-full h-[3px] rounded bg-info-light"></span>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {!isSubmitted && (
        <div className="hidden lg:block">
          <div className="container flex justify-between gap-2 pt-16 pb-20 cursor-default max-w-7xl">
            {steps.map((step, index) => (
              <Fragment key={index}>
                <div
                  className={`relative flex items-center justify-center w-[60px] h-[60px] rounded-full bg-info ${
                    index < currentStep ? "" : index === currentStep ? "" : "opacity-60"
                  }`}
                >
                  {index < currentStep ? (
                    <Done className="w-[26px] h-[18px]" />
                  ) : (
                    <span className="text-[33px] text-white">{letters[index]}</span>
                  )}

                  <span className="absolute text-center top-[100%] pt-[6px] w-[200px] text-info">
                    {stepMapping[step] || step}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex items-center flex-1">
                    <span className="w-full h-[3px] rounded bg-info-light"></span>
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default StepsIndicator;
