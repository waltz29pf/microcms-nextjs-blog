"use client";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1.4 }}
    >
      <div className="flex items-center justify-center min-h-screen">
        ContactPage
      </div>
    </motion.div>
  );
};

export default ContactPage;
