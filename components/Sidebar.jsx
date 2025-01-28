import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="hidden lg:block lg:bg-text-primary lg:w-1/3 lg:min-h-[calc(100vh-108px)] lg:px-5 lg:py-14 lg:text-white">
      <div className="flex justify-end h-full">
        <div className="max-w-64 relative">
          <div className="w-full">
            <p className="mb-3">"Don't be afraid to give up the good to go for the great."</p>
            <p className="text-sm">John D. Rockefeller</p>
          </div>
          <div className="w-full absolute bottom-0">
            <Image src="/icon-chat.svg" width={55} height={55} alt="" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
