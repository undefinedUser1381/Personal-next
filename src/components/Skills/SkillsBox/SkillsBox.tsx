import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

interface SkillProps {
  id: number;
  src: string;
  title: string;
  skillRate: number;
}

export default function SkillsBox({skillRate, src, title}: SkillProps) {

  return (
    <div className="w-full gap-5.5 rounded-xl flex dark:bg-customCartDark bg-customCartlight items-center justify-start md:w-[47%] lg:w-[30%] xl:w-[19rem] md:h-[7rem] md:justify-center px-3.5 h-[6rem]">
      <div>
        <Image width={50} height={50} src={src} alt={title} />
      </div>
      <div className="w-3/3 flex flex-row md:flex-col md:w-auto justify-between gap-2.5">
        <h5 className="dark:text-white text-black">{title}</h5>
        <div className="flex gap-1.5 items-center">
          {new Array(skillRate).fill(0).map((item,i) => (
            <FaStar key={i + 1} className="fill-amber-400" />
          ))}
            {new Array(5 - skillRate).fill(0).map((item,i) => (
            <FaRegStar key={i + 1} className="fill-amber-400" />
          ))}
        </div>
      </div>
    </div>
  );
}
