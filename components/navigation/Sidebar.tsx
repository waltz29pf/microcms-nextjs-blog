import { PROFILE } from "@/app/constants/profileInfo";
import { SocialLink } from "@/components/blog/SocialLink";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <aside aria-label="プロフィール情報">
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
    </aside>
  );
}
