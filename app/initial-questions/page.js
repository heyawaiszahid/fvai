"use client";

import Field from "@/components/Field";
import Header from "@/components/Header";
import Back from "@/components/icons/Back";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import countries from "@/lib/countries";
import { step1Schema, step2Schema } from "@/schemas/initial-questions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

export default function InitialQuestions() {
  const [step, setStep] = useState(1);
  const [focusField, setFocusField] = useState(null);
  const [charCount, setCharCount] = useState(0);
  let [formData, setFormData] = useState({});
  const [options, setOptions] = useState({});

  const router = useRouter();

  useEffect(() => {
    fetch("/api/initial-questions/valuation")
      .then((response) => response.json())
      .then((data) => {
        setOptions(data);
      });
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

  const onSubmit = (values) => {
    if (step === 1) {
      setFormData((prevData) => ({ ...prevData, ...values }));
      setStep(2);
    }

    if (step === 2) {
      formData = { ...formData, ...values };
      const { region, industry, stage } = formData;
      const queryString = new URLSearchParams({ region, industry, stage }).toString();
      router.push(`/initial-questions/valuation?${queryString}`);
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
      <Header />
      <div className="flex">
        <Sidebar />

        <main className="container pt-6 pb-16 lg:pt-16 lg:px-[6vw]">
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
                      placeholder="Describe your business..."
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
                      placeholder="https://your-startup.com"
                      focusField={focusField}
                      setFocusField={setFocusField}
                      errors={errors}
                      label="Website URL (optional)"
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
                      options={options.stages}
                    />
                    <Field
                      control={form.control}
                      name="industry"
                      placeholder="Select"
                      focusField={focusField}
                      setFocusField={setFocusField}
                      errors={errors}
                      label="Industry Vertical"
                      type="select"
                      options={options.industries}
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
                      options={options.regions}
                    />
                  </>
                )}
              </div>

              <Button
                type="submit"
                className="w-full lg:max-w-[259px] py-6 lg:py-7 lg:ml-auto text-[23px] lg:text-[27px] font-bold rounded-[10px] lg:rounded-[18px] bg-primary hover:bg-primary disabled:bg-primary-light disabled:text-background-default"
                disabled={!isValid}
              >
                Continue
              </Button>
            </form>
          </FormProvider>
        </main>
      </div>
    </>
  );
}
