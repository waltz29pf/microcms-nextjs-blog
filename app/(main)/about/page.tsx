import AboutDetail from "@/app/components/features/about/AboutDetail";
import fetchAboutInfo from "@/app/lib/api/about";
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
