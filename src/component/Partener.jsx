import React from 'react'
import { motion } from 'framer-motion'
import logo1 from '../assets/about.jpg'
import logo2 from '../assets/about.jpg'
import logo3 from '../assets/about.jpg'
import logo4 from '../assets/about.jpg'
import logo5 from '../assets/about.jpg'

const logos = [logo1, logo2, logo3, logo4, logo5];

const Partener = () => {
    return (
        <div className="overflow-hidden py-8 bg-100 max-w-5xl mx-auto">
            <div className='bg-slate-100 p-10 rounded-2xl'>
                <motion.div
                    className="flex space-x-12 animate-scroll "
                    initial={{ x: '100%' }}
                    animate={{ x: '-100%' }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: 'linear'
                    }}
                >
                    {logos.map((logo, index) => (
                        <img key={index} src={logo} alt={`logo-${index}`} className="h-20 w-auto rounded-lg" />
                    ))}
                    {logos.map((logo, index) => (
                        <img key={`duplicate-${index}`} src={logo} alt={`logo-${index}`} className="h-20 w-auto rounded-lg" />
                    ))}
                </motion.div>
            </div>

        </div>
    )
}

export default Partener
