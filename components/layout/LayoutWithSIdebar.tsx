"use client";

import Sidebar from "@/components/navigation/Sidebar";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LayoutWithSidebarProps {
  children: ReactNode;
}

const LayoutWithSidebar = ({ children }: LayoutWithSidebarProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto my-10 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <motion.main
          className="w-full md:flex-grow md:max-w-[788px]"
          variants={itemVariants}
        >
          {children}
        </motion.main>
        <motion.aside
          className="w-full md:w-[300px] lg:shrink-0"
          variants={itemVariants}
        >
          <Sidebar />
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default LayoutWithSidebar;
