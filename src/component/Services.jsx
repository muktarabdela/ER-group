import React from 'react'
import image from "../assets/layered-waves-haikei.png"
import home from "../assets/home.png"
import "./service.css"
// motion
import { motion, useScroll } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const Services = () => {
    const { scrollYProgress } = useScroll();

    return (
        <div
            className='container pt-10'>
            <div className='max-w-7xl mx-auto '>
                <div className=''>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}

                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1
                            }
                        }}
                        viewport={{ once: true }}
                        className='flex justify-center text-black text-4xl font-semibold my-4'>
                        Our Services</motion.h1>

                    <div className='w-full'>
                        <img className='w-full h-[23em] rounded-2xl mt-10' src={image} alt="" />
                        <div className='lg:flex  justify-center relative bottom-[8em] ml-10 gap-10 mx-auto'>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.96,
                                        ease: "easeOut"
                                    }
                                }}
                                viewport={{ once: true }} className='shadow-md w-[20em] h-[20em] bg-white border border-gray-50 rounded-md'>
                                <div className='bg- flex justify-center  rounded-md items-center mx-auto relative bottom-6'>
                                    <svg
                                        className='bg-black p-3 rounded-md '
                                        width="71" height="71" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937"></path>
                                        <path d="m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999"></path>
                                        <path d="M18.75 8.39V3H16.5v3.234"></path>
                                    </svg>
                                </div>
                                <h2 className='text-black text-xl font-medium flex justify-center '>Mobile Development
                                </h2>
                                <p className='text-gray-500 px-8 py-6 flex items-center'>
                                    Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.
                                </p>
                                <p className='text-lg flex justify-center border-b-4 pb-1 w-[3em] mx-auto hover:cursor-pointer hover:pb-2 hover:text-blue-800'>
                                    MORE
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ scale: 0.2 }}
                                whileInView={{
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1,
                                        ease: "easeOut"
                                    }
                                }}
                                viewport={{ once: true }}

                                className='lg:my-0 my-8 shadow-md w-[20em] h-[20em] bg-white border border-gray-50 rounded-md'>
                                <div className='bg- flex justify-center  rounded-md items-center mx-auto relative bottom-6'>
                                    <svg
                                        className='bg-black p-3 rounded-md '
                                        width="71" height="71" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937"></path>
                                        <path d="m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999"></path>
                                        <path d="M18.75 8.39V3H16.5v3.234"></path>
                                    </svg>
                                </div>
                                <h2 className='text-black text-xl font-medium flex justify-center '>Mobile Development
                                </h2>
                                <p className='text-gray-500 px-8 py-6 flex items-center'>
                                    Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.
                                </p>
                                <p className='text-lg flex justify-center border-b-4 pb-1 w-[3em] mx-auto hover:cursor-pointer hover:pb-2 hover:text-blue-800'>
                                    MORE
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 100
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        duration: 0.96,
                                        ease: "easeOut"
                                    }
                                }}
                                viewport={{ once: true }} className='shadow-md w-[20em] h-[20em] bg-white border border-gray-50 rounded-md'>
                                <div className='bg- flex justify-center  rounded-md items-center mx-auto relative bottom-6'>
                                    <svg
                                        className='bg-black p-3 rounded-md '
                                        width="71" height="71" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937"></path>
                                        <path d="m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999"></path>
                                        <path d="M18.75 8.39V3H16.5v3.234"></path>
                                    </svg>
                                </div>
                                <h2 className='text-black text-xl font-medium flex justify-center '>Mobile Development
                                </h2>
                                <p className='text-gray-500 px-8 py-6 flex items-center'>
                                    Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.
                                </p>
                                <p className='text-lg flex justify-center border-b-4 pb-1 w-[3em] mx-auto hover:cursor-pointer hover:pb-2 hover:text-blue-800'>
                                    MORE
                                </p>
                            </motion.div>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Services