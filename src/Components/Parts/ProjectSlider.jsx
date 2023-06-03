import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function ProjectSlider() {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '"></span>';
        },
    };
    return (
        <>
            <Swiper
                data-aos="fade-left"
                modules={[Pagination]}
                pagination={pagination}
                className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start swiper-backface-hidden">
                <SwiperSlide className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
                    <img src="https://codeaprogram-portfolio.web.app/assets/img1.ac0453a3.png" alt="sd" />
                    <div className="flex flex-col gap-1 mt-2">
                        <h5 className="font-bold font-Poppins">CarToBike</h5>
                        <button className="font-bold text-gray self-end">READ MORE</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit">
                    <img src="https://codeaprogram-portfolio.web.app/assets/img1.ac0453a3.png" alt="sd" />
                    <div className="flex flex-col gap-1 mt-2">
                        <h5 className="font-bold font-Poppins">CarToBike</h5>
                        <button className="font-bold text-gray self-end">READ MORE</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
