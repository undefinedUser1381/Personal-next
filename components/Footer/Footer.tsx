import FooterLeft from "./FooterLeft/FooterLeft";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import FooterRight from "./FooterRight/FooterRight";
import { FaPhoneAlt } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full overflow-hidden relative z-10 h-auto mt-[4rem] xl:mt-[8rem] pt-16 p-10 dark:bg-customCartDark bg-customCartlight">
      <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-start justify-between">
         <FooterLeft />
         <FooterRight />
      </div>
      <div className="flex flex-col items-start mt-10 justify-start gap-6">
         <div className="flex text-md items-center justify-center gap-2">
          <MdOutlineMail />
          <p>errfan8113@gmail.com</p>
         </div>
         <div className="flex text-md items-center justify-center gap-2">
          <FaPhoneAlt />
          <p>09233246491</p>
         </div>
      </div>
      <div className="w-full flex items-center mt-[5rem] justify-between">
        <div className="flex w-[45%] items-center justify-start text-primaryDark">
            <Image src={"/images/signature.png"} alt="Signature" width={150} height={100} />
        </div>
        <div className="flex items-center gap-5 text-2xl justify-between">
         <IoLogoInstagram />
         <FaTelegram />           
         <FaWhatsapp />
         <GrLinkedin />
        </div>
      </div>
      <div className="w-full flex items-center mt-10 justify-center">
         <p>Developed with 💚 By <span className="dark:text-primaryDark text-primaryLight">Erfan Ghezi</span></p>
      </div>
    </footer>
  )
}
