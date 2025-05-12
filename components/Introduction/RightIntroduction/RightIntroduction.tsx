import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function RightIntroduction() {
  return (
    <div className="w-[35%] flex-col gap-5">
      <h4 className="font-bold text-[1.4rem]">Hey 👋! I'm Seyed Erfan Ghezi</h4>
      <h5 className="font-bold text-[1.4rem] mt-4.5">
        <span className="text-primaryDark">Next js | React js </span>Developer
      </h5>
      <p className="block mt-5 text-darkText">
        With creative code, we create unique visual and interactive experiences
        for users.
      </p>
      <div className="flex items-center mt-[1.8rem] gap-2.5 justify-start">
        <a className="bg-primaryLight text-white w-[160px] h-[35px] flex items-center justify-center rounded-[10px]" download="Erfan-ghezi.pdf" href="/my-resume.pdf">ِDownload Resume</a>
        <Link target="_blank" className="dark:bg-black dark:text-white bg-gray-300 w-[100px] h-[40px] text-black rounded-[10px] flex items-center justify-center gap-1.5" href={"https://github.com/undefinedUser1381"}><FaGithub /> Github</Link>
      </div>
    </div>
  );
}
