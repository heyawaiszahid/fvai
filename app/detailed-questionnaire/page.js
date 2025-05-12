"use client";

import CTA from "@/components/CTA";
import Field from "@/components/Field";
import Header from "@/components/Header";
import Arrow2 from "@/components/icons/Arrow2";
import Chat from "@/components/icons/Chat";
import Checkmark from "@/components/icons/Checkmark";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import data from "./data.json";
import Result from "./Result";
import StepsIndicator from "./StepsIndicator";

const getScoreFromAnswer = (answer, isGrowthRate = false) => {
  const scores = { a: 0, b: 1, c: 2, d: 3, e: 5 };
  if (isGrowthRate) {
    if (answer === "c") return 3;
    if (answer === "d") return 4;
  }
  return scores[answer.toLowerCase()] || 0;
};

const calculateTeamScore = (values) => {
  const exitYes = values["Base"] === "Yes";
  const ceoYes = values["Base - 2"] === "Yes";

  if (exitYes || ceoYes) {
    return 5 * 0.3;
  }

  const experience = values["Experience"]?.charAt(0).toLowerCase();
  const education = values["Education"]?.charAt(0).toLowerCase();
  const team = values["Team"]?.charAt(0).toLowerCase();

  const expScore = getScoreFromAnswer(experience) * 0.5;
  const eduScore = getScoreFromAnswer(education) * 0.25;
  const teamScore = getScoreFromAnswer(team) * 0.25;

  return (expScore + eduScore + teamScore) * 0.3;
};

const calculateMarketOpportunityScore = (values) => {
  const marketSize = values["Market Size"]?.charAt(0).toLowerCase();
  const growthRate = values["Market Growth Rate"]?.charAt(0).toLowerCase();

  const marketSizeScore = getScoreFromAnswer(marketSize) * 0.7;
  const growthRateScore = getScoreFromAnswer(growthRate, true) * 0.3;

  return (marketSizeScore + growthRateScore) * 0.2;
};

const calculateTractionScore = (values) => {
  const strongGrowth = values["Base-2"] === "Yes";

  if (strongGrowth) {
    return 5 * 0.2;
  }

  const revenue = values["Revenue"]?.charAt(0).toLowerCase();
  const partnership = values["Strategic Partnerships and Pilot Programs"]?.charAt(0).toLowerCase();
  const engagement = values["User Engagement / Organic Social Media Growth"]?.charAt(0).toLowerCase();

  const revenueScore = getScoreFromAnswer(revenue) * 0.4;
  const partnershipScore = getScoreFromAnswer(partnership) * 0.3;
  const engagementScore = getScoreFromAnswer(engagement) * 0.3;

  return (revenueScore + partnershipScore + engagementScore) * 0.2;
};

const calculateProductScore = (values) => {
  const stage = values["Stage of Development"]?.charAt(0).toLowerCase();
  const scalability = values["Scalability"]?.charAt(0).toLowerCase();
  const essential = values["Vitamin or Painkiller"]?.charAt(0).toLowerCase();

  const stageScore = getScoreFromAnswer(stage) * 0.4;
  const scalabilityScore = getScoreFromAnswer(scalability) * 0.35;
  const essentialScore = getScoreFromAnswer(essential) * 0.25;

  return (stageScore + scalabilityScore + essentialScore) * 0.15;
};

const calculateCompetitivenessScore = (values) => {
  const competitor = values["Strength of Competitors in the Marketplace"]?.charAt(0).toLowerCase();
  const product = values["Strength of Competitive Products"]?.charAt(0).toLowerCase();
  const differentiation = values["Differentiation / Unique Selling Points"]?.charAt(0).toLowerCase();

  const competitorScore = getScoreFromAnswer(competitor) * 0.35;
  const productScore = getScoreFromAnswer(product) * 0.3;
  const diffScore = getScoreFromAnswer(differentiation) * 0.45;

  return (competitorScore + productScore + diffScore) * 0.15;
};

