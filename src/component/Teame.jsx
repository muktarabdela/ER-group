import React from 'react'
import "./team.css"
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
    <div className='er__team'>
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 1 }}

        className="er__team-text">
        <h1 className="er__team-text__title">
          The Team
        </h1>
        <p className="er__team-text__description">
          Creative people fueled with Passion
        </p>
        <div className="er__team-text__border"></div>
      </motion.div>

      <div className="er__team-image">
        <motion.div
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

          className="er__team-mage__first">
          <div className="er__team-image__first-image">
            <img src={image} />
          </div>
          <div className="er__team-image__first-text">
            <div className="er__team-image__first-name">
              John Anderson
            </div>
            <div className="er__team-image__first-description">
              Creative Design
            </div>
            <div className="er__team-image__first-link">
              <div className="er__team-image__links">
                <img src={instagram} />
              </div>
              <div className="er__team-image__links linkedin">
                <img src={linkedin} />
              </div>
              <div className="er__team-image__links">
                <img src={x} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.10 }}

          className="er__teamimage__second">
          <div className="er__team-image__second-image">
            <img src={image} />
          </div>
          <div className="er__team-image__second-text">
            <div className="er__team-image__second-name">
              Tanaya Negandhi
            </div>
            <div className="er__team-image__second-description">
              Founder & Designer
            </div>
            <div className="er__team-image__second-link">
              <div className="er__team-image__links">
                <img src={instagram} />
              </div>
              <div className="er__team-image__links linkedin">
                <img src={linkedin} />
              </div>
              <div className="er__team-image__links">
                <img src={x} />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
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

          className="er__team-image_third">
          <div className="er__team-image__third-image">
            <img src={image} />
          </div>
          <div className="er__team-image__third-text">
            <div className="er__team-image__third-name">
              Robert Surgee
            </div>
            <div className="er__team-image__third-description">
              Designer & Programmer
            </div>
            <div className="er__team-image__third-link">
              <div className="er__team-image__links">
                <img src={instagram} />
              </div>
              <div className="er__team-image__links linkedin">
                <img src={linkedin} />
              </div>
              <div className="er__team-image__links">
                <img src={x} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
