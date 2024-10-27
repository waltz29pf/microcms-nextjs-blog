"use client";
import { motion } from "framer-motion";
const WorksPage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.4 }}
    >
      <section className="min-h-screen">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            My Portfolio
          </h1>

          <div className="grid grid-cols-1  gap-8 mt-8 xl:mt-12 xl:gap-12 lg:grid-cols-3">
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 cursor-pointer">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  Portfolio 1のタイトル
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                  Portfolio 1のリンク先
                </p>
              </div>
            </div>

            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 cursor-pointer">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  Portfolio 2のタイトル
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                  Portfolio 2のリンク先
                </p>
              </div>
            </div>

            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 cursor-pointer">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  Portfolio 3のタイトル
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                  Portfolio 3のリンク先
                </p>
              </div>
            </div>

            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 cursor-pointer">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  Portfolio 4のタイトル
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                  Portfolio 4のリンク先
                </p>
              </div>
            </div>
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 cursor-pointer">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  Portfolio 5のタイトル
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                  Portfolio 5のリンク先
                </p>
              </div>
            </div>
            <div className="flex items-end overflow-hidden bg-cover rounded-lg h-96 cursor-pointer">
              <div className="w-full px-8 py-4 overflow-hidden rounded-b-lg backdrop-blur-sm bg-white/60 dark:bg-gray-800/60">
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">
                  Portfolio 6のタイトル
                </h2>
                <p className="mt-2 text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">
                  Portfolio 6のリンク先
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WorksPage;
