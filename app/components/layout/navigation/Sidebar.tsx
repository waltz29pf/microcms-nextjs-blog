import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/app/components/ui/card";
import { PROFILE } from "@/app/lib/constants/profileInfo";
import { ArchiveMonth, CategoryCount } from "@/app/types";
import { format } from "date-fns";
import Link from "next/link";
import { Suspense } from "react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { SocialLink } from "../../features/blog/SocialLink";

interface SidebarProps {
  archiveMonths: ArchiveMonth[];
  categoryCounts: CategoryCount[];
}

export default async function Sidebar({
  archiveMonths,
  categoryCounts,
}: SidebarProps): Promise<JSX.Element> {
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
          <div className="flex flex-col gap-0">
            <h2 className="font-bold text-xl mt-4">わるつ</h2>
            <span className="text-sm">Web Developer</span>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Web系エンジニア2年目。独学▶︎自社・受託開発会社▶︎フリーランス。普段はReact
            | Next.js | Ruby on
            Railsをメインに個人開発しています。フロントエンドが得意です。AWS
            SAAを保有。東京都在住。
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
      <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
        <Card className="overflow-hidden">
          <CardHeader className="text-center">
            <span className="font-bold">Category</span>
          </CardHeader>
          <CardContent>
            {categoryCounts.map((category, index, array) => (
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
            ))}
          </CardContent>
        </Card>
      </Suspense>

      {/* アーカイブ */}
      <Suspense fallback={<div className="animate-pulse">Loading...</div>}>
        <Card>
          <CardHeader className="text-center">
            <span className="font-bold">Archive</span>
          </CardHeader>
          <CardContent>
            {archiveMonths.map((archive, index, array) => {
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
            })}
          </CardContent>
        </Card>
      </Suspense>
    </aside>
  );
}
