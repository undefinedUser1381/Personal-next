"use client";

import { IoMdMoon } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import ThemeSwitcher from "./ThemeSwitcher/ThemeSwitcher";
import { useState } from "react";

export default function ThemeSwitcherContainer() {
  const [isOpenThemeSwitcher, setIsOpenThemeSwitcher] = useState(false);

  const openThemeBox = () => {
    setIsOpenThemeSwitcher(true);
  };

  const closeThemeBox = () => {
    setIsOpenThemeSwitcher(false);
  };

  return (
    <div 
      onClick={openThemeBox}
      className={`fixed cursor-pointer text-white flex items-center justify-evenly right-4 lg:right-10 bottom-4 md:bottom-8 bg-primaryLight p-1 w-[4.5rem] rounded-full h-[2.2rem] z-20`}
    >
      <IoMdMoon />
      |
      <FiSun />
      <ThemeSwitcher
        isOpenTheme={isOpenThemeSwitcher}
        onClose={closeThemeBox}
      />
    </div>
  );
}
