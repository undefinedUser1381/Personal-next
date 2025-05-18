import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";

export default function ContactLeftSide() {
  return (
    <div className="w-full lg:w-[48%] h-[95%] flex flex-col items-start justify-between gap-9 lg:gap-0">
      <div className="w-full">
        <h4 className="text-darkText text-2xl mb-2.5">Get In Touch</h4>
        <span className="dark:text-primaryDark text-primaryLight">
          Im eager to collobrate with you. Lets talk.
        </span>
      </div>
      <div className="flex items-center *:text-2xl justify-center gap-10 xl:gap-16 text-darkText *:transition-all *:duration-200 *:hover:text-primaryLight *:cursor-pointer w-[100%]">
        <a href="https://instagram.com/_erphunam_" target="_blank">
         <IoLogoInstagram />
        </a>
        <a href="https://t.me/ErFnGhy" target="_blank">
         <FaTelegram />
        </a>
        <a target="_blank" href="https://wa.me/989233246491">
         <FaWhatsapp />
        </a>
        <a target="_blank" href="mailto:errfan8113@gmail.com">
         <MdOutlineMail />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/erfan-ghezi-23bb8b364/">
         <GrLinkedin />
        </a>
      </div>
    </div>
  );
}
