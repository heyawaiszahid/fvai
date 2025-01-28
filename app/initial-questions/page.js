"use client";

import { Button } from "@/components/ui/button";
import SidebarLayout from "@/layouts/SidebarLayout";
import { step1Schema, step2Schema } from "@/schemas/initial-questions";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";
import { countries } from "./countries";

export default function FreeValuation() {
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
    <SidebarLayout>
      <div className="container mx-auto px-6 py-6">
        <div className="lg:px-[8vw] lg:py-10">
          <div className="relative flex items-center lg:mb-16">
            <div className="absolute">
              <button onClick={handleBack}>
                <Image
                  src="/icon-arrow-left.svg"
                  width={32}
                  height={32}
                  alt="left arrow icon"
                  className="w-[20px] lg:w-[32px]"
                />
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
                      placeholder="Choose your startup's country"
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
                      placeholder="Series A"
                      focusField={focusField}
                      setFocusField={setFocusField}
                      errors={errors}
                      label="Startup Stage"
                    />
                    <CustomFormField
                      control={form.control}
                      name="industryVertical"
                      placeholder="SaaS"
                      focusField={focusField}
                      setFocusField={setFocusField}
                      errors={errors}
                      label="Industry Vertical"
                    />
                    <CustomFormField
                      control={form.control}
                      name="region"
                      placeholder="Europe"
                      focusField={focusField}
                      setFocusField={setFocusField}
                      errors={errors}
                      label="Region"
                    />
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full py-[22px] lg:py-[26px] lg:max-w-64 ml-auto bg-primary text-2xl lg:text-3xl font-bold rounded-xl hover:bg-primary focus-visible:ring-0 disabled:bg-primary-light disabled:text-background-default disabled:opacity-100"
                  disabled={!isValid}
                >
                  Continue
                </Button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}
