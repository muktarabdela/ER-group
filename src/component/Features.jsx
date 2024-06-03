import React from 'react'
import './features.css'
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
        <div className='er__features'>
            <div className="er__features-sides">
                <div className="er__features-sides__left">
                    <div className="er__features-sides__left-img">
                        <motion.img
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 1 }} src={feature} />
                    </div>
                </div>
                <div className="er__features-sides__right">
                    <div className="er__features-sides__right-text">
                        <motion.h1
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 1 }} className="er__features-sides__right-text__title">
                            New candidates
                            <br />
                            automatically show up
                        </motion.h1>
                        <motion.p
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: true, amount: 1 }} className="er__features-sides__right-text__description">
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

                            className="er__features-sides__right-text__btn">
                            <div className="er__features-sides__right-text__btn-right">
                                <a href="#">
                                    Learn More
                                </a>
                                <img src={arrow} />
                            </div>
                            <div className="er__features-sides__right-text__btn-left">
                                <button className="er__features-sides__right-text__apple">
                                    <div className="er__features-sides__right-text__apple-text">
                                        <small>Available on the</small>
                                        <strong>App Store</strong>

                                    </div>
                                    <img src={apple} />
                                </button>
                                <button className="er__features-sides__right-text__play">
                                    <div className="er__features-sides__right-text__play-text">
                                        <small>GET IT ON </small>
                                        <strong>Google Play</strong>
                                    </div>
                                    <img src={play} />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="er__features-bottom">
                <a href="#" className="er__features-bottom__text">
                    More Products
                    <img src={items} />
                </a>
            </div>
        </div>
    )
}

export default Features