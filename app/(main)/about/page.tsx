import { microCmsClient } from "@/app/libs/microCmsClient";
import Loading from "@/app/loading";
import { AboutContent } from "@/app/types";
import LayoutWithSidebar from "@/components/layout/LayoutWithSIdebar";
import { Suspense } from "react";
import About from "./About";

export const revalidate = 60;

const AboutPage = async () => {
  let aboutContent = "";
  try {
    const about = await microCmsClient.getList<AboutContent>({
      endpoint: "about",
      queries: {
        orders: "publishedAt",
        limit: 1,
      },
    });
    if (about.contents.length > 0) {
      aboutContent = about.contents[0].content;
    } else {
      console.warn("No about content found");
    }
  } catch {
    console.error("Failed to fetch about page");
  }

  return (
    <LayoutWithSidebar>
      <Suspense fallback={<Loading />}>
        <About content={aboutContent} />
      </Suspense>
    </LayoutWithSidebar>
  );
};

export default AboutPage;
