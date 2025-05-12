function BackgroundBubble() {
  return (
    <>
      <div className="w-[400px] h-[300px] bg-primaryLight absolute z-[-1] blur-[120px] rounded-full opacity-40 dark:opacity-30 left-[3rem] top-[1rem]"></div>
      <div className="w-[400px] h-[300px] bg-primaryDark absolute z-[-1] blur-[120px] rounded-full opacity-60 dark:opacity-30 left-[15rem] top-[12rem]"></div>
    </>
  )
}

export default BackgroundBubble