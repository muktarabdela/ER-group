import React from 'react'
import about from '../assets/about.jpg'
import about1 from '../assets/about 1.jpg'
import about2 from '../assets/about 2.jpg'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const About = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 py-[50px] bg-[#f5f5f5]'>
      <div className="flex flex-col lg:flex-row justify-evenly mx-0 lg:mx-[119px] my-[50px] items-center">
        <div className="mr-0 lg:mr-[100px] items-center text-center lg:text-left mb-8 lg:mb-0">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 10 }}
            transition={{
              duration: 0.5,
              ease: "easeIn"
            }}
            viewport={{ once: true }}
            className="text-[25px] text-[rgb(0,_106,_255)]">
            Whats ER?
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeIn"
            }}
            viewport={{ once: true }}
            className="text-[30px] md:text-[40px] font-[bolder] mt-[5px] mx-[0] mb-[20px]">
            Why Join to ER
            <br />
            Social Network?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeIn"
            }}
            viewport={{ once: true }}
            className="text-[rgb(82,_79,_79)] mt-[0] mx-[0] mb-[35px]">
            Recent surveys have indicated that small businesses
            <br />
            recognise the need they have to connect with
            <br />
            consumer.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              ease: "easeIn"
            }}
            viewport={{ once: true }}
            className="font-bold mb-[30px]">
            <ul className='[list-style:inside]'>
              <li>Groups</li>
              <li>Messages</li>
              <li>Share</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.3,
            }}
            viewport={{ once: true }}
            className="border-[none] rounded-[50px] h-[60px] w-[150px] text-[#fff] bg-[rgb(0,_106,_255)] text-center pt-[12px] text-[20px] " >
            <button>
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between mx-[auto] my-[0] items-center">
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
            viewport={{ once: true }}
            className="h-[300px] lg:h-[500px] ml-[0] mr-[0] lg:mr-[20px] my-[0] rounded-[20px] mb-8 lg:mb-0">
            <img className='h-[300px] lg:h-[500px] w-full lg:w-auto ml-[0] mr-[0] lg:mr-[20px] my-[0] rounded-[20px]' src={about2} />
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
            viewport={{ once: true }}
            className="flex flex-col items-center">
            <img className="h-[200px] sm:h-[300px] w-full lg:w-auto mx-[0] my-[10px] lg:my-[20px] rounded-[20px]" src={about} />
            <img src={about1} className="h-[200px] sm:h-[300px] w-full lg:w-auto mx-[0] my-[10px] lg:my-[20px] rounded-[20px]" />
          </motion.div>
        </div>
      </div>
    </div >
  )
}

export default About
