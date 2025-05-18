"use client";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RightIntroduction() {
  return (
    <motion.div
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 200, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex w-[90%] sm:w-[9s0%] lg:w-[50%] xl:w-[40%] flex-col gap-6"
    >
      <h4 className="font-bold text-[1.2rem] sm:text-[1.4rem]">Hey 👋! Im Seyed Erfan Ghezi</h4>
      <h5 className="font-bold text-[1.2rem] sm:text-[1.4rem]">
        <span className="text-primaryDark">Next js | React js </span>Developer
      </h5>
      <p className="block text-darkText">
        With creative code, we create unique visual and interactive experiences
        for users.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-3 justify-center lg:justify-start">
        <a
          className="bg-primaryLight text-white w-[90%] md:w-[40%] p-5 lg:w-[220px] h-[35px] flex items-center justify-center rounded-[10px] gap-2"
          download="Erfan-ghezi.pdf"
          href="/my-resume.pdf"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
          </svg>
          Download Resume
        </a>
        <Link
          target="_blank"
          className="dark:bg-black w-[90%] p-6 md:w-[40%] lg:w-[140px] xl:w-[170px] dark:text-white bg-gray-300 h-[40px] text-black rounded-[10px] flex items-center justify-center gap-1.5"
          href={"https://github.com/undefinedUser1381"}
        >
          <FaGithub /> Github
        </Link>
      </div>
    </motion.div>
  );
}
