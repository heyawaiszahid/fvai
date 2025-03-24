import Chat from "./icons/Chat";

const Sidebar = ({ children }) => {
  return (
    <aside className="hidden lg:flex w-1/3 min-h-screen bg-text-primary text-background-paper px-[60px] py-14">
      <div className="flex flex-col justify-between h-full">
        {children}
        <Chat className="w-[60px] h-[60px]" />
      </div>
    </aside>
  );
};

export default Sidebar;
