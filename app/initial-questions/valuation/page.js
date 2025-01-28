import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function FreeValuationResults() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto pb-6 lg:py-6">
          <section className="grid grid-cols-1 lg:grid-cols-2 lg:mb-6">
            <div className="overflow-hidden lg:order-2">
              <Image src="/charts.png" width={709} height={664} alt="" className="w-[393px] lg:w-[709px] -mt-8 lg:-mt-4 mx-auto" />
            </div>
            <div className="px-6 -mt-24 lg:mt-0 lg:py-16">
              <div className="text-3xl lg:text-5xl text-center text-text-secondary leading-snug lg:leading-tight mb-3 lg:mb-4">
                Seed Stage Fintech <br /> startups{" "}
                <span className="text-primary-dark font-semibold">
                  pre-money <br /> valuations
                </span>{" "}
                range <br /> between :
              </div>
              <div className="text-[40px] lg:text-5xl text-center text-text-secondary font-bold mb-4 lg:mb-9">$4.3M - $17.6M</div>
              <Link
                href="/detailed-questionnaire"
                className="bg-primary block text-2xl lg:text-2xl text-background-paper text-center font-bold rounded-full p-4 max-w-md mx-auto mb-4"
              >
                Refine My Valuation <br />
                Start Scorecard
              </Link>
            </div>
          </section>

          <section className="px-6">
            <div className="text-center text-sm lg:text-2xl leading-relaxed mb-6">
              The valuation range above is based on the 1st quartile to 3rd quartile pre-money valuations implied from fundraising
              transactions in your region, stage of development, and vertical.
            </div>
            <div className="flex items-center gap-1 mb-8">
              <Image src="/icon-back.svg" width={20} height={20} alt="" />
              <Link href="/initial-questions" className="text-text-secondary text-base lg:text-2xl underline">
                Try Again
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
