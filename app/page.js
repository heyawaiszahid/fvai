import BaseLayout from "@/layouts/BaseLayout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <BaseLayout>
      <div className="container mx-auto px-6 py-6">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="lg:py-14">
            <h1 className="text-center text-3xl leading-normal mb-8 lg:text-left lg:text-5xl lg:leading-snug">
              Get an{" "}
              <span className="text-primary-dark font-bold">
                Instant <br /> Valuation
              </span>{" "}
              for Your <br /> Startup{" "}
              <Image src="/icon-rocket.png" width={64} height={64} alt="icon-rocket" className="inline" /> for{" "}
              <span className="text-primary-dark font-bold">Free</span>
            </h1>

            <div className="flex justify-center mb-8 lg:justify-start lg:mb-14">
              <ul className="flex flex-col gap-2 mb-8 lg:text-2xl lg:gap-6 lg:mb-14">
                <li className="flex gap-2 lg:gap-3">
                  <Image
                    src="/icon-checkmark.svg"
                    width={32}
                    height={32}
                    alt="checkmark icon"
                    className="w-[16px] lg:w-[32px]"
                  />
                  No complex spreadsheets
                </li>
                <li className="flex gap-2 lg:gap-3">
                  <Image
                    src="/icon-checkmark.svg"
                    width={32}
                    height={32}
                    alt="checkmark icon"
                    className="w-[16px] lg:w-[32px]"
                  />
                  Takes under 5 minutes
                </li>
                <li className="flex gap-2 lg:gap-3">
                  <Image
                    src="/icon-checkmark.svg"
                    width={32}
                    height={32}
                    alt="checkmark icon"
                    className="w-[16px] lg:w-[32px]"
                  />
                  AI-powered
                </li>
              </ul>
            </div>

            <Link
              href="/initial-questions"
              className="bg-primary block text-xl text-background-paper text-center font-bold rounded-full p-4 max-w-md mx-auto lg:mx-0 lg:text-2xl"
            >
              Start Free Valuation
            </Link>
          </div>

          <div>
            <Image
              src="/video-placeholder.png"
              width={345}
              height={240}
              alt="Video placeholder for mobile"
              className="mx-auto block lg:hidden"
            />
            <Image
              src="/video-placeholder-desktop.png"
              width={709}
              height={664}
              alt="Video placeholder for desktop"
              className="hidden lg:block"
            />
          </div>
        </section>

        <section className="mb-8">
          <div className="text-center mb-2 lg:text-2xl lg:leading-snug lg:mb-4">
            <p className="font-bold">Data-Backed:</p>
            <p className="text-text-secondary">
              We've screened over 50,000 fundraising transactions completed in 2023 and 2024
            </p>
          </div>

          <div className="flex justify-center gap-7 lg:gap-10">
            <Image
              src="/logo-pitchbook.png"
              alt="pitchbook logo"
              width={176}
              height={28}
              className="w-[120px] lg:w-[176px]"
            />

            <Image src="/logo-cb.png" alt="cb logo" width={44} height={44} className="w-[30px] lg:w-[44px]" />

            <Image
              src="/logo-tracxn.png"
              alt="tracxn logo"
              width={144}
              height={28}
              className="w-[112px] lg:w-[144px]"
            />
          </div>
        </section>
      </div>
    </BaseLayout>
  );
}
