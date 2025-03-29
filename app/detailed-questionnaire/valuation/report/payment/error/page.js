import CTA from "@/components/CTA";
import Header from "@/components/Header";
import ErrorBig from "@/components/icons/ErrorBig";

export default function Error() {
  return (
    <div className="lg:hidden">
      <Header />
      <main className="pt-4 pb-16">
        <section className="mb-8">
          <div className="container flex flex-col items-center py-[20vh]">
            <h2 className="text-[23px] leading-[32px] font-bold text-center mb-4">
              <span className="text-error-dark">An error</span> occurred! <br /> Please try again.
            </h2>
            <ErrorBig className="w-[80px] h-[80px]" />
            <span className="text-[19px] leading-[32px] text-error-dark font-bold uppercase">Error</span>
          </div>
          <div className="text-center">
            <CTA href="/detailed-questionnaire/valuation/report/payment">
              Get My Full Valuation <br /> Report for $500
            </CTA>
          </div>
        </section>
      </main>
    </div>
  );
}
