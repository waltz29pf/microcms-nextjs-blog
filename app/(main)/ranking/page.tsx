import Loading from "@/app/loading";
import LayoutWithSidebar from "@/components/layout/LayoutWithSIdebar";
import { Suspense } from "react";
import Ranking from "./Ranking";

const RankingPage = () => {
  return (
    <LayoutWithSidebar>
      <Suspense fallback={<Loading />}>
        <Ranking />
      </Suspense>
    </LayoutWithSidebar>
  );
};

export default RankingPage;
