import Arrow from "@/components/icons/Arrow";
import Link from "next/link";

const Retry = ({ children, href = "#", className }) => {
  return (
    <div className="flex items-center gap-2">
      <Arrow className="w-[20px] lg:w-[40px] h-[20px] lg:h-[40px] stroke-current text-text-secondary" />
      <Link
        href={href}
        className={`text-text-secondary text-[16px] lg:text-[23px] underline hover:text-text-secondary ${className}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default Retry;
