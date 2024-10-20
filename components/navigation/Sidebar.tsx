"use client";

import { fetchSidebarData } from "@/app/api/sideBarApi";
import { PROFILE } from "@/app/constants/profileInfo";
import { SocialLink } from "@/components/blog/SocialLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  const { data: sidebarData, isLoading } = useQuery({
    queryKey: ["sidebarData"],
    queryFn: fetchSidebarData,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: true,
  });

  const categoryCounts = sidebarData?.categoryCounts || [];
  const archiveMonths = sidebarData?.archiveMonths || [];

  return (
    <aside aria-label="プロフィール情報" className="space-y-4">
      <Card className="overflow-hidden">
        <CardHeader className="text-center">
          <Link href="/about" className="inline-block">
            <Avatar className="w-32 h-32 mx-auto">
              <AvatarImage
                src={PROFILE.IMAGE_PATH}
                alt={`${PROFILE.NAME}のプロフィール画像`}
              />
              <AvatarFallback>わるつ</AvatarFallback>
            </Avatar>
          </Link>
          <h2 className="font-bold text-xl mt-4">わるつ</h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Web系エンジニア2年目。普段はReact | Next.js | Ruby on
            Railsをメインに個人開発しています。フロントエンドが得意です。
          </p>
        </CardContent>
        <CardFooter className="justify-center gap-2">
          <SocialLink
            href={PROFILE.SOCIAL_LINKS.X}
            icon={<FaXTwitter />}
            label="Xプロフィールへ"
          />
          <SocialLink
            href={PROFILE.SOCIAL_LINKS.GITHUB}
            icon={<FaGithub />}
            label="GitHubプロフィールへ"
          />
        </CardFooter>
      </Card>

      {/* カテゴリ */}
      <Card className="overflow-hidden">
        <CardHeader className="text-center">
          <span className="font-bold">Category</span>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="p-3 animate-pulse">Loading...</div>
          ) : (
            categoryCounts.map((category, index, array) => (
              <Link
                href={`/category/${category.id}`}
                className={`py-2 flex items-center justify-between hover:text-gray-500 ${
                  index !== array.length - 1 ? "border-b" : ""
                }`}
                key={index}
              >
                <span>{category.name}</span>
                <span>{category.count}</span>
              </Link>
            ))
          )}
        </CardContent>
      </Card>

      {/* アーカイブ */}
      <Card>
        <CardHeader className="text-center">
          <span className="font-bold">Archive</span>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="p-3 animate-pulse">Loading...</div>
          ) : (
            archiveMonths.map((archive, index, array) => {
              return (
                <Link
                  href={`/archive/${archive.year}/${archive.month}`}
                  className={`py-3 flex items-center justify-between hover:text-gray-500 ${
                    index !== array.length - 1 ? "border-b" : ""
                  }`}
                  key={index}
                >
                  <span>
                    {format(
                      new Date(archive.year, archive.month - 1),
                      "yyyy年MM月"
                    )}
                  </span>
                  <span>{archive.count}</span>
                </Link>
              );
            })
          )}
        </CardContent>
      </Card>
    </aside>
  );
}
