import React from 'react'
import "./hero.scss"
import {motion} from "framer-motion"

const textVariants={
    initial:{
        x:-500,
        opacity: 0
    },

    animate: {
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1
        }
    },

    scrollButton:{
        opacity: 0,
        y: 1,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }
}

const slidingVariants={
    initial:{
        x:0,
        
    },

    animate: {
        x: "220%",
        
        transition:{
            repeat: Infinity,
            duration: 20,
            
        }
    },

    scrollButton:{
        opacity: 0,
        y: 1,
        transition:{
            duration: 2,
            repeatType: "mirror",
            repeat: Infinity
        }
    }
}
function Hero() {
  return (
    <div className='hero'>
        <div className='wrapper'>
            <motion.div className="textContainer" variants ={textVariants} initial="initial" animate="animate">
                <motion.h3 variants ={textVariants}>Foma Tech</motion.h3>
                <motion.h1 variants ={textVariants}>Software Developer</motion.h1>
                <motion.h3 variants ={textVariants}><u>Skills</u></motion.h3>

                <div className="skills">
                    <span>HTML</span>
                    <span>CSS & SCSS</span>
                    <span>Tailwind CSS</span>
                    <span>Javascript</span>
                    <span>React</span>
                    <span>Next Js</span>
                    <span>Node Js</span>
                    <span>MySQL</span>
                    <span>Mongodb</span>
                    <span>Wordpress</span>
                    <span>SEO</span>
                    <span>Adobe photoshop</span>
                    <span>Adobe premeire pro</span>
                   
                </div>

                <motion.div className="buttons" variants ={textVariants}>
                    <motion.button variants ={textVariants}> <a href="#Projects">Projects</a></motion.button>
                    <motion.button variants ={textVariants}> <a href="#Contact">Contact</a></motion.button>
                </motion.div>
                <motion.img src="/images/scroll.png" alt="" variants ={textVariants} animate="scrollButton"/>

            </motion.div>

        </div>

        {/* <motion.div className="slidingText" variants={slidingVariants} initial="initial" animate="animate">
            Always the best
        </motion.div> */}
        
        <div className="imageContainer">
            <img src="/images/foma.png" alt="" />
        </div>
      
    </div>
  )
}

export default Hero
