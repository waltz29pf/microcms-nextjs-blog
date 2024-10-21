import Sidebar from "@/components/navigation/Sidebar";
import { ReactNode } from "react";

interface LayoutWithSidebarProps {
  children: ReactNode;
}

const LayoutWithSidebar = ({ children }: LayoutWithSidebarProps) => {
  return (
    <div className="container mx-auto my-10 px-4">
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <main className="w-full md:flex-grow md:max-w-[788px]">{children}</main>
        <aside className="w-full md:w-[300px] lg:shrink-0">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
