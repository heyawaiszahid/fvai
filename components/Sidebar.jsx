import Image from "next/image";

const Sidebar = () => {
  return (
    <aside className="bg-text-primary w-1/3 min-h-[calc(100vh-108px)] px-5 py-14 text-white hidden lg:block">
      <div className="flex justify-end h-full">
        <div className="max-w-64 relative">
          <div className="w-full">
            <p className="mb-3">"Don't be afraid to give up the good to go for the great."</p>
            <p className="text-sm">John D. Rockefeller</p>
          </div>
          <div className="w-full absolute bottom-0">
            <Image src="/icon-chat.svg" width={55} height={55} alt="chat icon" />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
