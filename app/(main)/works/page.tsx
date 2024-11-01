import { portfolioItems } from "@/app/components/features/portfolio/portfolioData";
import { Card, CardContent } from "@/app/components/ui/card";
import { githubUrl } from "@/app/lib/constants/githubInfo";
import Image from "next/image";
import Link from "next/link";
const WorksPage = () => {
  return (
    <section className="min-h-screen container px-4 md:px-0 py-10 mx-auto">
      <h1 className="text-3xl font-semibold  capitalize lg:text-4xl bg-clip-text bg-gradient-to-r from-sky-500 to-sky-300 text-transparent">
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
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full"
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
  );
};

export default WorksPage;
