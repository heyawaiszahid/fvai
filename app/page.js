import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Aesthetics from "@/components/icons/Aesthetics";
import Aesthetics2 from "@/components/icons/Aesthetics2";
import Aesthetics3 from "@/components/icons/Aesthetics3";
import Arrow from "@/components/icons/Arrow";
import Chat from "@/components/icons/Chat";
import Checkmark from "@/components/icons/Checkmark";
import Clock from "@/components/icons/Clock";
import GoodCircle from "@/components/icons/GoodCircle";
import Graph from "@/components/icons/Graph";
import Key from "@/components/icons/Key";
import Money from "@/components/icons/Money";
import Recycle from "@/components/icons/Recycle";
import Scale from "@/components/icons/Scale";
import Tick from "@/components/icons/Tick";
import Tick2 from "@/components/icons/Tick2";
import Image from "next/image";
import Link from "next/link";

const FEATURES = ["No complex spreadsheets", "Takes under 5 minutes", "AI-powered"];

const LOGOS = [
  { src: "/pitchbook.png", width: 120, height: 19, desktopWidth: 176, desktopHeight: 28 },
  { src: "/cb.png", width: 30, height: 30, desktopWidth: 44, desktopHeight: 44 },
  { src: "/tracxn.png", width: 112, height: 28, desktopWidth: 144, desktopHeight: 36 },
];

const steps = [
  {
    number: 1,
    title: "Start Your Valuation",
    description:
      'Click "Start My Free Valuation" and answer a few quick questions about your startup\'s stage, industry, and region.',
  },
  {
    number: 2,
    title: "Get an Initial Range",
    description:
      "Our AI instantly scans current market data to give you a baseline pre-money valuation range for startups like yours.",
  },
  {
    number: 3,
    title: "Refine with Scorecard",
    description:
      "Complete a brief multiple-choice quiz focusing on the five factors investors care about most: Team, Market, Traction, Product, and Competition.",
  },
  {
    number: 4,
    title: "Instant Calculation",
    description: "Watch your final valuation update in real time—no spreadsheets, no guesswork.",
  },
  {
    number: 5,
    title: "Upgrade (Optional)",
    description:
      "For $500, unlock a comprehensive, data-backed valuation report detailing our methodology, calculations, and the funding transactions we referenced.",
  },
];

const marketData = [
  {
    icon: Graph,
    title: "Market Baseline:",
    description:
      "Our algorithm determines a current market value range by analyzing 50,000+ funding transactions from the past 24 months.",
  },
  {
    icon: Key,
    title: "Five Key Factors:",
    description: "We then evaluate your startup's Team, Market Opportunity, Traction, Product, and Competition.",
  },
  {
    icon: Scale,
    title: "Weighted Scoring:",
    description:
      "Each factor is scored based on your responses to the questionnaire, generating a final pre-money valuation that reflects both qualitative and quantitative data.",
  },
];

const benefits = [
  "Accelerators & VC Funds wanting quick startup valuations.",
  "Early-Stage Founders who need a credible pre-money valuation before pitching investors.",
  "Valuation experts looking to cross-check their DCF analysis.",
];

