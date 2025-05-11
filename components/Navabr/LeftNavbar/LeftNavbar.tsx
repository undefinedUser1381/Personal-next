"use client"

function LeftNavbar() {
  return (
    <div className='flex items-center justify-center gap-3'>
     <div>
      <svg width="40" height="40" viewBox="0 0 120 100" fill='none' xmlns="http://www.w3.org/2000/svg">
        <path d="M30 20 L10 50 L30 80" stroke="#007BFF" className="stroke-primaryLight dark:stroke-primaryDark" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M90 20 L110 50 L90 80" stroke="#007BFF" strokeWidth="6" className="stroke-primaryLight dark:stroke-primaryDark" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="60" y1="15" x2="60" y2="85" stroke="#007BFF" strokeWidth="6" className="stroke-primaryLight dark:stroke-primaryDark" transform="rotate(10 60 50)"/>
      </svg>
     </div>
      <h3 className="text-primaryLight dark:text-primaryDark">Erfan Ghezi</h3>
    </div>
    
  )
}

export default LeftNavbar