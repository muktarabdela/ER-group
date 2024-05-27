import "./hero.css"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import hero_1 from "../assets/hero_1.jpg"
import hero_2 from "../assets/hero_1.jpg"
import hero_3 from "../assets/hero_1.jpg"
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from '../variants'

const Hero = () => {
    const images = [
        hero_1,
        hero_2,
        hero_3,
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const newIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const newIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='bg-[#fbfbfb]'>
            <div className="">
                <section className=" bg-opacity-30 py-10 sm:py-16 lg:py-24">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">

                            <motion.div
                                className="card"
                                initial={{
                                    opacity: 0,
                                    // if odd index card,slide from right instead of left
                                    x: 1 % 2 === 0 ? 50 : -50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0, // Slide in to its original position
                                    transition: {
                                        duration: 1 // Animation duration
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">
                                    ER Groups  System Technology
                                </p>
                                <h1 className="mt-4 text-4xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-7xl">
                                    A company driven by
                                    providing technological solutions                                  </h1>
                                <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl pr-40">
                                    We believe in delivering life-simplifying
                                    and user-friendly financial solutions to the Ethiopian market.
                                </p>
                                <a
                                    href="#"
                                    title=""
                                    className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
                                    role="button"
                                >
                                    Join for free
                                    <svg
                                        className="w-6 h-6 ml-8 -mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </a>
                                <p className="mt-5 text-gray-600">
                                    Already joined us?{" "}
                                    <a
                                        href="#"
                                        title=""
                                        className="text-black transition-all duration-200 hover:underline"
                                    >
                                        Log in
                                    </a>
                                </p>
                            </motion.div>
                            <motion.div
                                className="card"
                                initial={{
                                    opacity: 0,
                                    // if odd index card,slide from right instead of left
                                    x: 2 % 2 === 0 ? 50 : -50
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0, // Slide in to its original position
                                    transition: {
                                        duration: 1 // Animation duration
                                    }
                                }}
                                viewport={{ once: true }}
                            >
                                <Swiper
                                    spaceBetween={30}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay, Pagination, Navigation]}
                                >
                                    <SwiperSlide>
                                        <div className='bg-black p-2 rounded-2xl'>
                                            <img className='rounded-2xl object-fill h-[35em]' src={hero_1} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-black p-2 rounded-2xl'>
                                            <img className='rounded-2xl object-fill h-[35em]' src={hero_1} alt="" />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='bg-black p-2 rounded-2xl'>
                                            <img className='rounded-2xl object-fill h-[35em]' src={hero_1} alt="" />
                                        </div>
                                    </SwiperSlide>


                                </Swiper>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Hero