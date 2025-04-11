"use client";

import Field from "@/components/Field";
import Back from "@/components/icons/Back";
import Good from "@/components/icons/Good";
import Loading from "@/components/icons/Loading";
import PaymentIcons from "@/components/icons/PaymentIcons";
import SSL from "@/components/icons/SSL";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function StripeCardForm({ onSubmit, isValid, clientSecret, router, fullName }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [cardComplete, setCardComplete] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) {
      setError("Payment system is not ready. Please try again.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: fullName,
          },
        },
      });

      if (error) {
        if (error.type === "card_error" || error.type === "validation_error") {
          setError(error.message);
        } else {
          router.push("/detailed-questionnaire/valuation/report/payment/error");
        }
        return;
      }

      if (paymentIntent?.status === "succeeded") {
        const appDataCookie = getCookie("appData");
        const appData = appDataCookie ? JSON.parse(appDataCookie) : {};

        const payload = {
          ...appData,
          billing: {
            transactionId: paymentIntent.id,
          },
        };

        setCookie("appData", JSON.stringify(payload));

        const response = await fetch("/api/valuationData", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Failed to save payment data");
        }

        onSubmit();
      } else {
        setError("Payment not completed. Please try again.");
      }
    } catch (err) {
      if (err.message.includes("Failed") || !err.type) {
        router.push("/detailed-questionnaire/valuation/report/payment/error");
      } else {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="mb-5 lg:mb-10">
        <div className="px-4 py-[11.5px] border min-h-[44px] bg-background-paper border-others-backdropOverlay rounded-[6px]">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#0a112d",
                  "::placeholder": {
                    color: "#00000080",
                  },
                },
                invalid: {
                  color: "#db262a",
                },
              },
              hidePostalCode: true,
              disableLink: true,
            }}
            onChange={(e) => setCardComplete(e.complete)}
          />
        </div>
        {error && <p className="font-medium text-red-500 text-[11px]">{error}</p>}
      </div>

      <Button
        type="submit"
        className="w-full py-6 lg:py-7 lg:ml-auto text-[23px] lg:text-[27px] font-bold rounded-[10px] lg:rounded-[10px] bg-primary hover:bg-primary disabled:bg-primary-light disabled:text-background-default"
        disabled={!isValid || loading || !stripe || !cardComplete}
      >
        {loading ? "Processing..." : "Pay Now - $500"}
      </Button>
    </form>
  );
}

export default function Payment() {
  const router = useRouter();
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [focusField, setFocusField] = useState(null);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const existingPaymentIntent = sessionStorage.getItem("paymentIntent");

        if (existingPaymentIntent) {
          const { clientSecret, created } = JSON.parse(existingPaymentIntent);
          if (Date.now() - created < 3600000) {
            setClientSecret(clientSecret);
            setLoading(false);
            return;
          }
        }

        const response = await fetch("/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to create payment intent");
        }

        const data = await response.json();
        setClientSecret(data.clientSecret);

        sessionStorage.setItem(
          "paymentIntent",
          JSON.stringify({
            clientSecret: data.clientSecret,
            created: Date.now(),
          })
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    createPaymentIntent();
  }, []);

  const cardSchema = z.object({
    fullName: z.string().min(1, "Full name is required"),
  });

  const form = useForm({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      fullName: "",
    },
    mode: "onChange",
  });

  const { errors, isValid } = form.formState;

  const handleBack = () => {
    router.push("/detailed-questionnaire/valuation/report");
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  return (
    <div className="block lg:flex">
      <Sidebar className="hidden lg:block"></Sidebar>
      <main className="w-full pt-6 pb-16 lg:pt-12 lg:bg-custom-gradient-2">
        <div className="container lg:px-[6vw] relative z-10">
          <div className="relative flex items-center mb-8 lg:mb-10">
            <button onClick={handleBack} className="absolute left-0">
              <Back className="w-[20px] h-[20px] lg:w-[32px] lg:h-[32px] fill-current text-text-secondary" />
            </button>
            <h2 className="w-full text-center text-[19px] leading-[32px] lg:text-[39px] lg:leading-[56px] lg:max-w-[552px] lg:mx-auto lg:text-left">
              Complete Your Purchase
            </h2>
          </div>

          <h3 className="text-[19px] leading-[32px] lg:text-[27px] lg:leading-[40px] mb-1 lg:mb-3 lg:max-w-[552px] lg:mx-auto">
            Enter your credit card details:
          </h3>

          <FormProvider {...form}>
            <div className="flex flex-col lg:max-w-[552px] lg:mx-auto">
              <div className="grid grid-cols-1 gap-5 lg:gap-10 mb-4 lg:mb-10">
                <Field
                  control={form.control}
                  name="fullName"
                  placeholder="John Doe"
                  errors={errors}
                  label="Full Name"
                  focusField={focusField}
                  setFocusField={setFocusField}
                />

                {loading ? (
                  <Loading className="w-[80px] mx-auto" />
                ) : clientSecret ? (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <StripeCardForm
                      onSubmit={() => {
                        sessionStorage.removeItem("paymentIntent");
                        router.push("/detailed-questionnaire/valuation/report/payment/success");
                      }}
                      isValid={isValid}
                      clientSecret={clientSecret}
                      router={router}
                      fullName={form.watch("fullName")}
                    />
                  </Elements>
                ) : (
                  <div className="text-red-500 text-center py-6">Failed to load payment form. Please try again.</div>
                )}
              </div>

              <div className="flex gap-2 items-center mb-1 lg:mb-3">
                <Good className="w-[20px] h-[20px] lg:w-[28px] lg:h-[28px] fill-current text-white bg-success-dark p-1 rounded-[5px]" />
                <p className="text-[11px] leading-[16px] lg:text-[19px] lg:leading-[32px]">
                  Your payment is <span className="text-primary">100% secure.</span>
                </p>
              </div>

              <div className="flex gap-2 items-center mb-2 lg:mb-5">
                <SSL className="w-[20px] h-[20px] lg:w-[28px] lg:h-[28px]" />
                <p className="text-[11px] leading-[16px] lg:text-[19px] lg:leading-[32px]">
                  All data is encrypted <span className="text-primary">with SSL.</span>
                </p>
              </div>

              <div className="flex gap-2 lg:gap-4 items-center mb-6">
                <p className="text-[13px] leading-[24px] lg:text-[19px] lg:leading-[32px]">Trusted partners:</p>
                <PaymentIcons className="w-[146px] h-[20px] lg:w-[209px] lg:h-[28px]" />
              </div>
            </div>
          </FormProvider>
        </div>
      </main>
    </div>
  );
}
