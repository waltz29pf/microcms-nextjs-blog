import Sidebar from "@/app/components/layout/navigation/Sidebar";
import { useSidebarData } from "@/app/hooks/useSidebarData";

import { ReactNode } from "react";
interface LayoutWithSidebarProps {
  children: ReactNode;
}

const LayoutWithSidebar = ({ children }: LayoutWithSidebarProps) => {
  const { data: sidebarData, isLoading } = useSidebarData();
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!sidebarData) {
    return <div>No data available</div>;
  }

  return (
    <div className="container mx-auto my-10 px-4">
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <main className="w-full md:flex-grow md:max-w-[788px]">{children}</main>
        <aside className="w-full md:w-[300px] lg:shrink-0">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <Sidebar
              categoryCounts={sidebarData.categoryCounts}
              archiveMonths={sidebarData.archiveMonths}
            />
          )}
        </aside>
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
