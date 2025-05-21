import React from 'react'
import SkillsBox from './SkillsBox/SkillsBox'

export default function Skills() {
 
  const skills = [
    { id: 1 , skillRate : 4 , title : "Typescript" , src : "/images/skills/typescript-logo-svgrepo-com.svg" },
    { id: 2 , skillRate : 4 , title : "Javascript" , src : "/images/skills/javascript-svgrepo-com.svg" },
    { id: 3 , skillRate : 3 , title : "Next js" , src : "/images/skills/next-16-svgrepo-com.svg" },
    { id: 4 , skillRate : 4 , title : "React js" , src : "/images/skills/react-svgrepo-com.svg" },
    { id: 5 , skillRate : 5 , title : "Axios" , src : "/images/skills/axios.svg" },
    { id: 6 , skillRate : 5 , title : "React form" , src : "/images/skills/react-hook-form-logo-only.svg" },
    { id: 7 , skillRate : 4 , title : "Tailwind" , src : "images/skills/tailwind-svgrepo-com.svg" },
    { id: 8 , skillRate : 4 , title : "Redux" , src : "images/skills/redux-svgrepo-com.svg" },
  ]

  return (
    <div id='skills' className='section-container'>
       <div className='section-title__box'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 dark:text-primaryDark text-primaryLight">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
         </svg>
        <h4 className='title-section'>Skills</h4>
       </div>
       <div className='flex items-center mt-12 justify-start flex-wrap gap-10 xl:gap-9 xl:w-full'>
         {
            skills.map((skill) => (
                <SkillsBox key={skill.id} {...skill}/>
            ))
         }
       </div>
    </div>
  )
}

