import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Report() {
  return (
    <>
      <Header />
      <main className="py-4 lg:py-8">
        <section className="text-center mb-8 lg:mb-10">
          <div className="container mx-auto px-6">
            <div className="text-[33px] lg:text-5xl leading-[48px] font-bold mb-6 lg:mb-8">
              Get Your <span className="text-primary">Expert Reviewed</span> Report <br className="lg:hidden" /> in 48 hours
            </div>
            <div className="text-base lg:text-[27px] lg:leading-10 text-text-secondary">
              Based on your questionnaire responses, we'll create a customized, investor-
              <br className="hidden lg:block" />
              ready report signed off by a Chartered Financial Analyst (CFA) everything you <br className="hidden lg:block" />
              need to pitch with confidence
            </div>
          </div>
        </section>

        <section className="mb-8 lg:mb-10 lg:bg-text-primary lg:text-background-paper">
          <div className="container mx-auto px-6 lg:py-8 lg:max-w-5xl">
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
                  <div className="bg-primary-12p lg:bg-primary-30p rounded-full w-12 h-12 lg:w-16 lg:h-16 flex justify-center items-center shrink-0">
                    <Image src={`/icon-${icon}.svg`} width={28} height={28} alt="" className="lg:w-10 lg:h-10" />
                  </div>
                  <div className="text-[15px] lg:text-[23px] lg:leading-snug">
                    <span className="font-bold lg:block">{title}</span> {title === "CFA-Signed Report: " && <br className="lg:hidden" />}
                    <span className="text-text-secondary lg:text-background-paper">{description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="text-center mb-12">
          <div className="container mx-auto px-6">
            <div className="text-[19px] lg:text-[27px] italic mb-8 lg:mb-14 leading-8 lg:mx-auto">
              With 100+ valuation reports delivered in the last year, we've <br className="hidden lg:block" />
              helped startups raise millions in funding
            </div>
            <Link
              href="/detailed-questionnaire/valuation/report/payment"
              className="bg-primary block text-2xl text-background-paper text-center font-bold rounded-full p-4 max-w-md mx-auto mb-6"
            >
              Get My Full Valuation <br /> Report for $500
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
