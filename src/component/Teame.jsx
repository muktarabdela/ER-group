import React from 'react'
import image from "../assets/image.png"
import instagram from "../assets/instagram.png"
import linkedin from "../assets/linkedin.png"
import x from "../assets/x.png"
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

export const Teame = () => {
  return (
    <div className='text-center px-4 md:px-8 lg:px-16 py-[70px]'>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1
          }
        }}
        viewport={{ once: true }}
        className="mt-0 mx-0 mb-[100px]">
        <h1 className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-[#333]">
          The Team
        </h1>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] text-[#444]">
          Creative people fueled with Passion
        </p>
        <div className="h-[4px] w-[80px] sm:w-[100px] rounded-[2px] bg-blue-500 mt-[15px] mx-auto mb-0"></div>
      </motion.div>

      <div className="flex flex-col lg:flex-row justify-between items-center lg:mx-[119px]">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.96,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true }}
          className=" mb-8 lg:mb-0">
          <div className="h-[300px] w-[300px] border-none rounded-[5px] mt-0 mx-0 mb-[20px] rounded-tl-[120px] rounded-br-[120px] rounded-tr-0 rounded-bl-0 bg-[#6475EB]">
            <img className='rounded-tl-0 rounded-br-[120px] rounded-tr-0 rounded-bl-0 w-[350px]' src={image} />
          </div>
          <div className="er__team-image__first-text">
            <div className="text-[20px] font-bold text-left uppercase">
              John Anderson
            </div>
            <div className="text-left text-[rgb(76,74,74)]">
              Creative Design
            </div>
            <div className="flex">
              <div className="w-[20px] mt-[8px] mx-0 mb-0">
                <img src={instagram} />
              </div>
              <div className="w-[20px] mt-[8px] mx-0 mb-0 linkedin">
                <img src={linkedin} />
              </div>
              <div className="w-[20px] mt-[8px] mx-0 mb-0">
                <img src={x} />
              </div>
            </div>
          </div>
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
          className="mb-8 lg:mb-0">
          <div className="h-[300px] w-[300px] border-none rounded-[5px] mt-0 mx-0 mb-[20px] rounded-tl-[120px] rounded-br-[120px] rounded-tr-0 rounded-bl-0 bg-[#62D7E8]">
            <img className='rounded-tl-0 rounded-br-[120px] rounded-tr-0 rounded-bl-0 w-[350px]' src={image} />
          </div>
          <div className="">
            <div className="text-[20px] font-bold text-left uppercase">
              Tanaya Negandhi
            </div>
            <div className="text-left text-[rgb(76,74,74)]">
              Founder & Designer
            </div>
            <div className="flex">
              <div className="w-[20px] mt-[8px] mx-0 mb-0">
                <img src={instagram} />
              </div>
              <div className="w-[20px] mt-[8px] mx-0 mb-0 linkedin">
                <img src={linkedin} />
              </div>
              <div className="w-[20px] mt-[8px] mx-0 mb-0">
                <img src={x} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.96,
              ease: "easeOut"
            }
          }}
          viewport={{ once: true }}
          className=" mb-8 lg:mb-0">
          <div className="h-[300px] w-[300px] border-none rounded-[5px] mt-0 mx-0 mb-[20px] rounded-tl-[120px] rounded-br-[120px] rounded-tr-0 rounded-bl-0 bg-[#FFD84F]">
            <img className='rounded-tl-0 rounded-br-[120px] rounded-tr-0 rounded-bl-0 w-[350px]' src={image} />
          </div>
          <div className="">
            <div className="text-[20px] font-bold text-left uppercase">
              Robert Surgee
            </div>
            <div className="text-left text-[rgb(76,74,74)]">
              Designer & Programmer
            </div>
            <div className="flex">
              <div className="w-[20px] mt-[8px] mx-0 mb-0">
                <img src={instagram} />
              </div>
              <div className="w-[20px] mt-[8px] mx-[10px] mb-0 my-0">
                <img src={linkedin} />
              </div>
              <div className="w-[20px] mt-[8px] mx-0 mb-0">
                <img src={x} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Teame
