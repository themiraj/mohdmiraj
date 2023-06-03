import React, { Fragment } from 'react'
import SectionTitle from '../../Components/Parts/SectionTitle'
import ServiceCard from '../../Components/Parts/ServiceCard'
import { SkillCards } from '../../Components/Parts/SkillCards'
import SwiperSlider from '../../Components/Parts/SwiperSlider'
import HomeBanner from './HomeBanner'
import { jsonData } from '../../data'
import persion from '../../Assets/images/person.png'
import persionRight from '../../Assets/images/personRight.png'
import persionOne from '../../Assets/images/personOne.png'
import ProjectSlider from '../../Components/Parts/ProjectSlider'
import Footer from '../../Components/Parts/Footer'
import ContactForm from '../../Components/ContactForm'
import { useState } from 'react'
import { useEffect } from 'react'
import Header from '../../Components/Parts/Header'
console.log(jsonData)
const HomePage = () => {
  const [popObject, setPopObject] = useState("")
  useEffect(() => {
    if (popObject) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'initial'
    }
  }, [popObject])
  return (
    <Fragment>
      <Header />
      <HomeBanner />
      <section className="min-h-fit bg-bg_light_primary" id="skills">
        <div className="md:container px-5  py-14">
          <SectionTitle title="Skills" subTitle="MY TOP SKILLS" />
          <div className="flex flex-wrap gap-4 justify-center">
            {
              jsonData.skills.map((item) => (
                <SkillCards items={item} setPopObject={setPopObject} />
              ))
            }
          </div>
        </div>
      </section>
      <section id="services">
        <div className="md:container px-5 py-14">
          <SectionTitle title="Services" subTitle="WHAT I OFFER" />
          <div className="flex gap-5 justify-between flex-wrap group">
            {jsonData.services.map((item) => (
              <ServiceCard item={item} setPopObject={setPopObject} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-bg_light_primary" id="projects">
        <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
          <div>
            <SectionTitle title="Projects" subTitle="MY CREATION" />
          </div>
          <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
            <img src={persion} alt="" className="max-w-[45vw] min-w-[22rem]" />
            <ProjectSlider />
          </div>
        </div>
      </section>
      <section className="bg-bg_light_primary">
        <div className="md:container px-5 pt-14">
          <div>
            <SectionTitle title="Hire Me" subTitle="FOR YOUR PROJECTS" />
          </div>
          <br />
          <div className="flex items-center md:flex-row flex-col-reverse ">
            <img src={persionRight} alt="..." data-aos="fade-right" className="max-w-sm md:block hidden aos-init aos-animate" />
            <img src={persionOne} data-aos="fade-up" alt="..." className="max-w-sm md:hidden aos-init aos-animate" />
            <div data-aos="fade-left" className="border-2 border-dark_primary max-w-sm p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem] aos-init aos-animate">
              <p className="leading-7">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean</p>
              <br />
              <button className="btn bg-dark_primary text-white">
                Hire Me</button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-dark_primary text-white" id="contact">
        <div style={{ position: "fixed", Zindex: 9999, inset: "16px", pointerEvents: "none" }}></div>
        <div className="md:container px-5 py-14">
          <div>
            <SectionTitle title="Contect Me" subTitle="GET IN TOUCH" />
          </div>
          <ContactForm />
        </div>
      </section>
      <Footer />
      {popObject ?
        <div className='popOver' data-aos="fade-left">
          <button onClick={() => setPopObject("")}>close</button>
          {popObject.image ? <img src={popObject.image} alt='' /> : null}
          <div dangerouslySetInnerHTML={{ __html: popObject.text }} />
        </div>
        : null
      }
    </Fragment>
  )
}

export default HomePage