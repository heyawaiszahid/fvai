"use client";

import Field from "@/components/Field";
import Back from "@/components/icons/Back";
import Good from "@/components/icons/Good";
import PaymentIcons from "@/components/icons/PaymentIcons";
import SSL from "@/components/icons/SSL";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

export default function Payment() {
  const router = useRouter();
  const [focusField, setFocusField] = useState(null);

  const cardSchema = z.object({
    cardNumber: z.string().length(16, "Card number must be exactly 16 digits"),
    expiryDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiration date (MM/YY)"),
    cvc: z
      .string()
      .min(3, "CVC must be at least 3 digits")
      .max(4, "CVC can't be more than 4 digits")
      .regex(/^\d+$/, "Must contain only numbers"),
  });

  const form = useForm({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      fullName: "",
      cardNumber: "",
      expiryDate: "",
      cvc: "",
    },
    mode: "onChange",
  });

  const { errors, isValid } = form.formState;

  const onSubmit = (values) => {
    console.log(values);
    router.push("/detailed-questionnaire/valuation/report/payment/error");
  };

  const handleBack = () => {
    router.push("/detailed-questionnaire/valuation/report");
  };
  return (
    <>
      <div className="lg:hidden">
        <main className="w-full pt-6 pb-16 lg:pt-28 lg:bg-custom-gradient-2 lg:relative">
          <div className="w-[236px] h-[198px] absolute top-[0px] right-0 bg-[url(/logo-aesthetic-2.png)] bg-no-repeat bg-cover opacity-[23%] hidden lg:block"></div>
          <div className="container lg:px-[6vw] relative z-10">
            <div className="relative flex items-center mb-8 lg:mb-16">
              <button onClick={handleBack} className="absolute left-0">
                <Back className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] fill-current text-text-secondary" />
              </button>
              <h2 className="w-full text-center text-[19px] leading-[32px]">Complete Your Purchase</h2>
            </div>

            <h3 className="text-[19px] leading-[32px] mb-1">Enter your credit card details:</h3>

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
                    name="cardNumber"
                    placeholder="4242 4242 4242 4242"
                    focusField={focusField}
                    setFocusField={setFocusField}
                    errors={errors}
                    label="Card Number"
                  />
                  <div className="grid grid-cols-2 gap-5">
                    <Field
                      control={form.control}
                      name="expiryDate"
                      placeholder="MM/YY"
                      focusField={focusField}
                      setFocusField={setFocusField}
                      errors={errors}
                      label="Expiration Date"
                    />
                    <Field
                      control={form.control}
                      name="cvc"
                      placeholder="123"
                      focusField={focusField}
                      setFocusField={setFocusField}
                      errors={errors}
                      label="CVC / CVV"
                    />
                  </div>
                </div>

                <div className="flex gap-2 items-center mb-1">
                  <Good className="w-[20px] h-[20px] fill-current text-white bg-success-dark p-1 rounded-[5px]" />
                  <p className="text-[11px] leading-[16px]">
                    Your payment is <span className="text-primary">100% secure.</span>
                  </p>
                </div>

                <div className="flex gap-2 items-center mb-2">
                  <SSL className="w-[20px] h-[20px]" />
                  <p className="text-[11px] leading-[16px]">
                    All data is encrypted <span className="text-primary">with SSL.</span>
                  </p>
                </div>

                <div className="flex gap-2 items-center mb-6">
                  <p className="text-[13px] leading-[24px]">Trusted partners:</p>
                  <PaymentIcons className="w-[20px] h-[20px]" />
                </div>

                <Button
                  type="submit"
                  className="w-full lg:max-w-[259px] py-6 lg:py-7 lg:ml-auto text-[23px] lg:text-[27px] font-bold rounded-[10px] lg:rounded-[18px] bg-primary hover:bg-primary disabled:bg-primary-light disabled:text-background-default"
                  disabled={!isValid}
                >
                  Pay Now - $500
                </Button>
              </form>
            </FormProvider>
          </div>
        </main>
      </div>

      <div className="hidden lg:block">
        <main>Payment Page Desktop</main>
      </div>
    </>
  );
}
