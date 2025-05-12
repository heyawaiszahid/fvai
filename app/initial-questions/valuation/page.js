import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Checkmark from "@/components/icons/Checkmark";
import Retry from "@/components/Retry";
import Retry2 from "@/components/Retry2";
import Sidebar from "@/components/Sidebar";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Valuation() {
  const cookiesStore = await cookies();

  const appDataCookie = cookiesStore.get("appData");

  const appData = JSON.parse(appDataCookie.value);

  const { region, industry, stage, range } = appData.initialQuestions;

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

              {range[0] === null ? (
                <div className="text-center">
                  <h1 className="text-[27px] text-text-secondary leading-[40px] mb-5">
                    Fundraising data is <span className="text-primary-dark font-bold">not available</span> for this
                    region.
                  </h1>
                  <CTA href="/initial-questions" className="mb-6">
                    Start Over
                  </CTA>
                  <Retry href="/initial-questions">Try Again</Retry>
                </div>
              ) : (
                <div className="text-center">
                  <h1 className="text-[27px] text-text-secondary leading-[40px] mb-1">
                    {stage} Stage {industry} startups in {region} have{" "}
                    <span className="text-primary-dark font-bold">pre-money valuations</span> range between :
                  </h1>
                  <p className="text-[39px] font-bold text-text-secondary mb-5">
                    ${range[0] || 0}M - ${range[1] || 0}M
                  </p>
                  <CTA href="/detailed-questionnaire" className="mb-6">
                    Refine My Valuation <br />
                    Start Scorecard
                  </CTA>
                  <p className="text-[13px] text-text-primary leading-[24px] mb-6">
                    The valuation range above is based on the 1st to 3rd quartile pre-money valuations implied from
                    fundraising transactions in your region, stage of development, and vertical.
                  </p>
                  <Retry href="/initial-questions">Try Again</Retry>
                </div>
              )}
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
              {range[0] === null ? (
                <div className="text-center">
                  <h1 className="text-[47px] text-text-secondary leading-[64px] mb-12 text-center">
                    Fundraising data is <span className="text-primary-dark font-bold">not available</span> for this
                    region.
                  </h1>
                  <CTA href="/initial-questions" className="mb-20">
                    Start Over
                  </CTA>
                </div>
              ) : (
                <div className="text-center">
                  <h1 className="text-[47px] text-text-secondary leading-[64px] mb-12 text-center">
                    {stage} Stage {industry} startups in {region} have{" "}
                    <span className="text-primary-dark font-bold">pre-money valuations</span> range <br /> between:{" "}
                    <span className="text-text-secondary font-bold">
                      ${range[0] || 0}M - ${range[1] || 0}M
                    </span>
                  </h1>
                  <CTA href="/detailed-questionnaire" className="mb-20">
                    Refine My Valuation - <br /> Start Scorecard
                  </CTA>
                  <p className="text-[27px] leading-[40px] mb-20 text-center">
                    The valuation range above is based on the 1st quartile to 3rd quartile pre-money valuations implied
                    from fundraising transactions in your region, stage of development, and vertical.
                  </p>
                </div>
              )}

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
