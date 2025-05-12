"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Back from "./icons/Back";
import Hamburger from "./icons/Hamburger";
import Home from "./icons/Home";
import Phone from "./icons/Phone";
import X from "./icons/X";

const Header = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc = { mobile: "/fvai.png", desktop: "/fvai-desktop.png" };

  return ["lg:hidden", "hidden lg:block shadow-lg relative z-[1]"].map((cls, index) => (
    <header key={index} className={cls}>
      <div className="container flex items-center justify-between pt-4 pb-4 lg:pt-4 lg:pb-4 relative">
        <Link href="/">
          <Image
            src={index === 0 ? logoSrc.mobile : logoSrc.desktop}
            width={index === 0 ? 86 : 214}
            height={index === 0 ? 21 : 52}
            alt="Logo"
            loading="eager"
          />
        </Link>

        {index === 0 && (
          <>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Hamburger className="w-[28px] h-[28px] fill-current text-text-primary" />
            </button>

            {isMenuOpen && (
              <div
                className="bg-black fixed top-0 left-0 right-0 bottom-0 z-20 opacity-30"
                onClick={() => setIsMenuOpen(false)}
              ></div>
            )}

            {isMenuOpen && (
              <div className="absolute z-30 right-[1.6rem] top-full bg-[#FAFAFA] shadow-lg rounded-[13px] p-4">
                <h5 className="text-[23px] leading-[32px] font-bold mb-4 flex justify-between">
                  <span>Menu</span>
                  <button onClick={() => setIsMenuOpen(false)}>
                    <X className="w-[16px] h-[15px] mt-1" />
                  </button>
                </h5>
                <Link
                  href="https://calendly.com/bilal-noorgat-aip_/zoom-call-60-mins"
                  target="_blank"
                  className="flex mb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-[24px] h-[24px] mr-2" />
                  <div className="flex justify-between flex-1">
                    <span className="text-text-secondary mr-8">Book a Consultation</span>
                    <Back className="w-[18px] h-[18px] fill-current text-text-primary scale-[-1]" />
                  </div>
                </Link>
                <Link href="/initial-questions" className="flex mb-4" onClick={() => setIsMenuOpen(false)}>
                  <span className="w-[24px] h-[24px] mr-2">🚀</span>
                  <div className="flex justify-between flex-1">
                    <span className="text-text-secondary mr-8">Start Valuation</span>
                    <Back className="w-[18px] h-[18px] fill-current text-text-primary scale-[-1]" />
                  </div>
                </Link>
                <Link href="/" className="flex" onClick={() => setIsMenuOpen(false)}>
                  <Home className="w-[24px] h-[24px] mr-2" />
                  <div className="flex justify-between flex-1">
                    <span className="text-text-secondary mr-8">Home Page</span>
                    <Back className="w-[18px] h-[18px] fill-current text-text-primary scale-[-1]" />
                  </div>
                </Link>
              </div>
            )}
          </>
        )}

        {index === 1 && children}
      </div>
    </header>
  ));
};

export default Header;