const FeatureCard = ({ icon: Icon, title, description, bgImage }) => {
  return (
    <div className="bg-background-paper px-10 py-4 rounded-[15px] relative overflow-hidden">
      {bgImage && (
        <div
          className="absolute top-0 right-[-10px] w-[180px] h-[151px] bg-cover opacity-[4%]"
          style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
        ></div>
      )}
      <Icon className="w-12 h-12 mb-8" />
      <h3 className="text-info text-[19px] leading-[32px] font-bold mb-2">{title}</h3>
      <p className="text-[13px] leading-[24px]">{description}</p>
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Header>
        <div className="flex gap-5">
          <Link
            href="/initial-questions"
            className="bg-info text-white font-bold px-3 py-3 rounded-[9px] flex items-center"
          >
            Start Free Valuation
          </Link>
          <Link
            href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins"
            target="_blank"
            className="text-info font-bold px-3 py-3 rounded-[9px] border-[2px] border-info flex items-center"
          >
            Book a Consultation
          </Link>
        </div>
      </Header>
      <main>
        <div className="lg:hidden">
          <div className="container pt-6 pb-12">
            <div className="grid gap-8 mb-8">
              <div className="text-center">
                <h1 className="mb-6 text-[33px] leading-[48px]">
                  Get an{" "}
                  <span className="font-bold text-primary-dark">
                    Instant <br /> Valuation
                  </span>{" "}
                  for Your <br />
                  <span className="leading-[64px]">
                    Startup - For <span className="font-bold text-primary-dark">Free</span>
                  </span>
                </h1>

                <div className="flex justify-center mb-8">
                  <ul className="text-base space-y-2">
                    {FEATURES.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Checkmark className="w-[20px] h-[20px] fill-current text-text-secondary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <CTA href="/initial-questions">Start Free Valuation</CTA>
              </div>

              <div className="flex justify-center">
                <video
                  src="/videos/vsl-mobile.mp4"
                  width={345}
                  height={240}
                  controls
                  playsInline
                  poster="/videos/vsl-mobile-poster.png"
                />
              </div>
            </div>

            <div className="text-center">
              <h2 className="mb-1 text-[16px] font-bold">Data-Backed:</h2>
              <p className="mb-1 text-[16px] text-text-secondary">
                We've screened over 50,000 fundraising transactions completed in 2023 and 2024
              </p>

              <div className="flex items-center justify-center gap-6">
                {LOGOS.map(({ src, width, height }) => (
                  <div key={src} className="relative">
                    <Image src={src} alt="" width={width} height={height} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-text-primary">
            <div className="container pt-8 pb-12">
              <h2 className="text-center text-[27px] leading-[40px] text-background-paper font-bold mb-6">
                How It Works
              </h2>

              <div className="flex flex-col gap-10 mb-12">
                {steps.map((step) => (
                  <div key={step.number}>
                    <div className="mb-4 flex items-center">
                      <span className="bg-[#1a295a] text-background-paper inline-flex w-[34px] h-[34px] justify-center items-center font-bold rounded-[6px] mr-3">
                        {step.number}.
                      </span>
                      <h3 className="text-background-paper font-bold">{step.title}</h3>
                    </div>
                    <p className="text-grey-900">{step.description}</p>
                  </div>
                ))}
              </div>

              <h2 className="text-center text-[27px] leading-[40px] text-background-paper font-bold mb-6">
                Ready to Get Started ?
              </h2>
              <div className="text-center">
                <CTA href="/initial-questions">Start Free Valuation</CTA>
              </div>
            </div>
          </div>

          <div className="container pt-8 pb-12">
            <h2 className="text-center text-[27px] leading-[40px] font-bold mb-6">More About Our Methodology</h2>
            <h3 className="text-[19px] leading-[32px] font-bold mb-2">AI Meets the Scorecard Method</h3>
            <p className="text-text-secondary mb-6">
              We've combined the widely accepted Scorecard approach—commonly used by venture capital firms—with real
              funding data. Here's how it works:
            </p>

            <div className="flex flex-col gap-6">
              {marketData.map(({ icon: Icon, title, description }, index) => (
                <div key={index}>
                  <div className="flex items-center mb-2">
                    <Icon className="w-[34px] h-[34px] mr-2" />
                    <h3 className="font-bold">{title}</h3>
                  </div>
                  <p className="text-text-secondary text-[13px] leading-[24px]">{description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container pb-12 flex justify-center">
            <video
              src="/videos/methodology-mobile.mp4"
              width={345}
              height={240}
              controls
              playsInline
              poster="/videos/methodology-mobile-poster.png"
            />
          </div>

          <div className="bg-text-primary">
            <div className="container pt-8 pb-8">
              <h2 className="text-[19px] leading-[32px] text-[#e2e8fa] font-bold mb-2">Why the Scorecard Method?</h2>
              <p className="text-background-default text-[13px] leading-[24px]">
                Traditional valuation methods, like Discounted Cash Flow or public-market comparisons, rarely fit
                pre-revenue or early-stage startups. The Scorecard Method captures the elements that matter most to
                early-stage investors, ensuring a credible estimate—even if you're not yet profitable.
              </p>
            </div>
          </div>

          <div className="container pt-8 pb-8 bg-[url(/logo-aesthetic.png)] bg-no-repeat bg-right">
            <h2 className="text-center text-[27px] leading-[40px] font-bold mb-6">Who It's For</h2>
            <div className="flex flex-col gap-5 px-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex mb-2">
                  <Tick className="w-8 h-8 mr-2" />
                  <p className="text-text-secondary flex-1">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="container pt-8 pb-4">
            <h2 className="text-center text-[27px] leading-[40px] font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-center text-primary-dark mb-5">
              Level up your fundraising strategy with a defensible valuation.
            </p>
            <div className="text-center">
              <CTA href="/initial-questions">Start Free Valuation</CTA>
            </div>
          </div>

          <div className="container pt-8 pb-10">
            <h2 className="text-center text-[27px] leading-[40px] font-bold mb-6">Need More Tailored Help?</h2>
            <p className="text-center">Looking for more personalized guidance to take your startup further?</p>
            <p className="text-center mb-3">
              <span className="text-primary-dark font-bold">Book a consultation</span> to explore additional services
              with <span className="text-primary-dark font-bold">FVA Advisory,</span> including:
            </p>
            <div className="flex justify-between mb-6">
              <ul className="space-y-2">
                <li className="flex items-center gap-1">
                  <Checkmark className="w-[16px] h-[16px] fill-current text-primary-dark" />
                  <span className="text-text-secondary text-[13px] leading-[24px]">Market Research</span>
                </li>
                <li className="flex items-center gap-1">
                  <Checkmark className="w-[16px] h-[16px] fill-current text-primary-dark" />
                  <span className="text-text-secondary text-[13px] leading-[24px]">Pitch Deck</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-1">
                  <Checkmark className="w-[16px] h-[16px] fill-current text-primary-dark" />
                  <span className="text-text-secondary text-[13px] leading-[24px]">Financial Modeling</span>
                </li>
                <li className="flex items-center gap-1">
                  <Checkmark className="w-[16px] h-[16px] fill-current text-primary-dark" />
                  <span className="text-text-secondary text-[13px] leading-[24px]">DCF Valuation</span>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <CTA
                href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins"
                target="_blank"
                className="text-primary-dark border-primary-dark border-[3px] !py-2 bg-white"
              >
                Book a Consultation
              </CTA>
            </div>
          </div>

          <div className="bg-text-primary">
            <div className="container pt-8 pb-12">
              <h2 className="text-center text-[27px] leading-[40px] text-background-paper font-bold mb-2">
                Get Your Free Valuation in Under 5 Minutes
              </h2>
              <p className="text-center text-background-default mb-4">
                Stop guessing your startup's worth. Arm yourself with credible data for your next investor meeting.
              </p>
              <div className="text-center">
                <CTA href="/initial-questions">Start My Free Valuation</CTA>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="bg-custom-gradient relative">
            <Aesthetics className="absolute left-0 bottom-[20px]" />
            <Aesthetics className="absolute right-0 top-[60px] rotate-180" />
            <div className="container py-20 relative z-10">
              <h2 className="text-[47px] leading-[64px] text-center font-bold mb-6">
                Get an <span className="text-primary-dark">Instant</span>, Data-Backed Valuation <br /> for Your
                Startup—<span className="text-primary-dark">For Free</span>
              </h2>
              <p className="text-[27px] leading-[40px] text-center">
                Walk into investor meetings with <span className="text-primary-dark"></span>confidence - our{" "}
                <span className="text-primary-dark font-bold">AI platform</span> <br /> delivers a{" "}
                <span className="text-primary-dark font-bold">credible</span> pre-money valuation in{" "}
                <span className="text-primary-dark font-bold">under 5 minutes.</span>
              </p>
            </div>
          </div>

          <div className="bg-[#f2f6fd]">
            <div className="container pb-20">
              <h2 className="text-[39px] leading-[56px] font-bold mb-10">Key Benefits</h2>
              <div className="grid grid-cols-2 gap-x-16 gap-y-12 mb-16">
                <FeatureCard
                  icon={Clock}
                  title="Instant Results"
                  description="Answer a few questions and get your preliminary valuation range right away."
                  bgImage="/logo-aesthetic-2.png"
                />
                <FeatureCard
                  icon={Recycle}
                  title="Same Methodology used by VC Funds"
                  description="No spreadsheets or guesswork - we use the Scorecard Method which emphasizes criteria such as Team, Market, Traction, etc."
                />
                <FeatureCard
                  icon={Money}
                  title="100% Free Initial Valuation"
                  description="Receive your customized pre-money valuation at zero cost; upgrade to a detailed valuation report only if you want deeper insights."
                />
                <FeatureCard
                  icon={GoodCircle}
                  title="Credible & Data-Backed"
                  description="Our AI references 50,000+ recent funding transactions to ensure your startup's valuation reflects current market realities."
                  bgImage="/logo-aesthetic-2.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-10">
                <CTA href="/initial-questions" className="!bg-info !rounded-[24px] !py-4">
                  Start Free Valuation
                </CTA>
                <CTA
                  href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins"
                  target="_blank"
                  className="bg-transparent text-info font-bold px-3 !rounded-[24px] border-[4px] border-info !w-[344px] py-3"
                >
                  Book a Consultation
                </CTA>
              </div>
            </div>
          </div>

          <div className="bg-[#dde5f8]">
            <div className="container flex gap-5 justify-center items-center py-4">
              <Checkmark className="w-[28px] h-[28px] fill-current text-success" />
              <p className="text-text-disabled text-[19px] leading-[32px]">
                We've helped startups raise millions in funding. Trusted by VC Funds globally.
              </p>
            </div>
          </div>

          <div className="bg-[#f2f6fd]">
            <div className="container py-24 flex justify-center">
              <video src="/videos/vsl.mp4" width={781} height={415} controls preload="metadata" />
            </div>
          </div>

          <div className="bg-[#f2f6fd]">
            <div className="container pb-24">
              <div className="flex justify-between">
                <div className="shrink-0">
                  <Arrow className="w-[60px] h-[60px] stroke-current text-info rotate-180 stroke-[1.5px]" />
                  <h2 className="text-[39px] leading-[56px] font-bold">How It Works</h2>
                </div>
                <div className="pl-[200px] relative pt-6">
                  <Aesthetics2 className="absolute left-[80px] top-[70px]" />
                  <div className="flex flex-col gap-12 bg-background-paper px-[20px] py-[28px] rounded-[15px] relative z-10">
                    {steps.map((step) => (
                      <div key={step.number} className="flex">
                        <div className="mb-4 flex items-center">
                          <span className="bg-info text-background-paper inline-flex w-[60px] h-[60px] justify-center items-center text-[27px] font-bold rounded-[7px] mr-5">
                            {step.number}.
                          </span>
                        </div>
                        <div>
                          <h3 className="font-bold text-[19px] leading-[32px]">{step.title}</h3>
                          <p className="text[13px] leading-[24px]">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f2f6fd]">
            <div className="container relative pb-16">
              <div className="w-[236px] h-[198px] absolute top-[30px] left-0 ml-[-90px] bg-[url(/logo-aesthetic-2.png)] bg-no-repeat bg-cover opacity-[12%]"></div>
              <div className="flex flex-col items-center bg-text-primary rounded-[25px] py-6 relative z-10">
                <h2 className="text-[39px] leading-[56px] text-white font-bold mb-3">Ready to Get Started ?</h2>
                <CTA href="/initial-questions" className="!bg-info !rounded-[24px] !py-4 mb-4">
                  Start Free Valuation
                </CTA>
              </div>
            </div>
          </div>

          <div className="bg-[#f2f6fd]">
            <div className="container py-10">
              <h2 className="text-[39px] leading-[56px] font-bold mb-8">More About Our Methodology</h2>
              <h3 className="text-primary-dark text-[27px] leading-[40px] font-bold mb-3">
                AI Meets the Scorecard Method
              </h3>
              <p className="text-[23px] leading-[32px] mb-10">
                We've combined the widely accepted{" "}
                <span className="text-text-secondary font-bold">Scorecard approach</span>—commonly used by{" "}
                <span className="text-text-secondary font-bold">venture capital firms</span>—with real funding data.
                Here's how it works:
              </p>
              <div className="grid grid-cols-3 gap-16 mb-16">
                {marketData.map(({ icon: Icon, title, description }, index) => (
                  <div key={index} className="flex flex-col h-full">
                    <div className="bg-[#dde4f8] rounded-tl-[15px] rounded-tr-[15px] px-8 py-4 relative overflow-hidden">
                      <Icon className="w-[48px] h-[48px]" />
                      <div className="w-[80px] h-[67px] absolute top-[0px] right-0 bg-[url(/logo-aesthetic-2.png)] bg-no-repeat bg-cover opacity-[12%]"></div>
                    </div>
                    <div className="bg-background-paper rounded-bl-[15px] rounded-br-[15px] px-8 py-5 flex-grow">
                      <h3 className="font-bold text-primary-dark text-[19px] leading-[32px]">{title}</h3>
                      <p className="text-text-secondary text-[13px] leading-[24px]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#f2f6fd]">
            <div className="container pb-24 flex justify-center">
              <video src="/videos/methodology.mp4" width={781} height={415} controls preload="metadata" />
            </div>
          </div>

          <div className="bg-text-primary">
            <div className="container py-10">
              <h2 className="text-[23px] leading-[32px] text-[#e2e8fa] font-bold mb-2">Why the Scorecard Method?</h2>
              <p className="text-background-default text-[19px] leading-[32px]">
                Traditional valuation methods, like Discounted Cash Flow or public-market comparisons, rarely fit
                pre-revenue or early-stage startups. The Scorecard Method captures the elements that matter most to
                early-stage investors, ensuring a credible estimate—even if you're not yet profitable.
              </p>
            </div>
          </div>

          <div className="bg-[#f2f6fd] relative">
            <Aesthetics3 className="absolute right-0 top-[110px]" />
            <Aesthetics3 className="absolute right-0 bottom-[0] scale-y-[-1]" />
            <div className="container pt-24 pb-16">
              <h2 className="text-[40px] leading-[56px] font-bold mb-12">Who It's For</h2>
              <div className="flex flex-col gap-10 px-5">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex gap-5 items-center">
                    <Tick2 className="w-[60px] h-[60px] ml-[-15px]" />
                    <p className="text-text-secondary text-[27px] leading-[40px] flex-1">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-[#f2f6fd] pt-24">
            <div className="container pb-16">
              <div className="flex flex-col items-center bg-text-primary rounded-[25px] py-8">
                <h2 className="text-[39px] leading-[56px] text-white font-bold mb-2">Ready to Get Started ?</h2>
                <p className="text-background-default text-[27px] leading-[40px] mb-8">
                  Level up your fundraising strategy with a defensible valuation.
                </p>
                <CTA href="/initial-questions" className="!bg-info !rounded-[24px] !py-4 mb-4">
                  Start Free Valuation Now
                </CTA>
              </div>
            </div>
          </div>

          <div className="bg-[#f2f6fd] pt-2">
            <div className="container pb-16">
              <h2 className="text-center text-[39px] leading-[56px] font-bold mb-5">Need More Tailored Help?</h2>
              <p className="text-center text-[27px] leading-[40px]">
                Looking for more <span className="text-info">personalized guidance</span> to take your startup further?
              </p>
              <p className="text-center text-[27px] leading-[40px] mb-8">
                <span className="text-info">Book a consultation</span> to explore additional services with{" "}
                <span className="text-info">FVA Advisory,</span> including:
              </p>
              <div className="flex justify-between mb-10 max-w-[737px] mx-auto">
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <Checkmark className="w-[33px] h-[33px] fill-current text-info" />
                    <span className="text-text-secondary text-[27px] leading-[40px]">Financial Modeling</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Checkmark className="w-[33px] h-[33px] fill-current text-info" />
                    <span className="text-text-secondary text-[27px] leading-[40px]">DCF Valuation</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center gap-4">
                    <Checkmark className="w-[33px] h-[33px] fill-current text-info" />
                    <span className="text-text-secondary text-[27px] leading-[40px]">Market Research</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <Checkmark className="w-[33px] h-[33px] fill-current text-info" />
                    <span className="text-text-secondary text-[27px] leading-[40px]">Pitch Deck</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <CTA
                  href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins"
                  target="_blank"
                  className="text-primary-dark border-primary-dark border-[4px] !rounded-[27px] !py-2 bg-transparent !w-[344px]"
                >
                  Book a Consultation
                </CTA>
              </div>
            </div>
          </div>

          <div className="bg-[#dde5f8] py-16 relative">
            <div className="w-[289px] h-[198px] absolute top-[0px] left-0 bg-[url(/logo-aesthetic-2.png)] bg-no-repeat bg-cover opacity-[8%]"></div>
            <div className="w-[289px] h-[198px] absolute bottom-[0px] right-0 bg-[url(/logo-aesthetic-2.png)] bg-no-repeat bg-cover opacity-[8%]"></div>
            <div className="container">
              <h2 className="text-center text-[39px] leading-[56px] font-bold mb-3">
                Get Your Free Valuation in Under 5 Minutes
              </h2>
              <p className="text-center text-[27px] leading-[40px] text-text-secondary max-w-[681px] mx-auto mb-10">
                Stop guessing your startup's worth. Arm yourself with credible data for your next investor meeting.
              </p>
              <div className="text-center">
                <CTA href="/initial-questions" className="!bg-info !rounded-[24px] !py-4 mb-12">
                  Start Free Valuation
                </CTA>
              </div>
            </div>
          </div>

          <div className="bg-[#c7d4f4]">
            <div className="container relative h-[76px] flex items-center justify-center">
              <p className="text-text-disabled text-[16px] leading-[24px]">
                © 2025 FVA Intelligence. All rights reserved.
              </p>
              <Link href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins" target="_blank">
                <Chat className="w-[60px] h-[60px] absolute right-0 top-[8px]" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
