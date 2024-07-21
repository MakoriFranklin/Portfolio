import React from 'react'
import "./toogle.scss"
import {motion} from "framer-motion"
import { IoReorderThreeSharp } from "react-icons/io5";
import { MdCancel } from "react-icons/md";

function Tooglebtn({setOpen}) {
  return (
    <div>
      <button  onClick={()=>setOpen(prev=>!prev)}>
        {open ? <IoReorderThreeSharp className='tooglebtn'/>: <MdCancel className='tooglebtn'/>}
        {/* <svg width="23" height="23" viewBox='0 0 23 23'>
          <motion.path strokeWidth="3" stroke='black' strokeLinecap='round' variants={{closed: {d: "M 2 2.5 L 20 2.5"}, open: {d: "M 3 16.5 L 17 2.5"}}}/>
          <motion.path strokeWidth="3" stroke='black' strokeLinecap='round' d="M 2 2.5 L 20 2.5"
           variants={{
            closed: {opacity: 1},
            open: {opacity: 0}
           }}
          />
          <motion.path strokeWidth="3" stroke='black' strokeLinecap='round' variants={{closed: {d: "M 2 2.5 L 20 2.5"}, open: {d: "M 3 16.5 L 17 2.5"}}}/>
        </svg> */}
      </button>
    </div>
  )
}

export default Tooglebtn
