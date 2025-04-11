import Arrow from "@/components/icons/Arrow";
import Link from "next/link";

const Retry2 = ({ children, href = "#", className }) => {
  return (
    <Link
      href={href}
      className={`text-white text-[23px] inline-flex items-center justify-center gap-2 bg-background-default py-[8px] w-[285px] rounded-[6px] ${className}`}
    >
      <Arrow className="w-[40px] h-[40px] stroke-current text-white" />
      <span>{children}</span>
    </Link>
  );
};

export default Retry2;
