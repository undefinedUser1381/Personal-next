import React from 'react'
import ServiceBox from './ServiceBox/ServiceBox'
import { IoSettingsOutline } from "react-icons/io5";
import { IoCodeSlashOutline } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { VscArrowSwap } from "react-icons/vsc";

export default function MyServices() {

  const services = [
    {id : 1 , icon : <MdOutlineDesignServices className='text-4xl'/> , title : "Responsive Design" , desc : "Convert designs made in tools like Figma, Adobe XD, or PSD into fully responsive web pages"},
    {id : 2 , icon : <IoCodeSlashOutline className='text-4xl' /> , title : "Ui Development" , desc : "Implementing the site's appearance with HTML, CSS, JavaScript, and JavaScript libraries like React and its framework."},
    {id : 3 , icon : <IoSettingsOutline className='text-4xl'/> , title : "Performance Optimization" , desc : "Reducing load time, optimizing codes, lazy loading images, and improving user experience."},
    {id : 4 , icon : <VscArrowSwap className='text-4xl'/> , title : "API Integration" , desc : "Retrieving information from the backend and displaying it correctly with a user-friendly UI on the page."} 
  ];

  return (
    <section className='section-container'>
     <div className='section-title__box'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-primaryLight dark:text-primaryDark">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
       </svg>
      <h4 className='title-section'>Services</h4>
    </div>
    <div className="flex flex-col md:flex-row flex-wrap items-start gap-y-5 mt-10 justify-between w-full">
       {
        services.map((service) => (
            <ServiceBox key={service.id} {...service}/>
        ))
       }
    </div>
  </section>
  )
}
