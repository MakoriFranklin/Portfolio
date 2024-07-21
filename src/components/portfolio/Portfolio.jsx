import React, { useRef } from 'react'
import "./portfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion" 

const items = [
    {
        id: 1,
        title:"Ecommerce",
        img:"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae sit assumenda repellendus?"
        
    },

    {
        id: 2,
        title:"Facebook clone",
        img:"https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae sit assumenda repellendus?"
        
    },

    {
        id: 3,
        title:"Rock paper scissor",
        img:"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae sit assumenda repellendus?"
        
    },

    {
        id: 4,
        title:"Ecommerce",
        img:"https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae beatae sit assumenda repellendus?"
        
    }
];

const Single = ({item})=>{

    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref, });
    // offset:["start start", "end start"]

    const y = useTransform(scrollYProgress, [0,1], [-1000, 1000])
    return (

        <section>
            <div className="container">

                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                </motion.div>
                </div>
                
            </div>
        </section>
    )
}
function Portfolio() {
    const ref = useRef()
    const {scrollYProgress} = useScroll({target:ref,offset:["end end", "start start"]});
    const scaleX = useSpring(scrollYProgress,{stiffness: 100, damping: 30, })
  return (
    <div className='portfolio' ref = {ref}>
        <div className="progress">
            <h1 id='Projects'>Featured Works</h1>
            <motion.div style = {{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
      
    </div>
  )
}

export default Portfolio
