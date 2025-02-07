import Progress from "@/components/Progress";
import Link from "next/link";

const Result = ({ score }) => {
  const results = [
    {
      min: 80,
      feedback: (
        <>
          Your result is <span className="text-text-primary font-bold">excellent.</span>
        </>
      ),
      details: (
        <>
          Your result falls into the <span className="font-bold">"excellent"</span>, indicating strong performance
          across critical areas such as leadership, market opportunity, traction, product, and competitiveness. Keep
          building on these strengths to maintain momentum.
        </>
      ),
      emoji: "🚀",
    },
    {
      min: 60,
      feedback: (
        <>
          Your result is <span className="text-text-primary font-bold">good.</span>
        </>
      ),
      details: (
        <>
          Your result falls into the <span className="font-bold">"good"</span>, reflecting solid progress in several key
          areas like leadership, market potential, traction, product development, and competitiveness. With targeted
          improvements, you can increase your business value and drive further growth.
        </>
      ),
      emoji: "🙂",
    },
    {
      min: 0,
      feedback: (
        <>
          Your result <span className="text-text-primary font-bold">needs improvements.</span>
        </>
      ),
      details: (
        <>
          Your startup currently <span className="font-bold">"needs improvement"</span>, suggesting certain gaps in
          leadership, market opportunity, traction, or product readiness. By focusing on these areas and refining your
          strategy, you can move toward stronger results and a higher business valuation.
        </>
      ),
      emoji: "🤔",
    },
  ];

  const result = results.find(({ min }) => score >= min);

  const { feedback, details, emoji } = result;

  return (
    <div className="flex">
      <div className="mx-auto flex flex-col items-center lg:w-1/2 lg:items-start lg:pt-16 gap-8 lg:gap-6">
        <div className="text-text-secondary text-[33px] text-center lg:text-[47px] lg:text-left leading-10">
          {feedback}
        </div>
        <div className="text-primary-dark text-[19px] hidden lg:block lg:mb-16">{details}</div>
        <div className="relative lg:hidden">
          <Progress size={340} thickness={36} score={score} />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-2">
            <span className="text-[64px]">{emoji}</span>
            <span className="text-text-secondary text-[47px]">{score}%</span>
          </div>
        </div>
        <Link
          href="/detailed-questionnaire/valuation"
          className="w-full max-w-md bg-secondary-light text-background-paper text-center text-base lg:text-[28px] font-semibold py-2 lg:py-5 rounded-[44px] lg:rounded-full"
        >
          View Your Valuation
        </Link>
      </div>
      <div className="hidden lg:flex lg:w-1/2 lg:justify-end">
        <div className="relative flex justify-center">
          <Progress size={440} thickness={44} score={score} />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className="text-[116px]">{emoji}</span>
            <span className="text-text-secondary text-[47px] -mt-3">{score}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
