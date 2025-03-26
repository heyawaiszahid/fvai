import Image from "next/image";
import Link from "next/link";
import Hamburger from "./icons/Hamburger";

const Header = ({ children }) => {
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

        {index === 1 && children}
      </div>
    </header>
  ));
};

export default Header;
