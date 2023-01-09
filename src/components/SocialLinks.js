import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
const SocialLinks = () => {
    const links=[
        {
            id:1,
            child:(
                <>
                 LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/julius-wandera/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                 Github <FaLinkedin size={30}/>
                </>
            ),
            href:'https://github.com/wandera7',

        },
        {
            id:3,
            child:(
                <>
                 Mail <FaLinkedin size={30}/>
                </>
            ),
            href:'mailto:wanderajjr@gmail.com',
            style:'rounded-tr-md'
        },
        {
            id:4,
            child:(
                <>
                 Resume <FaLinkedin size={30}/>
                </>
            ),
            href:'',

        }

    ]
  return (
    <div className=' flex flex-col top-[35%] left-0 fixed'>
        <ul>
            <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                <a href='dasd' className='flex justify-between items-center w-full text-white'>
                    LinkedIn <FaLinkedin size={30}/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default SocialLinks
