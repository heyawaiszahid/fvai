"use client";

import Field from "@/components/Field";
import Header from "@/components/Header";
import Arrow2 from "@/components/icons/Arrow2";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import data from "./data.json";
import Result from "./Result";
import StepsIndicator from "./StepsIndicator";

export default function DetailedQuestionnaire() {
  const searchParams = useSearchParams();
  const min = searchParams.get("min");
  const max = searchParams.get("max");

  console.log(min, max);

  const form = useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const steps = Object.keys(data);
  const currentStepData = data[steps[currentStep]];

  const { watch } = form;
  const watchedValues = watch();

  const isStepAnswered = Object.keys(currentStepData.questions).every((questionGroup) => {
    return currentStepData.questions[questionGroup].every((question, index) => {
      return watchedValues[`${questionGroup}_${index}`] !== undefined;
    });
  });

  const [score, setScore] = useState(82.2);

  const onSubmit = (values) => {
    const formData = {};

    for (const [key, section] of Object.entries(data)) {
      formData[key] = {
        title: section.title,
        questions: {},
      };

      for (const [groupKey, questions] of Object.entries(section.questions)) {
        formData[key].questions[groupKey] = questions.map((q, i) => ({
          question: q.question,
          answer: values[`${groupKey}_${i}`],
        }));
      }
    }

    // console.log(formData);
    // setScore(92.2);

    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      form.handleSubmit(onSubmit)();
    } else {
      if (isStepAnswered) {
        setCurrentStep(currentStep + 1);
        window.scrollTo(0, 0);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <Header />
      <StepsIndicator steps={steps} currentStep={currentStep} isSubmitted={isSubmitted} />
      <main>
        {!isSubmitted ? (
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormProvider {...form}>
              <div className="container pt-6 lg:pt-12 pb-6 lg:pb-12">
                <div className="flex flex-col gap-7 lg:gap-10">
                  <div className="text-[27px] lg:text-[39px] font-bold">{currentStepData.title}</div>
                  {Object.keys(currentStepData.questions).map((questionGroup) => (
                    <div key={questionGroup} className="flex flex-col gap-4 lg:gap-6">
                      {!questionGroup.includes("Untitled") && (
                        <div className="text-[19px] lg:text-[33px] font-bold">{questionGroup}</div>
                      )}
                      {currentStepData.questions[questionGroup].map((question, index) => (
                        <Field
                          key={index}
                          control={form.control}
                          name={`${questionGroup}_${index}`}
                          label={question.question}
                          type="radio"
                          options={question.options.map((option) => ({ value: option, label: option }))}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:bg-text-primary">
                <div className="container mb-16 lg:mb-0 lg:py-14">
                  <div className="flex items-center justify-between">
                    <Button
                      type="button"
                      className="text-[16px] lg:text-[23px] text-primary-dark lg:text-background-paper ps-0 underline lg:no-underline hover:no-underline"
                      variant="link"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      className="flex items-center w-[158px] lg:w-[284px] py-[19px] lg:py-[22px] text-[19px] lg:text-[23px] text-background-paper disabled:text-background-default bg-primary hover:bg-primary disabled:bg-primary-light rounded-[18px] lg:rounded-[24px] disabled:opacity-100 [&_svg]:w-[20px] lg:[&_svg]:w-[27px] [&_svg]:h-[14px]"
                      onClick={handleNext}
                      disabled={!isStepAnswered}
                    >
                      <span>Next</span>
                      <Arrow2
                        className={`stroke-current text-background-paper ${
                          !isStepAnswered ? "opacity-60" : "opacity-100"
                        }`}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </FormProvider>
          </form>
        ) : (
          <div className="container pt-8 pb-16 lg:pt-20">
            <Result score={score} />
          </div>
        )}
      </main>
    </>
  );
}
