import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
const Portfolio = () => {
  return (
    <div name="Projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check my work here</p>
            </div>
            <div className='grid sm:grid-cols-3  lg:grid-cols-3 gap-8 px-12 sm:px-0'>
                <div className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={arrayDestruct} alt='im' className='rounded-md'/>
                    <div className='flex items-center justify-center'>
                        <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>Demo</button>
                        <button className='w-1/2 px-6 py-3 m-4 duration-300 hover:scale-105'>Code</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio
