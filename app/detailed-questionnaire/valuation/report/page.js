import CTA from "@/components/CTA";
import Header from "@/components/Header";
import BarChart from "@/components/icons/BarChart";
import File from "@/components/icons/File";
import Noto from "@/components/icons/Noto";

export default function Report() {
  return (
    <>
      <Header />
      <main className="pt-4 pb-16 lg:pt-8">
        <section className="mb-8 lg:mb-10 text-center">
          <div className="container">
            <div className="mb-6 lg:mb-8 text-[33px] lg:text-[47px] leading-[48px] lg:leading-[64px] font-bold">
              Get Your <span className="text-primary">Expert Reviewed</span> Report <br className="lg:hidden" /> in 48
              hours
            </div>
            <div className="text-text-secondary text-[16px] lg:text-[27px] lg:leading-10">
              Based on your questionnaire responses, we'll create a customized, investor-
              <br className="hidden lg:block" />
              ready report signed off by a Chartered Financial Analyst (CFA)— everything you{" "}
              <br className="hidden lg:block" />
              need to pitch with confidence.
            </div>
          </div>
        </section>
        <section className="mb-8 lg:mb-14 lg:bg-text-primary lg:text-background-paper">
          <div className="container lg:max-w-[1000px] lg:py-8">
            <div className="flex flex-col gap-8 lg:gap-16">
              {[
                {
                  icon: <BarChart className="w-[28px] lg:w-[40px] h-[28px] lg:h-[40px]" />,
                  title: "Details on fundraising transactions ",
                  description: "see which comparable deals informed your pre-money valuation range",
                },
                {
                  icon: <Noto className="w-[28px] lg:w-[40px] h-[28px] lg:h-[40px]" />,
                  title: "Commentary on valuation methodology ",
                  description: "understand exactly how your score was calculated and how the valuation was concluded",
                },
                {
                  icon: <File className="w-[28px] lg:w-[40px] h-[28px] lg:h-[40px]" />,
                  title: "CFA-Signed Report: ",
                  description: "Build credibility with a valuation endorsed by a Chartered Financial Analyst.",
                },
              ].map(({ icon, title, description }, index) => (
                <div key={index} className="flex gap-2 lg:gap-4">
                  <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-primary-12p lg:w-16 lg:h-16 lg:bg-primary-30p">
                    {icon}
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
        <section className="mb-8 text-center">
          <div className="container">
            <div className="lg:mx-auto text-[19px] lg:text-[27px] leading-[32px] lg:leading-[40px] italic lg:mb-14">
              With 100+ valuation reports delivered in the last year, we've <br className="hidden lg:block" />
              helped startups raise millions in funding.
            </div>
          </div>
        </section>
        <section className="text-center">
          <div className="container">
            <CTA href="/detailed-questionnaire/valuation/report/payment">
              Get My Full Valuation <br /> Report for $500
            </CTA>
          </div>
        </section>
      </main>
    </>
  );
}
