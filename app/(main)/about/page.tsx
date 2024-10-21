import fetchAboutInfo from "@/app/api/aboutApi";
import AboutDetail from "@/components/about/AboutDetail";
import LayoutWithSidebar from "@/components/layout/LayoutWithSIdebar";

export const revalidate = 60;

const AboutPage = async () => {
  const aboutInfo = await fetchAboutInfo();

  return (
    <LayoutWithSidebar>
      <AboutDetail aboutInfo={aboutInfo} />
    </LayoutWithSidebar>
  );
};

export default AboutPage;
