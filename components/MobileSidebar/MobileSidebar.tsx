import Link from "next/link";

interface MobileSidebarProps {
  isOpenMobileMenu : boolean
  onClose : () => void
}

function MobileSidebar({isOpenMobileMenu , onClose} : MobileSidebarProps) {
  return (
    <div className={`block md:hidden transition-all duration-200 z-50 fixed p-5 ${isOpenMobileMenu ? "left-0" : "left-[-100%]"} top-0 bottom-0 bg-white dark:bg-[#02233d] w-full`}>
     <div onClick={onClose} className="w-full text-darkText">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-[2rem] h-[2rem]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      </div>
      <ul className="flex mt-[2rem] *:text-darkText flex-col gap-[2rem] *:py-4 *:border-b *:border-b-darkText *:hover:text-primaryDark *:transition-all *:duration-200 *:cursor-pointer *:text-[1.3rem]">
        <li>contact</li>
        <li>home</li>
        <li>projects</li>
        <Link target="_blank" href={"https://github.com/undefinedUser1381"}>github</Link>
      </ul>
    </div>
  );
}

export default MobileSidebar;
