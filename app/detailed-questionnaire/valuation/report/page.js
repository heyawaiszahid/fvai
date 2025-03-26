import CTA from "@/components/CTA";
import Header from "@/components/Header";
import BarChart from "@/components/icons/BarChart";
import File from "@/components/icons/File";
import Noto from "@/components/icons/Noto";
import Sidebar from "@/components/Sidebar";

export default function Report() {
  return (
    <>
      <div className="lg:hidden">
        <Header />
        <main className="pt-4 pb-16">
          <section className="mb-8 text-center">
            <div className="container">
              <div className="mb-6 text-[33px] leading-[48px] font-bold">
                Get Your <span className="text-primary">Expert Reviewed</span> Report in 48 hours
              </div>
              <div className="text-text-secondary text-[16px]">
                Based on your questionnaire responses, we'll create a customized, investor- ready report signed off by a
                Chartered Financial Analyst (CFA)— everything you need to pitch with confidence.
              </div>
            </div>
          </section>
          <section className="mb-8">
            <div className="container">
              <div className="flex flex-col gap-8">
                {[
                  {
                    icon: <BarChart className="w-[28px] h-[28px]" />,
                    title: "Details on fundraising transactions ",
                    description: "see which comparable deals informed your pre-money valuation range",
                  },
                  {
                    icon: <Noto className="w-[28px] h-[28px]" />,
                    title: "Commentary on valuation methodology ",
                    description: "understand exactly how your score was calculated and how the valuation was concluded",
                  },
                  {
                    icon: <File className="w-[28px] h-[28px]" />,
                    title: "CFA-Signed Report: ",
                    description: "Build credibility with a valuation endorsed by a Chartered Financial Analyst.",
                  },
                ].map(({ icon, title, description }, index) => (
                  <div key={index} className="flex gap-2">
                    <div className="flex items-center justify-center shrink-0 w-12 h-12 rounded-full bg-primary-12p">
                      {icon}
                    </div>
                    <div className="text-[15px]">
                      <span className="font-bold">{title}</span>
                      {title === "CFA-Signed Report: " && <br className="hidden" />}
                      <span className="text-text-secondary">{description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="mb-8 text-center">
            <div className="container">
              <div className="text-[19px] leading-[32px] italic">
                With 100+ valuation reports delivered in the last year, we've helped startups raise millions in funding.
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
      </div>

      <div className="hidden lg:block">
        <div className="flex">
          <Sidebar></Sidebar>

          <main className="pt-12 bg-custom-gradient-2">
            <div className="relative z-10">
              <section className="mb-14 text-center max-w-[1160px] mx-auto">
                <div className="container">
                  <div className="mb-6 text-[47px] leading-[64px] font-bold">
                    Get Your <span className="text-primary">Expert Reviewed</span> <br /> Report in 48 hours
                  </div>
                  <div className="text-text-secondary text-[27px] leading-[40px]">
                    Based on your questionnaire responses, we'll create a customized, investor- ready report signed off
                    by a Chartered Financial Analyst (CFA)— everything you need to pitch with confidence.
                  </div>
                </div>
              </section>
              <section className="mb-14 bg-[#dce2f8]">
                <div className="container max-w-[1200px] mx-auto py-8">
                  <div className="flex flex-col gap-16">
                    {[
                      {
                        icon: <BarChart className="w-[28px] h-[28px]" />,
                        title: "Details on fundraising transactions ",
                        description: "see which comparable deals informed your pre-money valuation range",
                      },
                      {
                        icon: <Noto className="w-[28px] h-[28px]" />,
                        title: "Commentary on valuation methodology ",
                        description:
                          "understand exactly how your score was calculated and how the valuation was concluded",
                      },
                      {
                        icon: <File className="w-[28px] h-[28px]" />,
                        title: "CFA-Signed Report: ",
                        description: "Build credibility with a valuation endorsed by a Chartered Financial Analyst.",
                      },
                    ].map(({ icon, title, description }, index) => (
                      <div key={index} className="flex gap-6">
                        <div className="flex items-center justify-center shrink-0 w-[60px] h-[60px] rounded-[8px] bg-text-secondary">
                          {icon}
                        </div>
                        <div className="text-[23px] leading-[32px]">
                          <span className="font-bold block">{title}</span>
                          <span className="text-text-secondary">{description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="mb-12 text-center max-w-[940px] mx-auto">
                <div className="container">
                  <div className="text-[27px] leading-[40px] italic">
                    With 100+ valuation reports delivered in the last year, we've helped startups raise millions in
                    funding.
                  </div>
                </div>
              </section>
              <section className="text-center mb-20">
                <div className="container">
                  <CTA href="/detailed-questionnaire/valuation/report/payment">
                    Get My Full Valuation <br /> Report for $500
                  </CTA>
                </div>
              </section>
              <section className="text-center bg-[#dee4f9] py-8">
                <p className="text-text-disabled text-[16px] leading-[24px]">
                  © 2025 FVA Intelligence. All rights reserved.
                </p>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
