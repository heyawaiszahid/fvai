"use client";

import CircularProgress from "@/components/CircularProgress";
import Field from "@/components/Field";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import data from "./data.json";

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

  const [score, setScore] = useState(92.2);

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
      <div className="text-background-paper bg-text-primary">
        <ul className="container mx-auto flex justify-between gap-3 px-8 py-4 lg:pb-8 lg:pt-0 cursor-default">
          {steps.map((step, index) => (
            <li
              key={step}
              className={`relative flex items-center justify-center w-7 h-7 rounded-3xl border text-center leading-7 lg:w-auto lg:min-w-44 lg:min-h-9 lg:px-5 lg:text-xl lg:leading-9 ${
                index < currentStep || isSubmitted
                  ? "bg-info border-info"
                  : index === currentStep
                  ? "bg-info border-background-default"
                  : "bg-info-light border-info text-background-default"
              }`}
            >
              {index < currentStep || isSubmitted ? (
                <Image src="/icon-done.svg" width={14} height={10} alt="" className="lg:w-7" />
              ) : (
                <>
                  <span className="block lg:hidden">{index + 1}</span>
                  <span className="hidden lg:block">{step}</span>
                </>
              )}
            </li>
          ))}
        </ul>
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
                        <div className="mt-8 mb-4 font-bold text-[19px] lg:text-[30px]">{questionGroup}</div>
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
                <div className="container mx-auto px-6 py-8 lg:py-14 mb-10 lg:mb-0">
                  <div className="flex items-center justify-between">
                    <Button
                      type="button"
                      className="text-primary-dark text-base lg:text-2xl lg:text-background-paper underline lg:no-underline hover:no-underline ps-0"
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
            {score >= 90 && (
              <div className="flex">
                <div className="flex flex-col items-center lg:items-start gap-10 lg:gap-6 lg:w-1/2 lg:pt-16 mx-auto">
                  <div className="text-[33px] lg:text-5xl text-center lg:text-left text-text-secondary leading-10">
                    Your result is <span className="text-text-primary font-bold">excellent.</span>
                  </div>
                  <div className="text-[19px] text-primary-dark hidden lg:block lg:mb-16">
                    Your result falls into the <span className="font-bold">"excellent"</span>, indicating strong performance across critical
                    areas such as leadership, market opportunity, traction, product and competitiveness. Keep building on these strengths to
                    maintain momentum.
                  </div>
                  <div className="lg:hidden mb-12 lg:mb-0 relative">
                    <CircularProgress size={340} thickness={36} score={score} />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-2">
                      <Image src="/icon-rocket.png" width={64} height={64} alt="" />
                      <div className="text-5xl text-text-secondary">{score}%</div>
                    </div>
                  </div>
                  <Link
                    href="/detailed-questionnaire/valuation"
                    className="w-full max-w-md bg-secondary-light text-background-paper text-center text-base lg:text-[28px] font-semibold rounded-3xl py-2 lg:py-5 lg:rounded-full"
                  >
                    View Your Valuation
                  </Link>
                </div>

                <div className="hidden lg:flex lg:w-1/2 lg:justify-end">
                  <div className="flex justify-center relative">
                    <CircularProgress size={440} thickness={44} score={score} />
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-8">
                      <Image src="/icon-rocket.png" width={116} height={116} alt="" />
                      <div className="text-5xl text-text-secondary">{score}%</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </>
  );
}
