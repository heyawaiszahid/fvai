import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      {/* Mobile Header */}
      <header className="block lg:hidden">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="inline-block">
              <Image src="/logo.png" width={80} height={24} alt="" />
            </Link>
            <Image src="/icon-menu.svg" width={28} height={28} alt="" />
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block lg:bg-text-primary">
        <div className="container mx-auto px-6 py-7">
          <Link href="/" className="inline-block">
            <Image src="/logo-desktop.png" width={174} height={52} alt="" />
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
