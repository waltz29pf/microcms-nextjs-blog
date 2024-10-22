"use client";

import { Button } from "@/app/components/ui/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <div className="text-6xl font-bold mb-4">500</div>
        <div className="text-2xl font-semibold text-gray-700">Server Error</div>
        <p className="mt-2 text-gray-500 mb-4">
          申し訳ありません。サーバーエラーです。
        </p>
        <Button onClick={() => router.push("/")}>Homeに戻る</Button>
      </div>
    </div>
  );
};

export default NotFound;
