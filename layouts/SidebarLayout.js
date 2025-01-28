import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

export default function SidebarLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </>
  );
}
