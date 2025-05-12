"use client";

import CTA from "@/components/CTA";
import Field from "@/components/Field";
import Header from "@/components/Header";
import Chat from "@/components/icons/Chat";
import Checkmark from "@/components/icons/Checkmark";
import Good from "@/components/icons/Good";
import Send from "@/components/icons/Send";
import SuccessBig from "@/components/icons/SuccessBig";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { getCookie } from "cookies-next";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

export default function Success() {
  const [focusField, setFocusField] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const cardSchema = z.object({
    fullName: z.string().min(1, { message: "Full Name is required." }),
    title: z.string().min(1, { message: "Title is required." }),
    email: z.string().email({ message: "Invalid email address." }),
  });

  const form = useForm({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      fullName: "",
      title: "",
      email: "",
    },
    mode: "onChange",
  });

  const { errors, isValid } = form.formState;

  const onSubmit = async (values) => {
    const appDataCookie = getCookie("appData");
    const appData = appDataCookie ? JSON.parse(appDataCookie) : {};

    const payload = {
      ...appData,
      billing: {
        ...appData.billing,
        ...values,
      },
    };

    await fetch("/api/valuationData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then((res) => res.json());

    setIsSubmitted(true);
  };

  return (
    <div>
      <Header>
        <Chat className="w-[52px] h-[52px]" />
      </Header>

      <main className="pt-4 lg:pt-12 pb-16 lg:bg-custom-gradient-2 lg:relative">
        <div className="relative z-10 h-full lg:flex lg:flex-wrap lg:max-w-7xl lg:mx-auto">
          <section className="mb-8 lg:w-1/2 lg:pr-20 lg:mb-20">
            <div className="container lg:mb-8">
              <h2 className="text-[23px] leading-[32px] lg:text-[47px] lg:leading-[64px] lg:text-center mb-4">
                <span className="text-primary font-bold">Thank You</span> for Your Purchase!
              </h2>
              <div className="text-center mb-4">
                <SuccessBig className="w-[80px] h-[80px] lg:w-[122px] lg:h-[122px] mx-auto" />
                <span className="text-[19px] leading-[32px] lg:text-[27px] lg:leading-[40px] text-primary font-bold uppercase">
                  Success!
                </span>
              </div>
              <p className="text-center text-[13px] leading-[24px] lg:text-[19px] lg:leading-[32px] text-text-secondary">
                Your payment was successfully processed. Your personalized report is being generated. This may take a
                few moments. Thank you for your patience!
              </p>
            </div>

            <div className="container hidden lg:block">
              <h3 className="text-[16px] leading-[24px] font-bold mb-3">Generating your report...</h3>

              <div className="flex items-center gap-2">
                <div className="relative flex-1 shadow-lg">
                  <div className="w-full h-[32px] bg-[#EDEDED]"></div>
                  <div className="h-[32px] bg-text-primary absolute top-0 left-0" style={{ width: "80%" }}></div>
                </div>
                <div className="text-[23px] leading-[32px] text-text-secondary lg:text-text-primary">80%</div>
              </div>
            </div>
          </section>

          {!isSubmitted && (
            <section className="mb-8 lg:w-1/2 lg:pl-20">
              <div className="container">
                <h2 className="text-[23px] leading-[32px] lg:text-[39px] lg:leading-[56px] font-bold mb-1">
                  Report Contact Details
                </h2>
                <p className="text-[13px] leading-[24px] lg:text-[19px] lg:leading-[32px] text-text-secondary mb-4 lg:mb-6">
                  Who should the Valuation Report be addressed to:
                </p>

                <FormProvider {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
                    <div className="grid grid-cols-1 gap-5 lg:gap-8 mb-4 lg:mb-8">
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
                        name="title"
                        placeholder="Chief Financial Officer"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Title"
                      />
                      <Field
                        control={form.control}
                        name="email"
                        placeholder="johndoe@gmail.com"
                        focusField={focusField}
                        setFocusField={setFocusField}
                        errors={errors}
                        label="Email"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full max-w-[193px] text-[19px] leading-[32px] h-[31px] lg:h-[40px] rounded-[9px] bg-text-secondary hover:bg-text-secondary disabled:bg-text-disabled lg:bg-text-primary lg:hover:bg-text-primary lg:disabled:bg-[#6d6f73] disabled:text-background-default disabled:opacity-100 mb-3 lg:mb-5"
                      disabled={!isValid}
                    >
                      <span>Send</span>
                      <Send className={`w-[24px] h-[24px] ${!isValid ? "opacity-60" : "opacity-100"}`} />
                    </Button>

                    <p className="text-[13px] leading-[24px] lg:text-[23px] lg:leading-[32px] text-text-secondary">
                      Your Valuation Report will be emailed to you within 48 hours.
                    </p>
                  </form>
                </FormProvider>
              </div>
            </section>
          )}

          {isSubmitted && (
            <section className="mb-8 lg:w-1/2 lg:pt-16">
              <div className="container">
                <p className="hidden lg:block text-[120px] leading-[100px] uppercase font-bold text-success opacity-[12%]">
                  Success!
                </p>
                <Good className="w-[32px] h-[32px] lg:w-[116px] lg:h-[116px] fill-current text-success-dark inline-block lg:block mr-3 lg:mx-auto" />
                <p className="text-[19px] leading-[32px] lg:text-[33px] lg:leading-[48px] inline lg:block lg:text-center lg:mb-8">
                  Your information has been received. Your Valuation Report will be emailed to you within 48 hours.
                </p>
                <div className="hidden lg:block text-right">
                  <CTA href="/" className="lg:!max-w-[260px] lg:!py-1 lg:!rounded-[18px]">
                    Home Page
                  </CTA>
                </div>
              </div>
            </section>
          )}

          <section className="mb-8 lg:hidden">
            <div className="container">
              <h3 className="text-[16px] leading-[24px] font-bold mb-3">Generating your report...</h3>

              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <div className="w-full h-[20px] bg-[#EDEDED]"></div>
                  <div className="h-[20px] bg-primary absolute top-0 left-0" style={{ width: "80%" }}></div>
                </div>
                <div className="text-[23px] leading-[32px] text-text-secondary">80%</div>
              </div>
            </div>
          </section>

          <section className="mb-6 lg:w-full">
            <div className="container">
              <h2 className="hidden lg:block text-[39px] leading-[56px] font-bold text-center mb-5">
                Need More Tailored Help?
              </h2>
              <p className="text-center lg:text-[27px] lg:leading-[40px]">
                Looking for more <span className="lg:text-info">personalized guidance</span> to take your startup
                further?
              </p>
              <p className="text-center mb-3 lg:text-[27px] lg:leading-[40px] lg:mb-5">
                <span className="text-primary-dark font-bold lg:font-normal lg:text-info">Book a consultation</span> to
                explore additional services with{" "}
                <span className="text-primary-dark font-bold lg:font-normal lg:text-info">FVA Advisory,</span>{" "}
                including:
              </p>
              <div className="flex justify-between mb-6 lg:max-w-[737px] lg:mx-auto">
                <ul className="space-y-2">
                  <li className="flex items-center gap-1 lg:gap-4">
                    <Checkmark className="w-[16px] h-[16px] lg:w-[32px] lg:h-[32px] fill-current text-primary-dark lg:text-info" />
                    <span className="text-text-secondary text-[13px] leading-[24px] lg:text-[27px] lg:leading-[40px]">
                      Market Research
                    </span>
                  </li>
                  <li className="flex items-center gap-1 lg:gap-4">
                    <Checkmark className="w-[16px] h-[16px] lg:w-[32px] lg:h-[32px] fill-current text-primary-dark lg:text-info" />
                    <span className="text-text-secondary text-[13px] leading-[24px] lg:text-[27px] lg:leading-[40px]">
                      Pitch Deck
                    </span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-1 lg:gap-4">
                    <Checkmark className="w-[16px] h-[16px] lg:w-[32px] lg:h-[32px] fill-current text-primary-dark lg:text-info" />
                    <span className="text-text-secondary text-[13px] leading-[24px] lg:text-[27px] lg:leading-[40px]">
                      Financial Modeling
                    </span>
                  </li>
                  <li className="flex items-center gap-1 lg:gap-4">
                    <Checkmark className="w-[16px] h-[16px] lg:w-[32px] lg:h-[32px] fill-current text-primary-dark lg:text-info" />
                    <span className="text-text-secondary text-[13px] leading-[24px] lg:text-[27px] lg:leading-[40px]">
                      DCF Valuation
                    </span>
                  </li>
                </ul>
              </div>
              <div className="text-center mb-8 lg:mb-12">
                <CTA
                  href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins"
                  target="_blank"
                  className="text-primary-dark border-primary-dark border-[3px] !py-1 bg-white lg:max-w-[344px] lg:bg-transparent"
                >
                  Book a Consultation
                </CTA>
              </div>
            </div>
          </section>

          <section className="lg:hidden">
            <div className="container">
              <p className="text-[11px] leading-[16px] text-text-secondary text-center">
                If you have any questions, check your email for more details or contact us at:{" "}
                <span className="text-text-primary font-bold">contact@fvaadvisory.com</span>
              </p>
            </div>
          </section>
        </div>

        <section className="hidden lg:block text-center bg-[#dee4f9] py-8 absolute bottom-0 left-0 right-0">
          <p className="text-text-disabled text-[16px] leading-[24px]">© 2025 FVA Intelligence. All rights reserved.</p>
        </section>
      </main>
    </div>
  );
}
