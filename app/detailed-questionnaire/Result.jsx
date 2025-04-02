import Progress from "@/components/Progress";
import Link from "next/link";

const Result = ({ score }) => {
  const results = [
    {
      min: 80,
      type: "Excellent",
      feedback: (
        <>
          Your result is <span className="text-text-primary lg:text-text-secondary font-bold">excellent.</span>
        </>
      ),
      details: (
        <>
          Your result falls into the <span className="font-bold">"excellent"</span> category, indicating strong
          performance across critical areas such as leadership, market opportunity, traction, product, and
          competitiveness. Keep building on these strengths to maintain momentum.
        </>
      ),
      emoji: "🚀",
    },
    {
      min: 60,
      type: "Good",
      feedback: (
        <>
          Your result is <span className="text-text-primary lg:text-text-secondary font-bold">good.</span>
        </>
      ),
      details: (
        <>
          Your result falls into the <span className="font-bold">"good"</span> category, reflecting solid progress in
          several key areas like leadership, market potential, traction, product development, and competitiveness. With
          targeted improvements, you can increase your business value and drive further growth.
        </>
      ),
      emoji: "🙂",
    },
    {
      min: 50,
      type: "Needs Improvement",
      feedback: (
        <>
          Your result <span className="text-text-primary lg:text-text-secondary font-bold">needs improvement.</span>
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
    {
      min: 0,
      type: "Needs Improvement",
      feedback: (
        <>
          Your result <span className="text-text-primary lg:text-text-secondary font-bold">needs improvement.</span>
        </>
      ),
      details: (
        <>
          A score below 50% indicates that your startup would face significant challenges attracting venture capital
          investment. At this stage, we are unable to provide a meaningful valuation for your startup. We recommend
          improving highlighted areas before approaching investors. With targeted improvements, you can strengthen your
          pitch and increase your chances of successful fundraising in the future.
        </>
      ),
      emoji: "🤔",
    },
  ];

  const result = results.find(({ min }) => score >= min);

  const { type, feedback, details, emoji } = result;

  return (
    <>
      <div className="flex lg:hidden">
        <div className="mx-auto flex flex-col items-center">
          <div className="text-text-secondary text-[23px] leading-[32px] text-center gap-2 mb-6 flex flex-wrap justify-center">
            {feedback} <span className="text-[40px]">{emoji}</span>
          </div>
          <div className="text-primary-dark text-[13px] leading-[24px] px-5 text-center mb-3">{details}</div>
          <div className="relative mb-8">
            <Progress size={300} thickness={40} score={score} />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center gap-2">
              <span className="text-text-secondary text-[47px]">{score}%</span>
            </div>
          </div>
          {score >= 50 ? (
            <Link
              href="/detailed-questionnaire/valuation"
              className="w-full max-w-md bg-text-primary text-background-paper text-center text-base font-semibold py-2 rounded-[44px]"
            >
              View Your Valuation
            </Link>
          ) : (
            <Link
              href="/initial-questions"
              className="w-full max-w-md bg-text-primary text-background-paper text-center text-base font-semibold py-2 rounded-[44px]"
            >
              Start Over
            </Link>
          )}
        </div>
      </div>

      <div className="hidden lg:flex lg:flex-col">
        <div className="w-[236px] h-[198px] absolute top-[0px] right-0 bg-[url(/logo-aesthetic-2.png)] bg-no-repeat bg-cover opacity-[23%]"></div>
        <div className="mx-auto flex flex-col items-center pt-24">
          <div className="text-text-secondary text-[47px] leading-[54px] flex items-center gap-2 mb-8">{feedback}</div>
          <div className="text-primary-dark text-[23px] leading-[32px] px-5 text-center mb-16 max-w-[940px]">
            {details}
          </div>
          {score >= 50 ? (
            <Link
              href="/detailed-questionnaire/valuation"
              className="w-full max-w-[555px] bg-text-primary text-background-paper text-center text-[27px] leading-[40px] font-bold py-4 rounded-[44px] mb-24"
            >
              View Your Valuation
            </Link>
          ) : (
            <Link
              href="/initial-questions"
              className="w-full max-w-[555px] bg-text-primary text-background-paper text-center text-[27px] leading-[40px] font-bold py-4 rounded-[44px] mb-24"
            >
              Start Over
            </Link>
          )}
        </div>
        <div className="flex items-end justify-between w-full px-10 cursor-default mb-2">
          <span className="text-[137px] leading-none text-[#4169E11F] font-bold">{type}</span>
          <span className="text-[116px] leading-none mr-6">{emoji}</span>
        </div>

        <div className="px-10 flex">
          <div className="relative flex-1">
            <div className="w-full h-[43px] bg-[#E4E4E4] border-[#aab6dc] border-2 rounded-[18px] shadow-lg"></div>
            <div className="h-[43px] bg-info rounded-[18px] absolute top-0 left-0" style={{ width: `${score}%` }}></div>
          </div>
          <div className="text-[33px] leading-[40px] text-text-secondary px-6">{score}%</div>
        </div>
      </div>
    </>
  );
};

export default Result;
