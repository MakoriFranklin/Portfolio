import React from 'react'
import {motion} from "framer-motion"
function Links() {

  const variants ={
    open:{
      transition:{
        staggerChildren: 0.1
      }
    },

    closed:{
      transition:{
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  }

  const itemVariants ={
    open:{
      y:0,
      opacity: 1,
    },

    closed:{
      y: 50,
      opacity: 0,
    }
  }

  const items = [
    "Home",
    "Services",
    "Projects",
    "Contact"
  ]
    
  
  return (
    <motion.div className='links' variants={variants}>
      {items.map((item)=>(
        <motion.a 
          href={`#${item}`} key={item} 
          variants={itemVariants} 
          whileHover={{scale: 1.2}} 
          // whileTap={{scale: 0.2}}
          >
            {item}
          </motion.a>
      ))}
    </motion.div>
  )
}

export default Links
