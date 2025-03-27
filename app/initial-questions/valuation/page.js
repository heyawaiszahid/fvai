import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Checkmark from "@/components/icons/Checkmark";
import InitialValuation from "@/components/InitialValuation";
import Retry from "@/components/Retry";
import Retry2 from "@/components/Retry2";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Valuation() {
  return (
    <>
      <div className="lg:hidden">
        <Header />

        <div className="container pb-16">
          <main>
            <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 mb-6 lg:mb-0">
              <div className="lg:order-2 flex justify-center -mb-20 lg:mb-0">
                <Image
                  src="/charts.png"
                  width={709}
                  height={664}
                  alt=""
                  layout="responsive"
                  loading="eager"
                  className="-mt-8 lg:mt-0"
                />
              </div>
              <div className="text-center lg:pt-20">
                <InitialValuation />
                <CTA href="/detailed-questionnaire">
                  Refine My Valuation <br />
                  Start Scorecard
                </CTA>
              </div>
            </section>
            <section className="text-center max-w-[1200px] mx-auto">
              <p className="text-[13px] lg:text-[23px] text-text-primary leading-[24px] lg:leading-[32px] mb-6 lg:mb-12">
                The valuation range above is based on the 1st to 3rd quartile pre-money valuations implied from
                fundraising transactions in your region, stage of development, and vertical.
              </p>
              <Retry href="/initial-questions">Try Again</Retry>
            </section>
          </main>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="flex">
          <Sidebar>
            <Retry2 href="/initial-questions">Start Over</Retry2>
          </Sidebar>

          <main className="pt-12 bg-custom-gradient-2">
            <div className="container px-[6vw] relative z-10">
              <div className="text-center">
                <InitialValuation />
                <CTA href="/detailed-questionnaire" className="mb-20">
                  Refine My Valuation - <br /> Start Scorecard
                </CTA>
              </div>
              <p className="text-[27px] leading-[40px] mb-20 text-center">
                The valuation range above is based on the 1st quartile to 3rd quartile pre-money valuations implied from
                fundraising transactions in your region, stage of development, and vertical.
              </p>

              <div className="mb-20">
                <h2 className="text-center text-[39px] leading-[56px] font-bold mb-5">Need More Tailored Help?</h2>
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
                    href="#"
                    className="text-primary-dark border-primary-dark border-[4px] !rounded-[27px] !py-2 bg-transparent !w-[344px]"
                  >
                    Book a Consultation
                  </CTA>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
