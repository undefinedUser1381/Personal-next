import React from 'react'
import ProjectBox from './ProjectBox/ProjectBox'

export default function Projects() {

  const projects = [
    {id : 1 , title : "Technoara (Shopping)" , technologies : ["React","React query","React form","Tailwind","Shadcn"] ,  desc : "A large shopping project with react full responsive with user dashboard and panel admin . Developed carefully and it will be connected to the backend soon ..." , gitHubLink : "https://github.com/undefinedUser1381/Technoara" , liveLink : "https://undefineduser1381.github.io/Technoara/" , imageSrc : "/images/projects/tecnhoara.png"},
    {id : 2 , title : "Dashboard" , technologies : ["React","Redux toolkit","React form","Axios", "Typescript"] ,  desc : "A beautiful dashboard with two themes ( light and dark ) . Full responsive desinged and also it has a login page that lets you get in and do ( Delete , Post , ... ) articles , users and tasks" , gitHubLink : "https://github.com/undefinedUser1381/dashboard" , liveLink : "https://undefineduser1381.github.io/dashboard" , imageSrc : "/images/projects/dashboard.png"},
    {id : 3 , title : "Technoara Dashboard" , technologies : ["React","Shadcn","React form", "Tailwind"] ,  desc : "Large admin panel with react with many routes include users , orders , unique user pages with useParams . Developed with fully responsive and modern ui . it is now connecting to backend" , gitHubLink : "https://github.com/undefinedUser1381/Technoara" , liveLink : "https://undefineduser1381.github.io/Technoara/#/panel/dashboard" , imageSrc : "/images/projects/t-dashboard.png"},
    {id : 4 , title : "NFTmarketplace" , technologies : ["Js","Html", "Css"] ,  desc : "Landing with html css js with a beautiful figma ui design that developed responsive and modern ui pallete color that used in this project is unique . This project is just an exercise" , gitHubLink : "https://github.com/undefinedUser1381/NFTmarketplace.github.io" , liveLink : "https://undefineduser1381.github.io/NFTmarketplace.github.io/" , imageSrc : "/images/projects/landing-1.png"},
    {id : 5 , title : "Landing" , technologies : ["Swiper","Css","Aos js", "Javascript"] ,  desc : "A Landing with some technologies like html css js aos and javascript that used in this project for slide some carts and create a smooth scroll behavior . This project suggested to be developed for an exercise" , gitHubLink : "https://github.com/undefinedUser1381/landing.github.io" , liveLink : "https://undefineduser1381.github.io/landing.github.io/" , imageSrc : "/images/projects/landing-2.png"},
    {id : 6 , title : "Mini Dictionary" , technologies : ["Javascript","Html","Css"] ,  desc :"Mini javascript project with small html css design used Api to transfer data by entered word in input and then show the result in the box with the root of that word . It is only an exercise for transfering data with api" , gitHubLink : "https://github.com/undefinedUser1381/dictionary" , liveLink : "https://undefineduser1381.github.io/dictionary/" , imageSrc : "/images/projects/mini.png"}
  ];

  return (
    <section id='projects' className='mt-[4rem] lg:mt-[5rem] px-2.5'>
      <div className='flex items-center justify-start gap-2'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 dark:text-primaryDark text-primaryLight">
         <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
        </svg>
        <h4 className='title-section'>Projects</h4>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap items-start gap-y-6 mt-10 justify-between w-full">
        {
          projects.map(prj => (
              <ProjectBox key={prj.id} {...prj}/>
          ))
        }
      </div>
    </section>
  )
}
