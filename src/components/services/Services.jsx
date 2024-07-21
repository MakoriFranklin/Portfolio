import React, { useRef } from 'react'
import "./services.scss"
import {useInView, motion} from "framer-motion"

const variants={
    initial:{
        x:-500,
        y: 100,
        opacity: 0,
        
    },

    animate:{
        x:0,
        opacity:1,
        y:0,

        transition:{
            duration:1,
            staggerChildren: 0.1,
        }
       
    },

    
}
function Services() {
    const ref = useRef()
    const isInView = useInView(ref, {margin:"-100px"})
  return (
    <motion.div className='services' variants={variants} initial="initial"  ref ={ref} animate={"animate"}>
        <motion.div className='textContainer' variants={variants}>
        <p id='Services'>I develop high quality softwares <br /> to help your business grow.</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants} >
            <div className="title">
                <img src="/images/people.webp" alt="" />
                <h1><b>Best softwares</b> for you and <b>your</b> business</h1>
            </div>
        </motion.div>

        
       
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{backgroundColor: "lightcyan", color:"black"}}>
                <h2>Mobile Apps Development</h2>
                <img src="/images/mobile.png" alt="" />
                <p>
                    I develop high quality mobile application that can boost your business. 
                    I use modern technologies to improver user users experience. You can cleck get quote below
                    so that you can we can discuss about your project.
                </p>

                <button className='goBtn'><a href="#Contact">Get Quote</a></button>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor: "lightcyan", color:"black"}}>
                <h2>Website Development</h2>
                <img src="/images/website.png" alt="" />
                <p>
                    Having a website for your business is the best step you can make. You should get a powerful website for you to stand out.
                    This will make your business grow more than you expect. I develop very good websites
                    at affordable prices.
                </p>
                <button className='goBtn'><a href="#Contact">Get Quote</a></button>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor: "lightcyan", color:"black"}}>
                <h2>Video Editing</h2>
                <img src="/images/video.png" alt="" />
                <p>
                    Am an experienced vidieo editor. 
                    I have worked on many projects and am proud to say that I have always offered the Best.
                </p>
                <button className='goBtn'><a href="#Contact">Get Quote</a></button>
            </motion.div>

            <motion.div className="box" whileHover={{backgroundColor: "lightcyan", color:"black"}}>
                <h2>Garphics designing</h2>
                <img src="/images/graphic.png" alt="" />
                <p>
                    I also provide graphic designing to clients. Am experienced in this field. I offer 
                    services e.g poster design, logo design, company profiles, magazine design and many others.
                </p>

                <button className='goBtn'><a href="#Contact">Get Quote</a></button>
            </motion.div>

            
        </motion.div>
      
    </motion.div>
  )
}

export default Services
