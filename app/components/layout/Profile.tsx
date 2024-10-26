"use client";
import SkillCard from "@/app/components/features/profile/SkillCard";
import { Button } from "@/app/components/ui/button";
import { githubUrl } from "@/app/lib/constants/githubInfo";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Profile = () => {
  return (
    <div className="container mx-auto px-4 py-16">
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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          {/* Text Container */}
          <div className="h-1/2 flex flex-col w-full md:w-1/2 gap-8 ">
            {/* Title */}
            <h1 className="text-4xl md:text-6xl  font-bold tracking-tighter text-center md:text-left">
              Hello, I am
            </h1>
            <div className="text-3xl md:text-5xl  font-bold tracking-tighter text-center md:text-left">
              Web developer
            </div>
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
            <div className="flex items-center">
              <h2 className="text-2xl font-bold">SKILLS</h2>
            </div>
            {/* Skills List */}
            <p>仕事で使っている技術やツールを紹介します。</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <SkillCard skillName={"HTML"} skillImage={"html"} />
              <SkillCard skillName={"CSS"} skillImage={"CSS"} />
              <SkillCard skillName={"JavaScript"} skillImage={"JavaScript"} />
              <SkillCard skillName={"TypeScript"} skillImage={"TypeScript"} />
              <SkillCard skillName={"React"} skillImage={"React"} />
              <SkillCard skillName={"Next.js"} skillImage={"Next.js"} />
              <SkillCard skillName={"Ruby"} skillImage={"Ruby"} />
              <SkillCard
                skillName={"Ruby on Rails"}
                skillImage={"Ruby on Rails"}
              />
              <SkillCard
                skillName={"Tailwind CSS"}
                skillImage={"Tailwind CSS"}
              />
              <SkillCard skillName={"Docker"} skillImage={"Docker"} />
              <SkillCard skillName={"Docker"} skillImage={"Docker"} />
              <SkillCard skillName={"Docker"} skillImage={"Docker"} />
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
