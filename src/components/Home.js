import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>
      
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hello , myself</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Divyanshu Soni
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Backend developer
        </h2>
        <p className='text-[#8892b0] py-4 mx-w-[700px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nostrum doloribus 
          beatae enim, necessitatibus ullam magni soluta, distinctio odit, voluptates sequi illum dignissimos 
          mollitia cupiditate maiores adipisci suscipit voluptatibus reprehenderit quaerat reiciendis nisi!
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View More
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>      

    </div>
  )
}

export default Home