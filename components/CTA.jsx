import Link from "next/link";

const CTA = ({ children, href = "#", target, className }) => {
  return (
    <Link
      href={href}
      {...(target ? { target } : {})}
      className={`inline-block w-full max-w-[345px] lg:max-w-[451px] text-center font-bold text-[23px] lg:text-[27px] text-background-paper bg-primary rounded-full py-4 lg:py-3 ${className}`}
    >
      {children}
    </Link>
  );
};

export default CTA;
