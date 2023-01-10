import bootstrap from '../assets/bootstrap.png'
import cplus from '../assets/cplus.png'
import css from '../assets/css.png'
import django from '../assets/django.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import python from '../assets/python.png'
import reactjs from '../assets/reactjs.png'
import ruby from '../assets/ruby.png'
import sql from '../assets/sql.png'
import rubyonrails from '../assets/rubyonrails.png'
import mongo from '../assets/mongo.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'



export const data =[
    {
        id:1,
        source:html,
        name:"HTML"
    },
    {
        id:2,
        source:css,
        name:"CSS"
    },
    {
        id:3,
        source:bootstrap,
        name:"Bootsrap"
    },
    {
        id:4,
        source:tailwind,
        name:"Tailwind Css"
    },
    {
        id:5,
        source:javascript,
        name:"JavaScript"
    },
    {
        id:6,
        source:reactjs,
        name:"React"
    },
    {
        id:7,
        source:node,
        name:"Node JS"
    },
    {
        id:8,
        source:python,
        name:"Python"
    },
    {
        id:9,
        source:django,
        name:"Django"
    },
    {
        id:10,
        source:ruby,
        name:"Ruby"
    },
    {
        id:11,
        source:rubyonrails,
        name:"Ruby on Rails"
    },
    {
        id:12,
        source:cplus,
        name:"C++"
    },
    {
        id:13,
        source:sql,
        name:"SQL"
    },
    {
        id:14,
        source:mongo,
        name:"Mongo DB"
    },
    {
        id:15,
        source:github,
        name:"GitHub"
    },

]

export const links=[
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
             Github <FaGithub size={30}/>
            </>
        ),
        href:'https://github.com/wandera7',

    },
    {
        id:3,
        child:(
            <>
             Mail <HiOutlineMail size={30}/>
            </>
        ),
        href:'mailto:wanderajjr@gmail.com',
    },
    {
        id:4,
        child:(
            <>
             Resume <BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:'/wandajj.pdf',
        style:'rounded-br-md',
        download:true
    }

]
