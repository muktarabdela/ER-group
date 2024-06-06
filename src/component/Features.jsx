import React from 'react'
import feature from "../assets/feautres.jpg"
import apple from "../assets/app-store.png"
import play from "../assets/google-play.png"
import arrow from "../assets/arrow.svg"
import items from "../assets/items.svg"
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const Features = () => {
    return (
        <div className='py-[50px] md:py-[100px] lg:py-[150px]'>
            <div className="flex flex-col lg:flex-row justify-between items-center mx-[20px] md:mx-[50px] lg:mx-[119px]">
                <div className="mb-[45px] lg:mb-0 lg:mr-[45px]">
                    <div className="bg-[#f5f5f5] p-[10px] md:p-[20px] rounded-[20px] md:rounded-[40px]">
                        <motion.img
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 1 }}
                            src={feature}
                            className="w-full md:w-[500px] rounded-[20px] md:rounded-[40px]" />
                    </div>
                </div>
                <div className="lg:ml-[45px] text-center lg:text-left">
                    <div>
                        <motion.h1
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 1 }}
                            className="text-[30px] md:text-[40px] lg:text-[60px] font-extrabold mb-[30px] md:mb-[50px]">
                            New candidates
                            <br />
                            automatically show up
                        </motion.h1>
                        <motion.p
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 1 }}
                            className="font-light text-[#222]">
                            When people think of hiring, they think of outdated practices, stuffy procedures, and broken norms.
                            <br />
                            <br />
                            While other hiring platforms exist to just serve the status quo, we're building something different. We know there's a better way that exists outside of what's typical.
                            <br />
                            <br />
                            When people think of hiring, they think of outdated practices, stuffy procedures, and broken norms.
                        </motion.p>
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 1 }}
                            className="mt-[30px] md:mt-[50px] flex flex-col lg:flex-row justify-between items-center">
                            <div className="text-[20px] text-[#62D9C7] font-extrabold flex items-center mb-[20px] lg:mb-0">
                                <a href="#">
                                    Learn More
                                </a>
                                <img src={arrow} className="w-[20px] pt-[4px] ml-[10px]" />
                            </div>
                            <div className="flex flex-col sm:flex-row">
                                <button className="mr-0 sm:mr-[30px] flex items-center border-none rounded-[5px] px-[15px] py-[8px] bg-[#111] text-[#f5f5f5] mb-[20px] sm:mb-0">
                                    <div className="flex flex-col text-left">
                                        <small className="text-[10px] font-light">Available on the</small>
                                        <strong>App Store</strong>
                                    </div>
                                    <img src={apple} className="w-[37px] ml-[15px]" />
                                </button>
                                <button className="flex items-center border-none rounded-[5px] px-[15px] py-[8px] bg-[#111] text-[#f5f5f5]">
                                    <div className="flex flex-col text-left">
                                        <small className="text-[10px] font-light">GET IT ON</small>
                                        <strong>Google Play</strong>
                                    </div>
                                    <img src={play} className="w-[37px] ml-[15px]" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="text-center my-[30px] md:my-[10px] -mb-[30px] md:-mb-[50px]">
                <a href="#" className="text-[20px] md:text-[30px] font-extrabold text-blue-600">
                    More Products
                    <img src={items} className="w-[30px] ml-[15px] inline-block pb-[8px]" />
                </a>
            </div>
        </div>
    )
}

export default Features
