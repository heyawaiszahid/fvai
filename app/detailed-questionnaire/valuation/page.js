import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Checkmark from "@/components/icons/Checkmark";
import Retry from "@/components/Retry";
import Image from "next/image";

export default function Valuation() {
  return (
    <>
      <Header />
      <main>
        <div className="container pb-16">
          <section className="lg:grid grid-cols-2 gap-12 mb-4 lg:mb-12">
            <div className="text-center lg:text-left lg:pt-[82px]">
              <div className="text-[27px] lg:text-[47px] leading-[40px] lg:leading-[64px] text-text-primary lg:text-text-secondary mb-6 lg:mb-8">
                Your Pre-Money <br /> Valuation is: <span className="text-primary font-bold">$6.2M</span>
              </div>
              <div className="text-[16px] lg:text-[27px] mb-8 lg:mb-10 text-text-secondary lg:max-w-[495px]">
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
              <div className="lg:hidden px-[13vw]">
                <Image src="/crypto-trading.png" width={248} height={100} alt="" layout="responsive" loading="eager" />
              </div>
              <div className="hidden lg:block">
                <Retry href="/initial-questions">Start Over</Retry>
              </div>
            </div>
            <div className="hidden lg:flex justify-end pt-1">
              <Image
                src="/crypto-trading-desktop.png"
                width={675}
                height={633}
                alt=""
                layout="responsive"
                loading="eager"
              />
            </div>
          </section>
          <div className="pt-2">
            <p className="text-center">Looking for more personalized guidance to take your startup further?</p>
            <p className="text-center mb-3">
              <span className="text-primary-dark font-bold">Book a consultation</span> to explore additional services
              with
              <span className="text-primary-dark font-bold">FVA Advisory,</span> including:
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
            <Retry href="/initial-questions" className="no-underline">
              Start Over
            </Retry>
          </div>
        </div>
      </main>
    </>
  );
}
