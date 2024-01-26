import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <main className="flex justify-between gap-8 bg-white">
      <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="min-h-screen pl-8 lg:p-0 w-custom-full">
        <Header setOpenSidebar={setOpenSidebar} />
        <div className="w-full pl-1 pr-8 xl:px-2 h-full xl:w-[75%] xl:mx-auto overflow-hidden">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
