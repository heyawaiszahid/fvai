import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto px-6 py-6">
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 lg:mb-10">
            <div className="lg:py-14">
              <h1 className="text-center lg:text-left text-3xl lg:text-5xl leading-normal lg:leading-snug mb-8">
                Get an{" "}
                <span className="text-primary-dark font-bold">
                  Instant <br /> Valuation
                </span>{" "}
                for Your <br /> Startup <Image src="/icon-rocket.png" width={64} height={64} alt="" className="inline w-[64px] h-[64px]" />{" "}
                for <span className="text-primary-dark font-bold">Free</span>
              </h1>
              <div className="flex justify-center lg:justify-start mb-8 lg:mb-6">
                <ul className="flex flex-col gap-2 lg:gap-6 lg:mb-14 lg:text-2xl">
                  {["No complex spreadsheets", "Takes under 5 minutes", "AI-powered"].map((item) => (
                    <li key={item} className="flex gap-2 lg:gap-3">
                      <Image src="/icon-checkmark.svg" width={32} height={32} alt="" className="w-[16px] lg:w-[32px]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/initial-questions"
                className="bg-primary block text-xl lg:text-2xl text-background-paper text-center font-bold rounded-full p-4 max-w-md mx-auto lg:mx-0"
              >
                Start Free Valuation
              </Link>
            </div>
            <div>
              <Image src="/video-placeholder.png" width={345} height={240} alt="" className="mx-auto block lg:hidden" />
              <Image src="/video-placeholder-desktop.png" width={709} height={664} alt="" className="hidden lg:block" />
            </div>
          </section>
          <section className="mb-8">
            <div className="text-center mb-2 lg:mb-4 lg:text-2xl lg:leading-snug">
              <p className="font-bold">Data-Backed:</p>
              <p className="text-text-secondary">We've screened over 50,000 fundraising transactions completed in 2023 and 2024</p>
            </div>
            <div className="flex justify-center gap-7 lg:gap-10">
              <Image src="/logo-pitchbook.png" width={176} height={28} alt="" className="w-[120px] lg:w-[176px]" />
              <Image src="/logo-cb.png" width={44} height={44} alt="" className="w-[30px] lg:w-[44px]" />
              <Image src="/logo-tracxn.png" width={144} height={28} alt="" className="w-[112px] lg:w-[144px]" />
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
