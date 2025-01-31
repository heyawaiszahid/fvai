"use client";

import Field from "@/components/Field";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import data from "./data.json";

export default function DetailedQuestionnaire() {
  const form = useForm();
  const [currentStep, setCurrentStep] = useState(0);

  const { errors, isValid } = form.formState;
  const steps = Object.keys(data);

  const onSubmit = (values) => {
    console.log(values);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentStepData = data[steps[currentStep]];

  return (
    <>
      <Header />
      <div className="bg-text-primary text-background-paper">
        <ul className="container mx-auto flex justify-between px-8 py-4 lg:pt-0 lg:pb-8 gap-3">
          {steps.map((step, index) => (
            <li
              key={step}
              className={`border border-background-default ${
                index === currentStep ? "bg-info" : "bg-info-light"
              } w-7 h-7 rounded-3xl text-center flex justify-center items-center leading-7 lg:w-auto lg:h-auto lg:min-w-44 lg:text-xl lg:leading-8 lg:px-5`}
            >
              <span className="block lg:hidden">{index + 1}</span>
              <span className="hidden lg:block">{step}</span>
            </li>
          ))}
        </ul>
      </div>

      <main>
        <div className="container mx-auto px-6 py-6 lg:py-12">
          <div className="flex flex-col gap-6">
            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-9 lg:space-y-16 flex flex-col">
                <div className="text-[27px] lg:text-4xl font-bold -mb-4 lg:-mb-2 lg:text-[40px]">{currentStepData.title}</div>

                {Object.keys(currentStepData.questions).map((questionGroup) => (
                  <div key={questionGroup} className="grid grid-cols-1 gap-5 lg:gap-12">
                    <div className="text-[19px] lg:text-[30px] font-bold">{questionGroup}</div>
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

                <div className="flex justify-between pb-12">
                  <Button
                    type="button"
                    className="text-primary-dark text-base underline"
                    variant="link"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                  >
                    Back
                  </Button>
                  <Button
                    type="button"
                    className="bg-primary disabled:bg-primary-light text-background-paper disabled:text-background-default text-xl min-w-40 rounded-3xl focus:bg-primary"
                    onClick={handleNext}
                    disabled={!isValid}
                  >
                    Next
                  </Button>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </main>
    </>
  );
}
