import CTA from "@/components/CTA";
import DetailedValuation from "@/components/DetailedValuation";
import Header from "@/components/Header";
import Checkmark from "@/components/icons/Checkmark";
import Retry from "@/components/Retry";
import Retry2 from "@/components/Retry2";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Valuation() {
  return (
    <>
      <div className="lg:hidden">
        <Header />
        <main>
          <div className="container pb-16">
            <section className="grid-cols-2 gap-12 mb-4">
              <div className="text-center">
                <div className="text-[27px] leading-[40px] text-text-primary mb-6">
                  Your Pre-Money <br /> Valuation is:{" "}
                  <span className="text-primary font-bold">
                    <DetailedValuation />
                  </span>
                </div>
                <div className="text-[16px] mb-8 text-text-secondary">
                  Based on your responses, the estimated range has been refined, giving you a precise valuation for your
                  startup.
                </div>
                <CTA href="/detailed-questionnaire/valuation/report" className="mb-6">
                  Get Your Full <br />
                  Valuation Report
                </CTA>
                <div className="text-[19px] leading-[32px] mb-2 lg:mb-5">
                  We've helped startups raise millions in funding
                </div>
                <div className="px-[13vw]">
                  <Image
                    src="/crypto-trading.png"
                    width={248}
                    height={100}
                    alt=""
                    layout="responsive"
                    loading="eager"
                  />
                </div>
              </div>
            </section>
            <div className="pt-2">
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
                <CTA
                  href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins"
                  target="_blank"
                  className="text-primary-dark border-primary-dark border-[3px] !py-1 bg-white"
                >
                  Book a Consultation
                </CTA>
              </div>
              <Retry href="/initial-questions" className="no-underline">
                Start Over
              </Retry>
            </div>
          </div>
        </main>
      </div>

      <div className="hidden lg:block">
        <div className="flex">
          <Sidebar>
            <Retry2 href="/initial-questions">Start Over</Retry2>
          </Sidebar>

          <main className="pt-12 bg-custom-gradient-2">
            <div className="relative z-10 max-w-[1160px] mx-auto">
              <h1 className="text-[47px] text-text-secondary leading-[64px] mb-8 text-center font-bold">
                Your Pre-Money Valuation is:{" "}
                <span className="text-primary">
                  <DetailedValuation />
                </span>
              </h1>
              <p className="text-[27px] leading-[40px] text-text-secondary text-center mb-14">
                Based on your responses, the estimated range has been refined, giving you a precise valuation for your
                startup.
              </p>
              <div className="text-center">
                <CTA href="/detailed-questionnaire/valuation/report" className="mb-12">
                  Get Your Full <br />
                  Valuation Report
                </CTA>
              </div>
              <p className="text-[27px] leading-[40px] mb-20 text-center">
                We've helped startups raise millions in funding
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
                    href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins"
                    target="_blank"
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
