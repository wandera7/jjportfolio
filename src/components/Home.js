import React ,{useEffect, useState} from 'react'
import jnew from '../assets/jnew.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll'
const Home = () => {
    const [count,setCount] = useState(0)
    const skills =["Front End", "Back End", "Full Stack"]
    useEffect(()=>{
        const newInterval = setInterval(()=>{
            setCount(count+1)
        },2000)
        return function (){
            clearInterval(newInterval);
        }
    },[count])
    console.log(skills[count])
    if (count>=3){
        setCount(0)
    }


  return (
    <div name="Home" className='flex h-screen w-full bg-gradient-to-b from-black via-black to-gray-800  '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full '>
                <h2 className='text-4xl sm:text-7xl font-bold text-white mt-10'>
                    {`I'm a ${skills[count]} Developer`}
                </h2>
                <p className='text-gray-500 text-xl py-4 max-w-md ' >
                    I have over 5 years of experience building and developing software.
                    Currently, I love to work on web applications using technologies like React,Tailwind,Ruby on Rails ,Node and SQL
                </p>
                <div>
                    <Link to='Projects' smooth duration={500} className='text-white group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Projects
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={jnew} className="rounded-2xl w mx-auto w-44 h-45 md:w-54 h-54" alt='wanderajr'/>
            </div>
        </div>
    </div>
  )
}

export default Home
