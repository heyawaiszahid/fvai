import Done from "@/components/icons/Done";
import { Fragment } from "react";

const StepsIndicator = ({ steps, currentStep, isSubmitted }) => {
  return (
    <div className="bg-text-primary text-background-paper">
      <div className="container flex justify-between gap-2 pt-3 lg:pb-7 pb-3 lg:pt-0 cursor-default">
        {steps.map((step, index) => (
          <Fragment key={index}>
            <div
              className={`relative flex items-center justify-center w-[30px] lg:w-auto lg:min-w-[171px] h-[30px] lg:h-auto lg:leading-tight lg:px-4 lg:py-2 rounded-full text-center border ${
                index < currentStep || isSubmitted
                  ? "bg-info border-info"
                  : index === currentStep
                  ? "bg-info border-background-default"
                  : "bg-info-light border-info text-background-default"
              }`}
            >
              {index < currentStep || isSubmitted ? (
                <Done className="w-[16px] h-[12px] lg:w-[26px] lg:h-[18px]" />
              ) : (
                <>
                  <span className="block lg:hidden">{index + 1}</span>
                  <span className="hidden lg:block">{step}</span>
                </>
              )}
            </div>
            {index < steps.length - 1 && (
              <div className="flex items-center flex-1">
                <span className="w-full h-[3px] rounded bg-info-light lg:h-[6px]"></span>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default StepsIndicator;
