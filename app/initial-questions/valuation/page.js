import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Checkmark from "@/components/icons/Checkmark";
import Retry from "@/components/Retry";
import Retry2 from "@/components/Retry2";
import Sidebar from "@/components/Sidebar";
import spreadsheet from "@/lib/spreadsheet.json";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Valuation() {
  const cookiesStore = await cookies();

  const appDataCookie = cookiesStore.get("appData");

  const appData = JSON.parse(appDataCookie.value);

  const { region, industry, stage } = appData.initialQuestions;

  // const range = spreadsheet.structuredData?.[region]?.[industry]?.[stage] || [null, null];
  const range = [1, 2];

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
                <h1 className="text-[27px] lg:text-[47px] text-text-secondary leading-[40px] lg:leading-[64px] mb-1">
                  {stage} Stage {industry} startups in {region} have{" "}
                  <span className="text-primary-dark font-bold">pre-money valuations</span> range between :
                </h1>
                <p className="text-[39px] font-bold text-text-secondary mb-5 lg:mb-8">
                  ${range[0] || 0}M - ${range[1] || 0}M
                </p>
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
              <h1 className="text-[47px] text-text-secondary leading-[64px] mb-12 text-center">
                {stage} Stage {industry} startups in {region} have{" "}
                <span className="text-primary-dark font-bold">pre-money valuations</span> range <br /> between:{" "}
                <span className="text-text-secondary font-bold">
                  ${range[0] || 0}M - ${range[1] || 0}M
                </span>
              </h1>
              <div className="text-center">
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
