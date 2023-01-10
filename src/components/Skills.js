import React from 'react'
import { data } from './Language'
const Skills = () => {
  return (
    <div name="Skills" className='bg-gradient-to-b from-gray-800 to-black  text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col text-white justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-6xl font-bold inline p-2 border-b-4 border-gray-500'>Skills</p>
                <p className='py-6 text-3xl'>These are the technologies I work with</p>
            </div>
            <div className='grid grid-cols-2  lg:grid-cols-6 gap-8 px-12 text-center sm:px-0 '>
            {
                data.map(({id,source,name})=>{
                    return(
                <div key={id} className='shadow-md rounded-lg py-2 shadow-gray-600 '>
                    <img src={source} alt={source} className='w-20 mx-auto'/>
                    <p className='m-4 '>{name}</p>
                </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Skills
