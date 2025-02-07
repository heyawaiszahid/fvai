import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Checkmark from "@/components/icons/Checkmark";
import Retry from "@/components/Retry";
import Image from "next/image";
import Link from "next/link";

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
                <Retry href="/detailed-questionnaire">Start Over</Retry>
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
          <section className="text-center">
            <div className="text-[16px] lg:text-[23px] lg:leading-[32px] mb-3 lg:mb-10 lg:max-w-[806px] lg:mx-auto">
              Looking for more tailored help? Book a consultation to explore additional services with FVA Advisory.
            </div>
            <ul className="flex flex-wrap justify-between gap-y-2 text-left text-[13px] lg:text-[23px] mb-5 lg:mb-10">
              {["Market Research", "Financial Modeling", "Pitch Deck", "DCF Valuation"].map((item) => (
                <li key={item} className="flex items-center gap-1 lg:gap-3 min-w-[150px] sm:min-w-fit">
                  <Checkmark className="w-[20px] h-[20px] fill-current text-text-secondary" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="block text-center text-[16px] lg:text-[28px] font-semibold text-background-paper bg-secondary-light py-2 lg:py-4 mb-5 lg:max-w-md lg:mx-auto rounded-[20px] lg:rounded-full"
            >
              Book a Consultation
            </Link>
            <div className="lg:hidden">
              <Retry href="/detailed-questionnaire" className="no-underline">
                Start Over
              </Retry>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
