import React from 'react'
import { jsonData } from '../../data'
import bannerPersion from '../../Assets/images/bannerpersion.png'
const HomeBanner = () => {
   return (
      <section id="home" className="overflow-hidden">
         <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
            <div data-aos="slide-left" data-aos-delay="100" className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10">
               <h1 className="rotate-90 absolute top-[30%] right-[-15%] text-[#EAF2FA]" >{jsonData.profile.firstName}<span className="text-dark_primary"> {jsonData.profile.lastName}</span></h1>
            </div>
            <div className="pb-16 px-6 pt-5" data-aos="fade-down">
               <h2>{jsonData.profile.jobTitle}</h2>
               <br />
               <div className="flex justify-end"><button className="btn">Hire Me</button></div>
               <div className="flex flex-col gap-10 mt-10">
                  <div data-aos="fade-up" data-aos-delay="0" className="flex items-center w-80 gap-5 false">
                     <h3>{jsonData.profile.expericence}</h3>
                     <p>{jsonData.profile.expericenceDescritpion}</p>
                  </div>
                  <div className="flex items-center w-80 gap-5 flex-row-reverse text-right">
                     <h3>{jsonData.profile.numberOfProject}+</h3>
                     <p>{jsonData.profile.projectDescription}</p>
                  </div>
               </div>
            </div>
            <div className="md:h-[37rem] h-96"><img src={bannerPersion} data-aos="slide-up" alt="..." className="h-full object-cover" /></div>
         </div>
      </section>
   )
}

export default HomeBanner