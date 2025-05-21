"use client";
import { motion } from "framer-motion";

export default function LeftIntroduction() {
  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -200, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="rounded-full w-[70%] sm:w-[40%] md:w-[40%] lg:w-[45%] xl:w-[30%] h-[17.5rem] md:h-[24rem] xl:h-[26rem] overflow-hidden border-dashed border-2 border-primaryLight"
    >
      <img
        className="object-cover w-full h-full"
        src="/images/me.jpg"
        alt="Picture of developer"
      />
    </motion.div>
  );
}
