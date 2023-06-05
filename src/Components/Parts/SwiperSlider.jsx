import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
const SwiperSlider = () => {
    return (
        <Swiper
            direction={"vertical"}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="md:h-96 h-[40rem] max-w-3xl swiper-backface-hidden aos-animate aos-init"
        >
            <SwiperSlide><div className=" duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                false"><img src="https://codeaprogram-portfolio.web.app/assets/avatar3.11823cb3.png" alt="..." className="h-24"/><div><p className="sm:text-base text-sm">“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”</p><br/><h6>Johnny</h6></div></div></SwiperSlide>
            <SwiperSlide><div className=" duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                false"><img src="https://codeaprogram-portfolio.web.app/assets/avatar3.11823cb3.png" alt="..." className="h-24"/><div><p className="sm:text-base text-sm">“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”</p><br/><h6>Johnny</h6></div></div></SwiperSlide>
            <SwiperSlide><div className=" duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                false"><img src="https://codeaprogram-portfolio.web.app/assets/avatar3.11823cb3.png" alt="..." className="h-24"/><div><p className="sm:text-base text-sm">“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”</p><br/><h6>Johnny</h6></div></div></SwiperSlide>
            <SwiperSlide><div className=" duration-500 bg-bg_light_primary mx-8 border-2 
              p-8 h-full rounded-2xl flex items-center gap-6
               border-slate-200 md:flex-row flex-col
                false"><img src="https://codeaprogram-portfolio.web.app/assets/avatar3.11823cb3.png" alt="..." className="h-24"/><div><p className="sm:text-base text-sm">“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”</p><br/><h6>Johnny</h6></div></div></SwiperSlide>
        </Swiper>
    )
}

export default SwiperSlider;