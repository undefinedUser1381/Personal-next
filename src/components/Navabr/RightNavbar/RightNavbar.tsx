"use client"
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

interface NavbarProps {
  onOpen : () => void
}

function RightNavbar({onOpen} : NavbarProps) {
  return (
    <>
      <nav className="hidden md:block md:w-[40%] lg:w-[35%] ">
        <ul className="flex text-black *:hover:text-primaryLight *:dark:text-darkText *:dark:hover:text-primaryDark *:cursor-pointer *:transition-all *:duration-150 items-center gap-2.5 justify-between">
          <li><a href="#contactme"></a>contact me</li>
          <li><a href="#projects">projects</a></li>
          <li><a href="#skills">skills</a></li>
          <li>
          <Link target="_blank" href={"https://github.com/undefinedUser1381"}>
            github
          </Link>
          </li>
        </ul>
      </nav>
      <div onClick={onOpen} className="flex items-center justify-center w-[2rem] h-[1.5rem] cursor-pointer md:hidden">
        <FaBars className="w-[100%] h-[100%] text-primaryLight dark:text-primaryDark"/>
      </div>
    </>
  );
}

export default RightNavbar;
