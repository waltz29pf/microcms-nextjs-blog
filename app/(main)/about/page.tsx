import fetchAboutInfo from "@/app/api/aboutApi";
import AboutDetail from "@/components/about/AboutDetail";
export const revalidate = 60;

const AboutPage = async () => {
  const aboutInfo = await fetchAboutInfo();

  return (
    <div className="container mx-auto max-w-[690px] py-12 px-4 ">
      <AboutDetail aboutInfo={aboutInfo} />
    </div>
  );
};

export default AboutPage;
