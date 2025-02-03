import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Report() {
  return (
    <>
      <Header />
      <main className="py-4 lg:py-8">
        <section className="mb-8 lg:mb-10 text-center">
          <div className="container mx-auto px-6">
            <div className="mb-6 lg:mb-8 text-[33px] leading-[48px] font-bold lg:text-5xl">
              Get Your <span className="text-primary">Expert Reviewed</span> Report <br className="lg:hidden" /> in 48 hours
            </div>
            <div className="text-base text-text-secondary lg:text-[27px] lg:leading-10">
              Based on your questionnaire responses, we'll create a customized, investor-
              <br className="hidden lg:block" />
              ready report signed off by a Chartered Financial Analyst (CFA)— everything you <br className="hidden lg:block" />
              need to pitch with confidence.
            </div>
          </div>
        </section>
        <section className="mb-8 lg:mb-10 lg:bg-text-primary lg:text-background-paper">
          <div className="container mx-auto px-6 lg:max-w-5xl lg:py-8">
            <div className="flex flex-col gap-8 lg:gap-16">
              {[
                {
                  icon: "bar-chart",
                  title: "Details on fundraising transactions ",
                  description: "see which comparable deals informed your pre-money valuation range",
                },
                {
                  icon: "noto",
                  title: "Commentary on valuation methodology ",
                  description: "understand exactly how your score was calculated and how the valuation was concluded",
                },
                {
                  icon: "file",
                  title: "CFA-Signed Report: ",
                  description: "Build credibility with a valuation endorsed by a Chartered Financial Analyst.",
                },
              ].map(({ icon, title, description }, index) => (
                <div key={index} className="flex gap-2 lg:gap-4">
                  <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-primary-12p lg:w-16 lg:h-16 lg:bg-primary-30p">
                    <Image src={`/icon-${icon}.svg`} width={28} height={28} alt="" className="lg:w-10 lg:h-10" />
                  </div>
                  <div className="text-[15px] lg:text-[23px] lg:leading-snug">
                    <span className="font-bold lg:block">{title}</span>
                    {title === "CFA-Signed Report: " && <br className="lg:hidden" />}
                    <span className="text-text-secondary lg:text-background-paper">{description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mb-12 text-center">
          <div className="container mx-auto px-6">
            <div className="mb-8 leading-8 italic lg:mb-14 lg:mx-auto lg:text-[27px] text-[19px]">
              With 100+ valuation reports delivered in the last year, we've <br className="hidden lg:block" />
              helped startups raise millions in funding.
            </div>
          </div>
        </section>
        <section className="mb-12 text-center">
          <div className="container mx-auto px-6">
            <Link
              href="/detailed-questionnaire/valuation/report/payment"
              className="mx-auto mb-6 block max-w-md rounded-full bg-primary p-4 text-center text-2xl font-bold text-background-paper"
            >
              Get My Full Valuation <br /> Report for $500
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
