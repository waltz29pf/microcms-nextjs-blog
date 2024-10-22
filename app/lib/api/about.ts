import { microCmsClient } from "@/app/lib/config/microCmsClient";
import { parseContent } from "@/app/lib/utils/blogContentParser";
import { AboutContent } from "@/app/types";

export const fetchAboutInfo = async (): Promise<AboutContent> => {
  try {
    const response = await microCmsClient.getList<AboutContent>({
      endpoint: "about",
      queries: {
        orders: "publishedAt",
        limit: 1,
      },
    });

    if (response.contents.length === 0) {
      throw new Error("About content not found");
    }

    const aboutContent = response.contents[0];
    return {
      ...aboutContent,
      content: parseContent(aboutContent.content),
    };
  } catch (error) {
    console.error("Failed to fetch about info:", error);
    throw new Error(
      "about記事の取得に失敗しました。ネットワーク接続を確認し、後でもう一度お試しください。"
    );
  }
};

export default fetchAboutInfo;
