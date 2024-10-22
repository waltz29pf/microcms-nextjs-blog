"use client";

import Footer from "@/app/components/layout/footer/Footer";
import NavBar from "@/app/components/layout/Header/Header";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface TransitionProviderProps {
  children: ReactNode;
}
const TransitionProvider = ({ children }: TransitionProviderProps) => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathName}
        className="flex flex-col w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="w-screen h-screen fixed bg-gradient-to-b from-blue-200 to-red-200 z-20 rounded-b-full"
          animate={{ height: "0vh" }}
          exit={{ height: "180vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-8xl font-bold text-black  cursor-default z-30 w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="w-screen h-screen fixed bg-gradient-to-b from-blue-200 to-red-200 z-10 rounded-t-full bottom-0"
          initial={{ height: "180vh" }}
          animate={{
            height: "0vh",
            transition: { delay: 0.5 },
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <NavBar />

        <main className="flex-grow">{children}</main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
