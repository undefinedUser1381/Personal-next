import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdOutlineCancelPresentation } from "react-icons/md";

interface ThemeSwitcherProp {
  isOpenTheme: boolean;
  onClose: () => void;
}

export default function ThemeSwitcher({
  isOpenTheme,
  onClose,
}: ThemeSwitcherProp) {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();
  console.log(isOpenTheme);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 p-3 z-30 flex flex-col gap-2 transition-all duration-200 bg-blue-900 w-[10rem] h-fit ${
        isOpenTheme ? "right-3" : "right-[-10rem]"
      }`}
    >
      <MdOutlineCancelPresentation className="text-white" onClick={onClose} />
      <div className={`flex flex-col items-center justify-center gap-1.5`}>
        <div onClick={() => setTheme("dark")} className="bg-[#011627] text-white p-1 w-[100%] h-full flex items-center justify-center">
          dark
        </div>
        <div onClick={() => setTheme("light")} className="bg-white w-[100%] p-1 h-full flex items-center justify-center text-black">
          light
        </div>
      </div>
    </div>
  );
}
