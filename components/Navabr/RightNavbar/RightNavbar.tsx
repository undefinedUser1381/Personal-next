"use client"
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

function RightNavbar() {
  return (
    <>
      <nav className="hidden md:block md:w-[40%] lg:w-[35%] ">
        <ul className="flex text-black *:hover:text-primaryLight *:dark:text-darkText *:dark:hover:text-primaryDark *:cursor-pointer *:transition-all *:duration-150 items-center gap-2.5 justify-between">
          <li>contact me</li>
          <li>projects</li>
          <li>home</li>
          <Link target="_blank" href={"https://github.com/undefinedUser1381"}>
            github
          </Link>
        </ul>
      </nav>
      <div className="flex items-center justify-center w-[2rem] h-[1.5rem] cursor-pointer md:hidden">
        <FaBars className="w-[100%] h-[100%] text-primaryLight dark:text-primaryDark"/>
      </div>
    </>
  );
}

export default RightNavbar;
