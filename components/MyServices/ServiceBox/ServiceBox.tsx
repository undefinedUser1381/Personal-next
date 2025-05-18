interface ServiceProps {
    title : string , 
    desc : string , 
    icon : React.ReactNode
}

export default function ServiceBox({title , desc , icon} : ServiceProps) {
  return (
    <div className="w-full md:w-[49%] h-auto xl:w-[24%] md:h-[17rem] xl:h-[20rem] border-gray-300 dark:border-gray-700 border-2 flex flex-col gap-7 items-center pt-8 p-4 bg-customCartlight dark:bg-customCartDark rounded-lg">
      <div className="dark:text-primaryDark text-primaryLight">
        {icon}
      </div>
      <h4 className="dark:text-primaryDark text-primaryLight">{title}</h4>
      <div>
        <p className="dark:text-darkText text-black">{desc}</p>
      </div>
    </div>
  )
}
