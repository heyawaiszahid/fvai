import Image from "next/image";
import Link from "next/link";
import Hamburger from "./icons/Hamburger";

const Header = () => {
  const logoSrc = { mobile: "/fvai.png", desktop: "/fvai-desktop.png" };

  return ["lg:hidden", "hidden lg:block lg:bg-text-primary"].map((cls, index) => (
    <header key={index} className={cls}>
      <div className="container flex items-center justify-between pt-4 pb-4 lg:pt-7 lg:pb-8">
        <Link href="/">
          <Image
            src={index === 0 ? logoSrc.mobile : logoSrc.desktop}
            width={index === 0 ? 80 : 174}
            height={index === 0 ? 24 : 52}
            alt=""
            loading="eager"
          />
        </Link>
        {index === 0 && <Hamburger className="w-[28px] h-[28px] fill-current text-text-primary" />}
      </div>
    </header>
  ));
};

export default Header;
