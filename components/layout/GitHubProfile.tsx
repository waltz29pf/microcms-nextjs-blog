import { githubName, githubUrl } from "@/app/constants/githubInfo";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const GitHubProfile = () => {
  return (
    <div className="w-full min-h-screen bg-background dark:bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-center md:text-left">
            はじめまして！
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 dark:text-gray-400 leading-relaxed text-center md:text-left">
            Web系エンジニアです。このサイトでは今まで作った作品とブログ記事を投稿しています。好きな言語はTypeScriptです！
          </p>
          <div className="flex justify-center md:justify-start">
            <Button
              asChild
              variant="outline"
              className="inline-flex items-center gap-2"
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-5 h-5" />
                <span>View My GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/profile.jpg"
            alt="GitHubProfile"
            width={360}
            height={360}
            priority
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full object-cover"
          />
          <Link
            href={`https://github.com/${githubName}`}
            target="_blank"
            rel="noopener noreferrer"
            prefetch={false}
            className="text-sm sm:text-base hover:underline"
          >
            @{githubName}
            <span className="sr-only">(外部リンク、新しいタブで開きます)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GitHubProfile;
