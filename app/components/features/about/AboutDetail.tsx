import { AboutContent } from "@/app/types";
interface AboutDetailProps {
  aboutInfo: AboutContent;
}

const AboutDetail = ({ aboutInfo }: AboutDetailProps) => {
  return (
    <article>
      <h2 className="font-bold text-3xl">About Me</h2>
      <div dangerouslySetInnerHTML={{ __html: aboutInfo.content }} />
    </article>
  );
};

export default AboutDetail;
