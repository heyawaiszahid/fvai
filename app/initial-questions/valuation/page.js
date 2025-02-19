import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Retry from "@/components/Retry";
import spreadsheet from "@/lib/spreadsheet.json";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Valuation() {
  const cookiesStore = await cookies();

  const appDataCookie = cookiesStore.get("appData");

  const appData = JSON.parse(appDataCookie.value);

  const { region, industry, stage } = appData.initialQuestions;

  const range = spreadsheet.structuredData?.[region]?.[industry]?.[stage] || [null, null];

  return (
    <>
      <Header />
      <main className="container pb-16">
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
            The valuation range above is based on the 1st to 3rd quartile pre-money valuations implied from fundraising
            transactions in your region, stage of development, and vertical.
          </p>
          <Retry href="/initial-questions">Try Again</Retry>
        </section>
      </main>
    </>
  );
}
