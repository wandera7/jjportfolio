import React from 'react'
import html from '../assets/html.png'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
const Home = () => {
  return (
    <div name="home" className='flex h-screen w-full bg-gradient-to-b from-black to-gray-800  '>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div>
                <h2>
                    I'm a Full Stack Developer
                </h2>
                <p>
                    I have over 3 years of experience building and developing software.
                    Currently, I love to work on web application using technologies like React,Tailwind,Ruby on Rails ,Node and SQL
                </p>
                <div>
                    <button >
                        Portfolio
                        <span>
                            <MdOutlineKeyboardArrowRight/>
                        </span>
                    </button>
                </div>
            </div>
            <div className='image'>
                <img src={html} alt='wanderajr'/>
            </div>
        </div>
    </div>
  )
}

export default Home
