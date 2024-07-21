import React from 'react'
import "./navbar.scss"
import {motion} from "framer-motion"
import Sidebar from '../sidebar/Sidebar'

function Navbar() {
  return (
    <div className='navbar'>
        <Sidebar/>
      <div className="wrapper">
        <motion.span 
        
        initial={{opacity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        >Foma Tech</motion.span>

        <div className='navs'>
        <motion.a href='#Home'
        className='navIcon'
        initial={{opacity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        >Home</motion.a>

        <motion.a href='#Services'
        className='navIcon'
        initial={{opacity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        >Services</motion.a>


        <motion.a href='#Projects'
        className='navIcon'
        initial={{opacity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        >Projects</motion.a>

        <motion.a href='#Contact'
        className='navIcon'
        initial={{opacity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        >Contact</motion.a>
        </div>

        


        <motion.div 
        initial={{opacity: 0, scale: 0.5}} 
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5}}
        className='socials'>
            <a href=""><img src="/images/instagram.png" alt="" /></a>
            <a href=""><img src="/images/xx.png" alt="" /></a>
            <a href=""><img src="/images/youtube.png" alt="" /></a>
            <a href=""><img src="/images/tiktok.png" alt="" /></a>
            <a href=""><img src="/images/facebook.png" alt="" /></a>
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
