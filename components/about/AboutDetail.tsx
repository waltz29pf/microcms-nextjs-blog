"use client";
import { AboutContent } from "@/app/types";
import { motion } from "framer-motion";
interface AboutDetailProps {
  aboutInfo: AboutContent;
}

const AboutDetail = ({ aboutInfo }: AboutDetailProps) => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <article>
        <h2 className="font-bold text-3xl">About Me</h2>
        <div dangerouslySetInnerHTML={{ __html: aboutInfo.content }} />
      </article>
    </motion.div>
  );
};

export default AboutDetail;
