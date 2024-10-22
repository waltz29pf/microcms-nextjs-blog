"use client";
import { githubUrl } from "@/app/constants/githubInfo";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ y: "-200vh" }}
        animate={{ y: "0%" }}
        transition={{ duration: 1.4 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="h-1/2 relative w-full md:w-1/2 aspect-square max-w-[500px] mx-auto">
            {/* Image Container */}
            <Image
              src="/profile.jpg"
              alt="Profile Image"
              fill
              className="object-contain rounded"
            />
          </div>
          {/* Text Container */}
          <div className="h-1/2 flex flex-col w-full md:w-1/2 gap-8 ">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl  font-bold tracking-tighter text-center md:text-left">
              Welcome to My Portfolio!
            </h1>
            {/* Description */}
            <p className="text-base lg:text-lg text-gray-500 dark:text-gray-400 leading-relaxed text-center md:text-left">
              I am a web-based developer living in Japan. On this site, I post
              my past works and blog articles. My favorite language is
              TypeScript.
            </p>
            {/* Buttons */}
            <div className="flex justify-center md:justify-start gap-2">
              <Button
                asChild
                variant="ghost"
                className="flex-1 ring-1 ring-black bg-black text-white"
              >
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5" />
                  <span>View My GitHub</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="flex-1 ring-1 ring-black"
              >
                <Link
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="w-5 h-5" />
                  <span>View My X</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Text Container */}
        <div className="flex flex-col gap-24 py-24">
          {/* Biography Container */}
          <div className="flex flex-col gap-12 justify-center ">
            {/* Biography Title */}
            <h2 className="text-2xl font-bold">BIOGRAPHY</h2>
            {/* Biography Description */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              unde magnam placeat veritatis laudantium maxime at, cupiditate,
              enim eos rerum nulla. Quibusdam laboriosam dolorum eligendi animi
              quod? Facilis, omnis fugit.
            </p>
            {/* Biography quote */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quis quae quisquam quam atque autem. Quis totam magni repellat,
              debitis quam cumque voluptate quod omnis, molestiae asperiores
              quae qui blanditiis?
            </span>
          </div>
          {/* Skills Container */}
          <div className="flex flex-col gap-12 justify-center ">
            {/* Biography Title */}
            <h2 className="text-2xl font-bold">SKILLS</h2>
            {/* Skills List */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 bg-black text-white text-sm cursor-pointer hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 bg-black text-white text-sm cursor-pointer hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 bg-black text-white text-sm cursor-pointer hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 bg-black text-white text-sm cursor-pointer hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded p-2 bg-black text-white text-sm cursor-pointer hover:bg-white hover:text-black">
                React
              </div>
              <div className="rounded p-2 bg-black text-white text-sm cursor-pointer hover:bg-white hover:text-black">
                Next.js
              </div>
            </div>
          </div>
          {/* Experience Container */}
          <div className="flex flex-col gap-12 justify-center ">
            {/* Experience Title */}
            <h2 className="text-2xl font-bold">EXPERIENCE</h2>
            {/* Experience Description */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              unde magnam placeat veritatis laudantium maxime at, cupiditate,
              enim eos rerum nulla. Quibusdam laboriosam dolorum eligendi animi
              quod? Facilis, omnis fugit.
            </p>
            {/* Experience quote */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              quis quae quisquam quam atque autem. Quis totam magni repellat,
              debitis quam cumque voluptate quod omnis, molestiae asperiores
              quae qui blanditiis?
            </span>
          </div>
        </div>
        {/* SVG Container */}
        <div></div>
      </motion.div>
    </div>
  );
};

export default Profile;
