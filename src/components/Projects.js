import React from 'react'
import blogs from '../assets/blogs.png'
import edues from '../assets/edues.png'
import shopee from '../assets/shopee.png'
import texutilitie from '../assets/texutilitie.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center p-4'>
            <div className=''>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                Projects
                </p>
                <p className='py-3'>
                    check out my recent work
                </p>
            </div>
            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* project cards */}

                <ProjectCard name='Cartdone' code='https://github.com/coderaman21/Cartdone' demo='https://divyanshu21.pythonanywhere.com/' image={shopee}/>
                <ProjectCard name='techies blogs' code='https://github.com/coderaman21/techies-blogs' demo='https://techies-blogs.vercel.app/' image={blogs}/>
                <ProjectCard name='Textutilite.com' code='https://github.com/coderaman21/Textutils' demo='https://textutils-five-wine.vercel.app/' image={texutilitie}/>
                <ProjectCard name='Edues.in' code='https://github.com/coderaman21/Edues.in' demo='https://coderaman21.github.io/Edues.in/' image={edues}/>
            </div>
        </div>
    </div>
  )
}

export default Projects