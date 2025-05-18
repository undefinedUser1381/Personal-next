import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

interface ProjectBoxProps {
  id: number;
  title: string;
  technologies: string[];
  desc: string;
  gitHubLink: string;
  liveLink: string;
  imageSrc: string;
}

export default function ProjectBox({desc,gitHubLink,imageSrc,liveLink,technologies,title} : ProjectBoxProps) {
  return (
  <div className="w-full lg:w-[49%] dark:bg-customCartDark p-4 h-auto rounded-xl bg-customCartlight lg:h-[24rem] xl:h-[22rem]">
    <div className="flex items-center justify-between">
       <h4 className="text-blue-500">{title}</h4>
       <div><Image src={imageSrc} width={150} height={150} alt={title}/></div>
     </div>
     <div className="flex items-center justify-start mt-5.5">
      <p className="dark:text-gray-400 text-gray-500">{desc}</p>
     </div>
     <div className="flex items-center justify-start w-full flex-wrap mt-5.5 gap-2">
       <div className="text-primaryDark">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
         </svg>
       </div>
       :
       {
         technologies.map((techno , i) => (
            <div key={i + 1} className="bg-primaryLight px-2 rounded-2xl">
              <p className="text-[0.7rem] text-white">{techno}</p>
            </div>
         ))
       }
     </div>
     <div className="flex items-center mt-8 justify-between">
       <Link href={gitHubLink} target="_blank" className="bg-primaryDark dark:bg-darkText p-1 flex items-center text-white justify-center gap-1.5 rounded-lg w-[150px] text-center ">
        <FaGithub />
        Github Link
        </Link>
       <Link href={liveLink} target="_blank" className="bg-primaryLight text-white gap-1.5 p-1.5 w-[150px] flex items-center justify-center text-center rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
         </svg>
         See live
        </Link>
     </div>
  </div>
  );
}
