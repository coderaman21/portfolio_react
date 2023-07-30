import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='bg-[#00040f] w-full h-screen'>
      
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hello , myself</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Divyanshu Soni
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Backend developer
        </h2>
        <p className='text-[#8892b0] py-4 mx-w-[700px]'>
          I develop backend apps with Django and Django Rest Framework. I have a good knowledge of python 
          and been working with it for more than one and half year. Currently learning React to upgrade my
          skills.
        </p>
        <div>
        <Link  to="about" spy={true} smooth={true} duration={500} >
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View More
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </Link>
        </div>
      </div>      

    </div>
  )
}

export default Home