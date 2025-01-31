"use client";

import Field from "@/components/Field";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Fragment, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import data from "./data.json";
import Result from "./Result";

export default function DetailedQuestionnaire() {
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
      <div className="bg-text-primary text-background-paper">
        <div className="container mx-auto flex justify-between gap-2 px-8 py-4 cursor-default lg:pt-0 lg:pb-8">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <div
                className={`relative flex items-center justify-center w-7 h-7 rounded-3xl border text-center leading-7 lg:w-auto lg:min-w-44 lg:h-auto lg:min-h-9 lg:px-5 lg:py-2 lg:text-xl lg:leading-none ${
                  index < currentStep || isSubmitted
                    ? "bg-info border-info"
                    : index === currentStep
                    ? "bg-info border-background-default"
                    : "bg-info-light border-info text-background-default"
                }`}
              >
                {index < currentStep || isSubmitted ? (
                  <Image src="/icon-done.svg" width={14} height={10} alt="" className="lg:w-[26px] lg:h-[20px]" />
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

      <main>
        {!isSubmitted ? (
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormProvider {...form}>
              <div className="container mx-auto px-6 pt-6 lg:py-12">
                <div className="flex flex-col">
                  <div className="font-bold text-[26px] lg:text-[40px] lg:mb-2">{currentStepData.title}</div>
                  {Object.keys(currentStepData.questions).map((questionGroup) => (
                    <div key={questionGroup}>
                      {!questionGroup.includes("Untitled") && (
                        <div className="mb-4 mt-8 font-bold text-[19px] lg:text-[30px]">{questionGroup}</div>
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
                <div className="container mx-auto mb-10 px-6 py-8 lg:mb-0 lg:py-14">
                  <div className="flex items-center justify-between">
                    <Button
                      type="button"
                      className="text-primary-dark text-base ps-0 lg:text-2xl lg:text-background-paper underline lg:no-underline hover:no-underline"
                      variant="link"
                      onClick={handleBack}
                      disabled={currentStep === 0}
                    >
                      Back
                    </Button>
                    <Button
                      type="button"
                      className="flex items-center bg-primary text-background-paper text-xl lg:text-2xl min-w-40 lg:min-w-72 rounded-3xl lg:py-6 hover:bg-primary disabled:bg-primary-light disabled:text-background-default disabled:opacity-100"
                      onClick={handleNext}
                      disabled={!isStepAnswered}
                    >
                      <span>Next</span>
                      <Image
                        src="/icon-next.svg"
                        width={20}
                        height={20}
                        alt=""
                        className={`lg:w-7 ${!isStepAnswered ? "opacity-60" : "opacity-100"}`}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </FormProvider>
          </form>
        ) : (
          <div className="container mx-auto px-6 pt-8 lg:py-20">
            <Result score={score} />
          </div>
        )}
      </main>
    </>
  );
}
