import Image from "next/image";
import Link from "next/link";
import Hamburger from "./icons/Hamburger";

const Header = () => {
  const logoSrc = { mobile: "/fvai.png", desktop: "/fvai-desktop.png" };

  return ["lg:hidden", "hidden lg:block shadow-lg relative z-[1]"].map((cls, index) => (
    <header key={index} className={cls}>
      <div className="container flex items-center justify-between pt-4 pb-4 lg:pt-4 lg:pb-4">
        <Link href="/">
          <Image
            src={index === 0 ? logoSrc.mobile : logoSrc.desktop}
            width={index === 0 ? 86 : 214}
            height={index === 0 ? 21 : 52}
            alt=""
            loading="eager"
          />
        </Link>
        {index === 0 && <Hamburger className="w-[28px] h-[28px] fill-current text-text-primary" />}

        {index === 1 && (
          <div className="flex gap-5">
            <Link
              href="/initial-questions"
              className="bg-info text-white font-bold px-3 py-3 rounded-[9px] flex items-center"
            >
              Start Free Valuation
            </Link>
            <Link
              href="#"
              className="text-info font-bold px-3 py-3 rounded-[9px] border-[2px] border-info flex items-center"
            >
              Book a Consultation
            </Link>
          </div>
        )}
      </div>
    </header>
  ));
};

export default Header;
