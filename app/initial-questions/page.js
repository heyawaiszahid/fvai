"use client";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { step1Schema, step2Schema } from "@/schemas/initial-questions";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";
import { countries, industryVertical, region, startupStage } from "./optionsData";

export default function InitialQuestions() {
  const [step, setStep] = useState(1);
  const [focusField, setFocusField] = useState(null);
  const [charCount, setCharCount] = useState(0);
  const [formData, setFormData] = useState({});

  const router = useRouter();

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
      console.log({ ...formData, ...values });
      router.push("/initial-questions/valuation");
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
        <main className="w-full">
          <div className="container mx-auto px-6 lg:px-[calc(8vw+6px)] py-6 lg:py-16">
            <div className="relative flex items-center lg:mb-16">
              <div className="absolute">
                <button onClick={handleBack}>
                  <Image src="/icon-arrow-left.svg" width={32} height={32} alt="" className="w-[20px] lg:w-[32px]" />
                </button>
              </div>
              <div className="w-full text-center text-2xl lg:text-4xl">
                <span className="uppercase">Step</span> {step} of 2
              </div>
            </div>

            <div className="py-8 flex flex-col gap-6">
              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7 lg:space-y-16 flex flex-col">
                  {step === 1 && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
                      <CustomFormField
                        control={form.control}
                        name="fullName"
                        placeholder="John Doe"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Full Name"
                      />
                      <CustomFormField
                        control={form.control}
                        name="email"
                        placeholder="name@gmail.com"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Email"
                      />
                      <CustomFormField
                        control={form.control}
                        name="startupName"
                        placeholder="Finovate"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Startup Name"
                      />
                      <CustomFormField
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
                      <CustomFormField
                        control={form.control}
                        name="businessDescription"
                        placeholder="Is a real estate company specializing in residential and commercial propeties, offering sales, rentals, and property management services."
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Business Description"
                        type="textarea"
                        charCount={charCount}
                        handleDescriptionChange={(e) => {
                          setCharCount(e.target.value.length);
                        }}
                      />
                      <CustomFormField
                        control={form.control}
                        name="startupWebsiteUrl"
                        placeholder="https://your-startup.com"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Startup Website URL (optional)"
                      />
                    </div>
                  )}

                  {step === 2 && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                      <CustomFormField
                        control={form.control}
                        name="startupStage"
                        placeholder="Select"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Startup Stage"
                        type="select"
                        options={startupStage}
                      />
                      <CustomFormField
                        control={form.control}
                        name="industryVertical"
                        placeholder="Select"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Industry Vertical"
                        type="select"
                        options={industryVertical}
                      />
                      <CustomFormField
                        control={form.control}
                        name="region"
                        placeholder="Select"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Region"
                        type="select"
                        options={region}
                      />
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full lg:max-w-64 ml-auto py-[22px] lg:py-[26px] bg-primary hover:bg-primary text-2xl lg:text-3xl font-bold rounded-xl focus-visible:ring-0 disabled:bg-primary-light disabled:text-background-default disabled:opacity-100"
                    disabled={!isValid}
                  >
                    Continue
                  </Button>
                </form>
              </FormProvider>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
