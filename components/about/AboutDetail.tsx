import { PROFILE } from "@/app/constants/profileInfo";
import { AboutContent } from "@/app/types";
import { format } from "date-fns";
import Image from "next/image";
import { Separator } from "../ui/separator";

interface AboutDetailProps {
  aboutInfo: AboutContent;
}

const AboutDetail = ({ aboutInfo }: AboutDetailProps) => {
  const formattedDate = format(new Date(aboutInfo.createdAt), "yyyy/MM/dd");
  return (
    <article className="px-10 pb-8 rounded-md dark:bg-gray-800 text-gray-800 dark:text-gray-100">
      <div className="space-y-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-bold text-3xl">About Me</h2>
            <div className="flex items-center gap-2">
              <Image
                src={PROFILE.IMAGE_PATH}
                width={32}
                height={32}
                alt="profile"
                className="rounded-full"
                priority={false}
              />
              <div className="flex flex-col text-xs text-gray-500">
                <span>{PROFILE.NAME}</span>
                <time dateTime={aboutInfo.createdAt}>{formattedDate}</time>
              </div>
            </div>
          </div>
        </div>
        <Separator />
        <div dangerouslySetInnerHTML={{ __html: aboutInfo.content }} />
      </div>
    </article>
  );
};

export default AboutDetail;
