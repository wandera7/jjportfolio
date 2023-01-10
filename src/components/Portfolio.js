import React from 'react'
import moshopper from '../assets/portfolio/moshopper.png'
import wanderabuzz from '../assets/portfolio/wanderabuzz.png'
const Portfolio = () => {
    const projectData =[
        {
            id:1,
            source:moshopper,
            name:"MOSHOPPER",
            link:"https://www.canva.com/design/DAFQO64fpHk/UPSJOpmXnrFvSH6X0oez_g/view?utm_content=DAFQO64fpHk&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        },
        {
            id:2,
            source:wanderabuzz,
            name:"WANDERA BUZZ",
            link:"https://docs.google.com/presentation/d/19fLLQ-e3ttuRXWRn6tZrMA5EU-yEa7hALHXpR_u0Yic/edit?usp=sharing"
        }
    ]
  return (
    <div name="Projects" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-6xl font-bold inline border-b-4 border-gray-500'>Projects</p>
                <p className='py-6 text-3xl'>Check my work here</p>
            </div>
            <div className='grid sm:grid-cols-3  lg:grid-cols-3 gap-8 px-12 sm:px-0 text-center'>
            {
                projectData.map(({id,source,name,link})=>{
                    return(
                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={source} alt={name} className='rounded-md h-25 mx-auto'/>
                    <a href={link} className='m-4'>{name}</a>
                </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio
