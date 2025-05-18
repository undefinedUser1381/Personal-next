import BackgroundBubble from "../../BackgroundBubble/BackgroundBubble"

export default function FooterLeft() {
  return (
    <div className="w-full md:w-[45%] flex flex-col gap-4">
      <div className="flex items-center justify-start gap-2.5">
        <div>
         <svg width="40" height="40" viewBox="0 0 120 100" fill='none' xmlns="http://www.w3.org/2000/svg">
          <path d="M30 20 L10 50 L30 80" stroke="#007BFF" className="stroke-primaryLight dark:stroke-primaryDark" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M90 20 L110 50 L90 80" stroke="#007BFF" strokeWidth="6" className="stroke-primaryLight dark:stroke-primaryDark" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="60" y1="15" x2="60" y2="85" stroke="#007BFF" strokeWidth="6" className="stroke-primaryLight dark:stroke-primaryDark" transform="rotate(10 60 50)"/>
         </svg>
       </div>
        <h6>Erfan Ghezi</h6>
       </div>
       <p className="text-darkText">Next js | React js Developer . With creative code, we create unique visual and interactive experiences for users .</p>
       <BackgroundBubble /> 
    </div>
  )
}
