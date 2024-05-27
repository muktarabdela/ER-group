import React from 'react'
import './about.css'
import about from '../assets/about.jpg'
import about1 from '../assets/about 1.jpg'
import about2 from '../assets/about 2.jpg'
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

const About = () => {
  return (
    <div className='er__about'>
      <div className="er__about-sides">
        <div className="er__about-sides__left">
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}

            className="er__about-sides__left-blue">
            Whats ER?
          </motion.p>
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}

            className="er__about-sides__left-title">
            Why Join to ER
            <br />
            Social Network?
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}

            className="er__about-sides__left-description">
            Recent surveys have indicated that small businesses
            <br />
            recognise the need they have to connect with
            <br />
            consumer.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}

            className="er__about-sides__left-list">
            <ul>
              <li>Groups</li>
              <li>Messages</li>
              <li>Share</li>
            </ul>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}

            className="er__about-sides__left-btn">
            <button>
              Learn More
            </button>
          </motion.div>
        </div>
        <div className="er__about-sides__right">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}

            className="er__about-sides__right-one">
            <img src={about2} />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}

            className="er__about-sides__right-two">
            <img src={about} className="er__about-sides__right-two__img-1" />
            <img src={about1} className="er__about-sides__right-two__img-2" />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About