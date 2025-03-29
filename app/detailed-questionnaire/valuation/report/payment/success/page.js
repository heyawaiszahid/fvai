"use client";

import CTA from "@/components/CTA";
import Field from "@/components/Field";
import Header from "@/components/Header";
import Checkmark from "@/components/icons/Checkmark";
import Good from "@/components/icons/Good";
import Send from "@/components/icons/Send";
import SuccessBig from "@/components/icons/SuccessBig";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
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

  const onSubmit = (values) => {
    console.log(values);
    setIsSubmitted(true);
  };

  return (
    <div className="lg:hidden">
      <Header />
      <main className="pt-4 pb-16">
        <section className="mb-8">
          <div className="container">
            <h2 className="text-[23px] leading-[32px] mb-4">
              <span className="text-primary font-bold">Thank You</span> for Your Purchase!
            </h2>
            <div className="text-center mb-4">
              <SuccessBig className="w-[80px] h-[80px] mx-auto" />
              <span className="text-[19px] leading-[32px] text-primary font-bold uppercase">Success!</span>
            </div>
            <p className="text-center text-[13px] leading-[24px] text-text-secondary">
              Your payment was successfully processed. Your personalized report is being generated. This may take a few
              moments. Thank you for your patience!
            </p>
          </div>
        </section>

        {!isSubmitted && (
          <section className="mb-8">
            <div className="container">
              <h2 className="text-[23px] leading-[32px] font-bold mb-1">Report Contact Details</h2>
              <p className="text-[13px] leading-[24px] text-text-secondary mb-4">
                Who should the Valuation Report be addressed to:
              </p>

              <FormProvider {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mb-4 lg:mb-16">
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
                    className="w-full max-w-[193px] text-[19px] leading-[32px] h-[31px] rounded-[9px] bg-text-secondary hover:bg-text-secondary disabled:bg-text-disabled disabled:text-background-default disabled:opacity-100 mb-3"
                    disabled={!isValid}
                  >
                    <span>Send</span>
                    <Send className={`w-[24px] h-[24px] ${!isValid ? "opacity-60" : "opacity-100"}`} />
                  </Button>

                  <p className="text-[13px] leading-[24px] text-text-secondary">
                    Your Valuation Report will be emailed to you within 48 hours.
                  </p>
                </form>
              </FormProvider>
            </div>
          </section>
        )}

        {isSubmitted && (
          <section className="mb-8">
            <div className="container">
              <Good className="w-[32px] h-[32px] fill-current text-success-dark inline mr-3" />
              <p className="text-[19px] leading-[32px] inline">
                Your information has been received. Your Valuation Report will be emailed to you within 48 hours.
              </p>
            </div>
          </section>
        )}

        <section className="mb-8">
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

        <section className="mb-6">
          <div className="container">
            <p className="text-center">Looking for more personalized guidance to take your startup further?</p>
            <p className="text-center mb-3">
              <span className="text-primary-dark font-bold">Book a consultation</span> to explore additional services
              with <span className="text-primary-dark font-bold">FVA Advisory,</span> including:
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
            <div className="text-center mb-8">
              <CTA href="#" className="text-primary-dark border-primary-dark border-[3px] !py-1 bg-white">
                Book a Consultation
              </CTA>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <p className="text-[11px] leading-[16px] text-text-secondary text-center">
              If you have any questions, check your email for more details or contact us at:{" "}
              <span className="text-text-primary font-bold">support@example.com.</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
