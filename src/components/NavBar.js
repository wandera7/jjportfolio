import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll';
const NavBar = () => {
    const links=["Home","About", "Projects", "Skills" ,"Contact"];
    const [showIcon,setShowIcon] = useState(false);
  return (
    <div className='flex justify-between items-center w-full h-20 text-white px-4 bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Wanderajr</h1>
        </div>
        <ul className='hidden md:flex'>
        {
            links.map((link,index)=><li key={index} className="px-6 text-xl cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200"><Link to={link} smooth duration={500}>{link}</Link></li>)
        }
        </ul>
        <div onClick={()=>setShowIcon(!showIcon)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
           {showIcon? <FaTimes size={30}/>: <FaBars size={30}/> }
        </div>
        {
            showIcon && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
        {
            links.map((link,index)=><li key={index} className="px-4 cursor-pointer capitalize py-6 text-4xl"><Link onClick={()=>setShowIcon(!showIcon)} smooth duration={500} to={link}>{link}</Link></li>)
        }
        </ul>
            )
        }
    </div>
  )
}

export default NavBar
