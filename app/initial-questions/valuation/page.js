import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Checkmark from "@/components/icons/Checkmark";
import InitialValuation from "@/components/InitialValuation";
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
            <section className="grid grid-cols-1">
              <div className="flex justify-center -mb-20">
                <Image
                  src="/charts.png"
                  width={709}
                  height={664}
                  alt=""
                  layout="responsive"
                  loading="eager"
                  className="-mt-8"
                />
              </div>
              <InitialValuation />
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
              <InitialValuation />
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
