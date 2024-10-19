"use client";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="space-y-10">
      <div className="border flex flex-col items-center justify-center p-5 space-y-5">
        <Link href="/about">
          <Image
            src="/profile.jpg"
            width={120}
            height={120}
            alt="profile"
            className="rounded-full"
            priority={false}
          />
        </Link>

        <div className="font-bold text-xl">わるつ</div>

        <p className="text-sm">
          Web系エンジニア2年目。普段はReact | Next.js | Ruby on
          Railsをメインに個人開発しています。フロントエンドが得意です。
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
