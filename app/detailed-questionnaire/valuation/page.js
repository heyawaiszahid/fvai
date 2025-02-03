import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Valuation() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-6 lg:pb-16">
          <section className="lg:grid grid-cols-2 gap-8 mb-4 lg:mb-12">
            <div className="text-center lg:text-left lg:pt-[86px]">
              <div className="text-3xl lg:text-5xl lg:leading-snug leading-[48px] text-text-secondary mb-6 lg:mb-8">
                Your Pre-Money <br /> Valuation is: <span className="text-primary font-bold">$6.2M</span>
              </div>
              <div className="text-base lg:text-2xl mb-8 lg:mb-10 text-text-secondary lg:max-w-md">
                Based on your responses, the estimated range has been refined, giving you a precise valuation for your startup.
              </div>
              <Link
                href="/detailed-questionnaire/valuation/report"
                className="bg-primary block text-2xl text-background-paper text-center font-bold rounded-full p-4 max-w-md mx-auto lg:mx-0 mb-6"
              >
                Get Your Full <br />
                Valuation Report
              </Link>
              <div className="text-[19px] mb-2 lg:mb-5">We've helped startups raise millions in funding</div>
              <Image src="/crypto-trading.png" width={248} height={100} alt="" className="mx-auto lg:hidden" />
              <div className="hidden lg:flex text-2xl underline items-center gap-1">
                <Image src="/icon-back.svg" width={20} height={20} alt="" className="w-[34px]" />
                <Link href="/detailed-questionnaire" className="text-text-secondary lg:text-2xl text-base">
                  Start Over
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end pt-1">
              <Image src="/crypto-trading-desktop.png" width={675} height={633} alt="" />
            </div>
          </section>
          <section className="text-center">
            <div className="text-base lg:text-2xl mb-3 lg:mb-10 lg:max-w-3xl lg:mx-auto">
              Looking for more tailored help? Book a consultation to explore additional services with FVA Advisory.
            </div>
            <ul className="flex flex-wrap justify-between gap-y-2 text-left text-sm lg:text-2xl mb-5 lg:mb-10">
              {["Market Research", "Financial Modeling", "Pitch Deck", "DCF Valuation"].map((item) => (
                <li key={item} className="flex items-center gap-1 lg:gap-3 min-w-[150px] sm:min-w-fit">
                  <Image src="/icon-checkmark.svg" width={32} height={32} alt="" className="w-[16px] lg:w-[26px]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="block text-center text-base lg:text-[28px] font-semibold text-background-paper bg-secondary-light py-2 lg:py-5 mb-4 lg:max-w-md lg:mx-auto rounded-3xl lg:rounded-full"
            >
              Book a Consultation
            </Link>
            <div className="flex items-center gap-1 mb-14 lg:hidden">
              <Image src="/icon-back.svg" width={20} height={20} alt="" />
              <Link href="/detailed-questionnaire" className="text-text-secondary text-base">
                Start Over
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
