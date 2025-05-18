import Link from "next/link";

export default function FooterRight() {
  return (
    <div className="w-full md:w-[45%]">
      <ul className="flex flex-col md:flex-row justify-start gap-3 md:gap-8 lg:gap-16 dark:text-primaryDark">
        <li><a href="#skills">skills</a></li>
        <Link target="_blank" href={"https://github.com/undefinedUser1381"}>
            github
        </Link>
        <li><a href="#projects">projects</a></li>
        <li><a href="#contactme"></a>contact me</li>
      </ul>
    </div>
  )
}
