"use client";
import { portfolioItems } from "@/app/components/features/portfolio/portfolioData";
import { Card, CardContent } from "@/app/components/ui/card";
import { githubUrl } from "@/app/lib/constants/githubInfo";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const WorksPage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.4 }}
    >
      <section className="min-h-screen container px-4 md:px-0 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          My Works
        </h1>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          {portfolioItems.map((portfolioItem) => (
            <Card key={portfolioItem.id}>
              <CardContent className="p-0">
                <div className="flex flex-col overflow-hidden rounded-lg">
                  <div className="relative aspect-video w-full">
                    <Link
                      href={`${githubUrl}/${portfolioItem.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      prefetch={false}
                    >
                      <Image
                        src={portfolioItem.imagePath}
                        alt={portfolioItem.name}
                        fill
                        className="object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </Link>
                  </div>

                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {portfolioItem.name}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {portfolioItem.txt}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {portfolioItem.badges.map((badge) => (
                        <span
                          key={badge}
                          className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default WorksPage;
