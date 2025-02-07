import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Checkmark from "@/components/icons/Checkmark";
import Image from "next/image";

const FEATURES = ["No complex spreadsheets", "Takes under 5 minutes", "AI-powered"];

const LOGOS = [
  { src: "/pitchbook.png", width: 120, height: 19, desktopWidth: 176, desktopHeight: 28 },
  { src: "/cb.png", width: 30, height: 30, desktopWidth: 44, desktopHeight: 44 },
  { src: "/tracxn.png", width: 112, height: 28, desktopWidth: 144, desktopHeight: 36 },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="container pt-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-2 mb-8 lg:mb-14">
          <div className="text-center lg:text-left lg:pt-14 lg:pb-32">
            <h1 className="mb-8 text-[33px] leading-[48px] lg:mb-6 lg:text-[47px] lg:leading-[64px]">
              Get an{" "}
              <span className="font-bold text-primary-dark">
                Instant <br /> Valuation
              </span>{" "}
              for Your <br />
              <span className="leading-[64px]">
                Startup <span className="text-[64px] align-middle">🚀</span> for{" "}
                <span className="font-bold text-primary-dark">Free</span>
              </span>
            </h1>

            <div className="flex justify-center lg:justify-start mb-8 lg:mb-14">
              <ul className="text-base lg:text-[23px] space-y-2 lg:space-y-6">
                {FEATURES.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Checkmark className="w-[20px] h-[20px] lg:w-[26px] lg:h-[26px] fill-current text-text-secondary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <CTA href="/initial-questions">Start Free Valuation</CTA>
          </div>
          <Image
            src="/video-placeholder.png"
            width={345}
            height={240}
            alt=""
            layout="responsive"
            loading="eager"
            className="lg:hidden"
          />
          <Image
            src="/video-placeholder-desktop.png"
            width={709}
            height={664}
            alt=""
            layout="responsive"
            loading="eager"
            className="hidden lg:block"
          />
        </div>

        <div className="text-center">
          <h2 className="mb-1 text-[16px] lg:text-[23px] font-bold lg:mb-0">Data-Backed:</h2>
          <p className="mb-1 text-[16px] lg:text-[23px] text-text-secondary lg:mb-4">
            We've screened over 50,000 fundraising transactions completed in 2023 and 2024
          </p>

          <div className="flex items-center justify-center gap-6 lg:gap-10">
            {LOGOS.map(({ src, width, height, desktopWidth, desktopHeight }) => (
              <div key={src} className="relative">
                <div className="lg:hidden">
                  <Image src={src} alt="" width={width} height={height} />
                </div>
                <div className="hidden lg:block">
                  <Image src={src} alt="" width={desktopWidth} height={desktopHeight} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
