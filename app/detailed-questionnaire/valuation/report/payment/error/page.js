import CTA from "@/components/CTA";
import Header from "@/components/Header";
import ErrorBig from "@/components/icons/ErrorBig";
import Sidebar from "@/components/Sidebar";

export default function Error() {
  return (
    <div className="block lg:flex">
      <div className="lg:hidden">
        <Header />
      </div>

      <Sidebar className="hidden lg:block"></Sidebar>
      <main className="w-full pt-4 pb-16 lg:pt-12 lg:pb-0 lg:bg-custom-gradient-2 lg:relative">
        <div className="hidden lg:block w-[236px] h-[198px] absolute top-[0px] right-0 bg-[url(/logo-aesthetic-2.png)] bg-no-repeat bg-cover opacity-[23%]"></div>
        <div className="relative z-10 h-full">
          <section className="mb-8 lg:mb-[100px]">
            <div className="container flex flex-col items-center py-[20vh] lg:py-[14vh]">
              <h2 className="text-[23px] leading-[32px] lg:text-[47px] lg:leading-[64px] font-bold text-center mb-4 lg:mb-6">
                <span className="text-error-dark">An error</span> occurred! <br /> Please try again.
              </h2>
              <ErrorBig className="w-[80px] h-[80px] lg:w-[131px] lg:h-[123px]" />
              <span className="text-[19px] leading-[32px] lg:text-[27px] lg:leading-[40px] text-error-dark font-bold uppercase">
                Error
              </span>
            </div>
            <div className="text-center">
              <CTA href="/detailed-questionnaire/valuation/report/payment">
                Get My Full Valuation <br /> Report for $500
              </CTA>
            </div>
          </section>
          <section className="hidden lg:block text-center bg-[#dee4f9] py-8 absolute bottom-0 left-0 right-0">
            <p className="text-text-disabled text-[16px] leading-[24px]">
              © 2025 FVA Intelligence. All rights reserved.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