export default function DetailedQuestionnaire() {
  const form = useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [showAdditionalQuestions, setShowAdditionalQuestions] = useState(false);
  const [showAdditionalQuestions2, setShowAdditionalQuestions2] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState();
  const [hasMounted, setHasMounted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const steps = Object.keys(data);
  const currentStepData = data[steps[currentStep]];

  const { watch } = form;
  const watchedValues = watch();

  const isStepAnswered = Object.keys(currentStepData.questions).every((questionGroup) => {
    if (!showAdditionalQuestions && ["Experience", "Education", "Team"].includes(questionGroup)) {
      return true;
    }

    if (
      !showAdditionalQuestions2 &&
      steps[currentStep] === "Traction" &&
      [
        "Revenue",
        "Strategic Partnerships and Pilot Programs",
        "User Engagement / Organic Social Media Growth",
      ].includes(questionGroup)
    ) {
      return true;
    }

    return currentStepData.questions[questionGroup].every((question, index) => {
      return watchedValues[index === 0 ? questionGroup : `${questionGroup} - ${index + 1}`] !== undefined;
    });
  });

  useEffect(() => {
    const appDataCookie = getCookie("appData");

    if (appDataCookie) {
      const appData = JSON.parse(appDataCookie);

      if (appData?.detailedQuestionnaire?.score) {
        setScore(appData.detailedQuestionnaire.score);
        setIsSubmitted(true);
      }
    }

    setHasMounted(true);
  }, []);

  const onSubmit = async (values) => {
    setIsProcessing(true);

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

    const appDataCookie = getCookie("appData");
    const appData = appDataCookie ? JSON.parse(appDataCookie) : {};
    const [min, max] = appData?.initialQuestions?.range;

    const scores = {
      Team: calculateTeamScore(values),
      Market: calculateMarketOpportunityScore(values),
      Traction: calculateTractionScore(values),
      Product: calculateProductScore(values),
      Competitiveness: calculateCompetitivenessScore(values),
    };

    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);

    const percentage = ((totalScore / 5) * 100).toFixed(2);

    let estimatedValue;
    if (percentage < 50) {
      estimatedValue = 0;
    } else if (percentage === 50) {
      estimatedValue = min;
    } else if (percentage === 100) {
      estimatedValue = max;
    } else {
      const fraction = (percentage - 50) / 50;
      estimatedValue = min + fraction * (max - min);
    }

    estimatedValue = estimatedValue.toFixed(1);

    setScore(percentage);
    setIsSubmitted(true);

    const payload = {
      ...appData,
      detailedQuestionnaire: {
        score: percentage,
        valuation: estimatedValue,
      },
    };

    setCookie("appData", JSON.stringify(payload));

    await fetch("/api/valuationData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json());
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      form.handleSubmit(onSubmit)();
    } else {
      if (isStepAnswered) {
        if (steps[currentStep] === "Team") {
          const baseAnswers = data.Team.questions.Base.map(
            (q, i) => watchedValues[i === 0 ? "Base" : `Base - ${i + 1}`]
          );
          const allNo = baseAnswers.every((answer) => answer === "No");

          if (allNo && !showAdditionalQuestions) {
            setShowAdditionalQuestions(true);
            return;
          }

          setShowAdditionalQuestions(false);
          setCurrentStep(currentStep + 1);
        } else if (steps[currentStep] === "Traction") {
          const base2Answers = data.Traction.questions["Base-2"].map(
            (q, i) => watchedValues[i === 0 ? "Base-2" : `Base-2 - ${i + 1}`]
          );
          const allNoBase2 = base2Answers.every((answer) => answer === "No");

          if (allNoBase2 && !showAdditionalQuestions2) {
            setShowAdditionalQuestions2(true);
            return;
          }

          setShowAdditionalQuestions2(false);
          setCurrentStep(currentStep + 1);
        } else {
          setCurrentStep(currentStep + 1);
        }
        window.scrollTo(0, 0);
      }
    }
  };

  const handleBack = () => {
    if (showAdditionalQuestions) {
      setShowAdditionalQuestions(false);
      return;
    }

    if (showAdditionalQuestions2) {
      setShowAdditionalQuestions2(false);
      return;
    }

    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);

      if (steps[currentStep - 1] === "Team") {
        const baseAnswers = data.Team.questions.Base.map((q, i) => watchedValues[i === 0 ? "Base" : `Base - ${i + 1}`]);
        const allNo = baseAnswers.every((answer) => answer === "No");

        if (allNo) {
          setShowAdditionalQuestions(true);
        }
      }

      if (steps[currentStep - 1] === "Traction") {
        const base2Answers = data.Traction.questions["Base-2"].map(
          (q, i) => watchedValues[i === 0 ? "Base-2" : `Base-2 - ${i + 1}`]
        );
        const allNoBase2 = base2Answers.every((answer) => answer === "No");

        if (allNoBase2) {
          setShowAdditionalQuestions2(true);
        }
      }
    }
  };

  if (!hasMounted) {
    return null;
  }

  const letters = ["A", "B", "C", "D", "E"];

  return (
    <>
      <div className={isSubmitted ? "lg:hidden" : ""}>
        <Header>
          <Link href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins" target="_blank">
            <Chat className="w-[52px] h-[52px]" />
          </Link>
        </Header>
      </div>

      <div className="flex">
        <Sidebar className={!isSubmitted ? "lg:hidden" : ""}></Sidebar>

        <main className="w-full lg:bg-custom-gradient-2">
          <div className="relative z-10">
            <StepsIndicator steps={steps} currentStep={currentStep} isSubmitted={isSubmitted} />

            {!isSubmitted ? (
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <FormProvider {...form}>
                  <div className="container pt-6 lg:pt-12 pb-6 lg:pb-12 lg:max-w-7xl">
                    <div className="flex flex-col gap-7 lg:gap-10">
                      <div className="text-[27px] lg:text-[39px] font-bold lg:hidden">{currentStepData.title}</div>
                      <div className="text-[27px] lg:text-[39px] font-bold hidden lg:block">
                        {currentStepData.title.replace(/^\d/, (match) => letters[match - 1] || match)}
                      </div>

                      {(() => {
                        let displayIndex = 1;

                        return Object.keys(currentStepData.questions).map((questionGroup) => {
                          const isBase = questionGroup === "Base";
                          const isBase2 = questionGroup === "Base-2";

                          if (showAdditionalQuestions && isBase) {
                            return null;
                          }

                          if (showAdditionalQuestions2 && isBase2) {
                            return null;
                          }

                          if (
                            isBase ||
                            isBase2 ||
                            showAdditionalQuestions ||
                            showAdditionalQuestions2 ||
                            ![
                              "Experience",
                              "Education",
                              "Team",
                              "Revenue",
                              "Strategic Partnerships and Pilot Programs",
                              "User Engagement / Organic Social Media Growth",
                            ].includes(questionGroup)
                          ) {
                            const shouldShowNumber = !isBase && !isBase2;
                            const currentIndex = shouldShowNumber ? displayIndex++ : null;

                            return (
                              <div key={questionGroup} className="flex flex-col gap-4 lg:gap-6">
                                {shouldShowNumber && (
                                  <div className="text-[19px] lg:text-[33px] font-bold">
                                    <span className="hidden lg:inline">{currentIndex}.</span> {questionGroup}
                                  </div>
                                )}
                                {currentStepData.questions[questionGroup].map((question, index) => (
                                  <Field
                                    key={index}
                                    control={form.control}
                                    name={index === 0 ? questionGroup : `${questionGroup} - ${index + 1}`}
                                    label={question.question}
                                    type="radio"
                                    options={question.options.map((option) => ({ value: option, label: option }))}
                                  />
                                ))}
                              </div>
                            );
                          }
                          return null;
                        });
                      })()}
                    </div>
                  </div>

                  <div>
                    <div className="container mb-16 lg:mb-0 lg:pt-10 lg:pb-24 lg:max-w-7xl">
                      <div className="flex items-center justify-between">
                        <Button
                          type="button"
                          className="text-[16px] lg:text-[23px] text-primary-dark lg:text-text-primary ps-0 underline lg:no-underline hover:no-underline"
                          variant="link"
                          onClick={handleBack}
                          disabled={currentStep === 0 && !showAdditionalQuestions && !showAdditionalQuestions2} // ✅ FIX
                        >
                          Back
                        </Button>
                        <Button
                          type="button"
                          className="flex items-center w-[158px] lg:w-[284px] py-[19px] lg:py-[22px] text-[19px] lg:text-[23px] text-background-paper disabled:text-background-default bg-primary hover:bg-primary disabled:bg-primary-light rounded-[18px] lg:rounded-[24px] disabled:opacity-100 [&_svg]:w-[20px] lg:[&_svg]:w-[27px] [&_svg]:h-[14px]"
                          onClick={handleNext}
                          disabled={!isStepAnswered || isProcessing}
                        >
                          <span>{isProcessing ? "Processing..." : "Next"}</span>
                          {isProcessing && (
                            <Arrow2
                              className={`stroke-current text-background-paper ${
                                !isStepAnswered ? "opacity-60" : "opacity-100"
                              }`}
                            />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </FormProvider>
              </form>
            ) : (
              <div className="container pt-4 pb-16 lg:pt-20">
                <Result score={score} />
                {score < 50 && (
                  <>
                    <div className="lg:hidden">
                      <div className="container pt-8">
                        <h2 className="text-center text-[27px] leading-[40px] font-bold mb-6">
                          Need More Tailored Help?
                        </h2>
                        <p className="text-center">
                          Looking for more personalized guidance to take your startup further?
                        </p>
                        <p className="text-center mb-3">
                          <span className="text-primary-dark font-bold">Book a consultation</span> to explore additional
                          services with <span className="text-primary-dark font-bold">FVA Advisory,</span> including:
                        </p>
                        <div className="flex justify-between mb-6">
                          <ul className="space-y-2">
                            <li className="flex items-center gap-1">
                              <Checkmark className="w-[16px] h-[16px] fill-current text-primary-dark" />
                              <span className="text-text-secondary text-[13px] leading-[24px]">Market Research</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <Checkmark className="w-[16px] h-[16px] fill-current text-primary-dark" />
                              <span className="text-text-secondary text-[13px] leading-[24px]">Pitch Deck</span>
                            </li>
                          </ul>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-1">
                              <Checkmark className="w-[16px] h-[16px] fill-current text-primary-dark" />
                              <span className="text-text-secondary text-[13px] leading-[24px]">Financial Modeling</span>
                            </li>
                            <li className="flex items-center gap-1">
                              <Checkmark className="w-[16px] h-[16px] fill-current text-primary-dark" />
                              <span className="text-text-secondary text-[13px] leading-[24px]">DCF Valuation</span>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <CTA
                            href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins"
                            target="_blank"
                            className="text-primary-dark border-primary-dark border-[3px] !py-2 bg-white"
                          >
                            Book a Consultation
                          </CTA>
                        </div>
                      </div>
                    </div>

                    <div className="hidden lg:block">
                      <div className="container pt-20 pb-6">
                        <h2 className="text-center text-[39px] leading-[56px] font-bold mb-5">
                          Need More Tailored Help?
                        </h2>
                        <p className="text-center text-[27px] leading-[40px]">
                          Looking for more <span className="text-info">personalized guidance</span> to take your startup
                          further?
                        </p>
                        <p className="text-center text-[27px] leading-[40px] mb-8">
                          <span className="text-info">Book a consultation</span> to explore additional services with{" "}
                          <span className="text-info">FVA Advisory,</span> including:
                        </p>
                        <div className="flex justify-between mb-10 max-w-[737px] mx-auto">
                          <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                              <Checkmark className="w-[33px] h-[33px] fill-current text-info" />
                              <span className="text-text-secondary text-[27px] leading-[40px]">Financial Modeling</span>
                            </li>
                            <li className="flex items-center gap-4">
                              <Checkmark className="w-[33px] h-[33px] fill-current text-info" />
                              <span className="text-text-secondary text-[27px] leading-[40px]">DCF Valuation</span>
                            </li>
                          </ul>
                          <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                              <Checkmark className="w-[33px] h-[33px] fill-current text-info" />
                              <span className="text-text-secondary text-[27px] leading-[40px]">Market Research</span>
                            </li>
                            <li className="flex items-center gap-4">
                              <Checkmark className="w-[33px] h-[33px] fill-current text-info" />
                              <span className="text-text-secondary text-[27px] leading-[40px]">Pitch Deck</span>
                            </li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <CTA
                            href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins"
                            target="_blank"
                            className="text-primary-dark border-primary-dark border-[4px] !rounded-[27px] !py-2 bg-transparent !w-[344px]"
                          >
                            Book a Consultation
                          </CTA>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
