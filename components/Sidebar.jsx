import Chat from "./icons/Chat";

const Sidebar = () => {
  return (
    <aside className="hidden lg:flex w-1/3 min-h-[calc(100vh-112px)] bg-text-primary text-background-paper px-[1.3rem] py-14">
      <div className="flex flex-col justify-between h-full max-w-[237px] ml-auto">
        <blockquote className="text-[16px] mb-6">
          <span className="block mb-2">"Don't be afraid to give up the good to go for the great."</span>
          <cite className="text-[13px] not-italic">John D. Rockefeller</cite>
        </blockquote>

        <Chat />
      </div>
    </aside>
  );
};

export default Sidebar;
