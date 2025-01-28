import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="block lg:hidden">
        <header>
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="inline-block">
                <Image src="/logo.png" width={80} height={24} alt="fvai logo" />
              </Link>
              <Image src="/icon-menu.svg" width={28} height={28} alt="menu icon" />
            </div>
          </div>
        </header>
      </div>

      <div className="hidden lg:block">
        <header className="lg:bg-text-primary">
          <div className="container mx-auto px-6 py-7">
            <Link href="/" className="inline-block">
              <Image src="/logo-desktop.png" width={174} height={52} alt="favi logo" />
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
