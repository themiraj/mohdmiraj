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
const HomePage = () => {
  const [popObject, setPopObject] = useState('')
  useEffect(() => {
    if (popObject && Object.keys(popObject).length > 0) {
      document.body.style.overflow = 'hidden' 
      document.body.style.maxHeight = '100vh'
    } else {
      document.body.style.overflow = 'initial'
      document.body.style.maxHeight = 'auto'
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
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="bg-white sm:cursor-pointer relative group w-full flex items-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200 "
                    onClick={() => {
                      setPopObject({ image: item.image, text: item.describe })
                    }}
                    key={item.id}
                  >
                  <SkillCards items={item} />
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section id="services">
        <div className="md:container px-5 py-14">
          <SectionTitle title="Services" subTitle="WHAT I OFFER" />
          <div className="flex gap-5 justify-between flex-wrap group">
            {jsonData.services.map((item, index) => (
              <div
              data-aos="fade-up"
              data-aos-delay="0"
              onClick={() => {
                setPopObject({ text: item.description })
              }}
              key={index}
              className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 group-hover:blur-sm hover:!blur-none aos-init aos-animate"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIaSURBVHgB7ZcxLARBFIb/IDQ4uQiFRqtAJ5FohEKikCh0Qqs6DnEaNDRU9Eg0WkEjObd3LjQXuis013GJSkEjcmZyO9lnMrs7O3vHFfslv0x23hv/vZmX3QEiIiL+jTGmMlOGaRgNyCFTxdYsGpBnOAZ70GD0wzGXQwiaNOPiTGmmXc34KTK+kub2mW6YYqgRfKECnIosa+RcknjaIDvkuYXqDw9t7oksypXwyelk+rBjX6W5JWktCyEqqTKX1MibJPEnivlNac0CDEzG8XtbK/bCOpySnGmXGNlknqkZIczpVE5QJHldHnFJGFQyFtLcIMm71YiXK2nBo3FUZ053WwUJkrummaMyGdMxF6RyggzJHwiQ59k4YRqC0knySwiOa+PkpIlVmDFD1jiGGXLjZPmr7ksKaoUZc2R8ATPk//3G/4TtXEHJzuVvkQ4EJyV5yIKcQ77XdzA/h6MkL4PgbHuZE6gqqWtyneQsIhiqyrW4BXOTloHJexI/BH1kc5aXOUEcwUx2k7gizM1dI8BHg2q7V1xi50nMEczMKc+cH6rGSSnizsj8OPyRG8IyMSdQVVL+oi7bzz811ksozHl+ZvndSd6ZJlDdAkE7GY8w9drjNPxpI+OsvfY3agBvnHOmA+n5FpxqLECPPVTfNDW7NHnxAMdgPxoMvrXC3CPqhO69WAXt2DzqhPZFxSW3D9V7xwbTCyIiIv6eH9CG8DB7Z2R3AAAAAElFTkSuQmCC" alt="..." className="mx-auto" />
              <ServiceCard item={item} />
              </div>
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
          <div className="header">
            <button onClick={() => setPopObject("")} className="close"></button>
            {popObject.image ? <img src={popObject.image} alt='' /> : null} 
          </div>
          <div className='pop-body'>
          <div dangerouslySetInnerHTML={{ __html: popObject.text }} />
          </div>
        </div>
        : null
      }
    </Fragment>
  )
}

export default HomePage