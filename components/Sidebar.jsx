import Link from "next/link";
import Chat2 from "./icons/Chat2";

const Sidebar = ({ children, className }) => {
  return (
    <aside
      className={`hidden lg:flex w-1/3 min-h-screen flex-col bg-text-primary text-background-paper px-[60px] py-14 ${className}`}
    >
      {children}
      <Link href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins" target="_blank">
        <Chat2 className="w-[60px] h-[60px] fixed bottom-[50px]" />
      </Link>
    </aside>
  );
};

export default Sidebar;
