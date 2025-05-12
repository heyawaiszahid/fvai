"use client";

import Field from "@/components/Field";
import Header from "@/components/Header";
import Back from "@/components/icons/Back";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import countries from "@/lib/countries";
import spreadsheet from "@/lib/spreadsheet.json";
import { step1Schema, step2Schema } from "@/schemas/initial-questions";
import { zodResolver } from "@hookform/resolvers/zod";
import { deleteCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function InitialQuestions() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [focusField, setFocusField] = useState(null);
  const [charCount, setCharCount] = useState(0);
  let [formData, setFormData] = useState({});
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    deleteCookie("appData");
  }, []);

  const schema = step === 1 ? step1Schema : step2Schema;

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      startupName: "",
      startupCountry: "",
      businessDescription: "",
      startupWebsiteUrl: "",
      startupStage: "",
      industryVertical: "",
      region: "",
    },
    mode: "onChange",
  });

  const { errors, isValid } = form.formState;

  const onSubmit = async (values) => {
    if (step === 1) {
      setFormData((prevData) => ({ ...prevData, ...values }));
      setStep(2);
      return;
    }

    setIsProcessing(true);

    if (step === 2) {
      const { region, industry, stage } = values;
      const range = spreadsheet.structuredData?.[region]?.[industry]?.[stage] || [null, null];

      const id = Date.now();
      const payload = { id, initialQuestions: { ...formData, ...values, range } };

      setCookie("appData", JSON.stringify(payload));

      const { success } = await fetch("/api/valuationData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }).then((res) => res.json());

      success && router.push(`/initial-questions/valuation`);
    }
  };

  const handleBack = () => {
    if (step === 1) {
      router.push("/");
    }

    if (step === 2) {
      setStep(1);
      form.reset(form.getValues());
    }
  };

  return (
    <>
      <div className="lg:hidden">
        <Header />
      </div>

      <div className="flex">
        <Sidebar>
          <p className="text-[16px] leading-[24px]">
            {step === 1
              ? "Tell us about you and your startup, and we'll use these details to tailor your valuation."
              : "Next, we'll gather a few details about your startup's stage, industry, and region so we can benchmark the valuation against relevant fundraising transactions in our database."}
          </p>
        </Sidebar>

        <main className="w-full pt-6 pb-16 lg:pt-28 lg:bg-custom-gradient-2 lg:relative">
          <div className="w-[236px] h-[198px] absolute top-[0px] right-0 bg-[url(/logo-aesthetic-2.png)] bg-no-repeat bg-cover opacity-[23%] hidden lg:block"></div>
          <div className="container lg:px-[6vw] relative z-10">
            <div className="relative flex items-center mb-8 lg:mb-16">
              <button onClick={handleBack} className="absolute left-0">
                <Back className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] fill-current text-text-secondary" />
              </button>

              <h2 className="w-full text-center text-[23px] lg:text-[39px]">
                <span className="uppercase">Step </span>
                {step} of 2
              </h2>
            </div>

            <FormProvider {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mb-8 lg:mb-16">
                  {step === 1 && (
                    <>
                      <Field
                        control={form.control}
                        name="fullName"
                        placeholder="John Doe"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Full Name"
                      />
                      <Field
                        control={form.control}
                        name="email"
                        placeholder="name@gmail.com"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Email"
                      />
                      <Field
                        control={form.control}
                        name="startupName"
                        placeholder="Finovate"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Startup Name"
                      />
                      <Field
                        control={form.control}
                        name="startupCountry"
                        placeholder="Select"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Startup Country"
                        type="select"
                        options={countries}
                      />
                      <Field
                        control={form.control}
                        name="businessDescription"
                        placeholder="Is a fintech company specialising in offering mom-and-pop store owners working capital financing."
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Business Description"
                        type="textarea"
                        charCount={charCount}
                        handleDescriptionChange={(e) => setCharCount(e.target.value.length)}
                      />
                      <Field
                        control={form.control}
                        name="startupWebsiteUrl"
                        placeholder="www.yourstartup.com"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Startup Website URL (optional)"
                      />
                    </>
                  )}

                  {step === 2 && (
                    <>
                      <Field
                        control={form.control}
                        name="stage"
                        placeholder="Select"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Startup Stage"
                        type="select"
                        options={spreadsheet.stages}
                      />
                      <Field
                        control={form.control}
                        name="industry"
                        placeholder="Select"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Industry/Vertical"
                        type="select"
                        options={spreadsheet.industries}
                      />
                      <Field
                        control={form.control}
                        name="region"
                        placeholder="Select"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Region"
                        type="select"
                        options={spreadsheet.regions}
                      />
                    </>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full lg:max-w-[259px] py-6 lg:py-7 lg:ml-auto text-[23px] lg:text-[27px] font-bold rounded-[10px] lg:rounded-[18px] bg-primary hover:bg-primary disabled:bg-primary-light disabled:text-background-default"
                  disabled={!isValid || isProcessing}
                >
                  {isProcessing ? "Processing..." : "Continue"}
                </Button>
              </form>
            </FormProvider>
          </div>{" "}
        </main>
      </div>
    </>
  );
}
