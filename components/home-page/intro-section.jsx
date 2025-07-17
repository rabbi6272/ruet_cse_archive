"use client";
import { motion } from "framer-motion";

export function IntroSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center flex flex-col mx-auto px-4 sm:px-6 lg:px-8"
    >
      <br />
      <br />
      {/*Intro Header*/}
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-200">
        Welcome to CSE Archive!
      </h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
        A web application to store and share your ideas and innovations.
      </p>
      <br />
    </motion.div>
  );
}
