import Sidebar from "@/components/navigation/Sidebar";
import { ReactNode } from "react";

interface LayoutWithSidebarProps {
  children: ReactNode;
}

const LayoutWithSidebar = ({ children }: LayoutWithSidebarProps) => {
  return (
    <div className="container mx-auto px-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <main className="col-span-1 md:col-span-2">{children}</main>
        <div className="col-span-1">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
