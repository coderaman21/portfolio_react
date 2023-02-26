import React from 'react'
import circle from '../assets/circle.png'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div name='Projects' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] w-full h-full mx-auto flex flex-col justify-center p-4'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                Projects
                </p>
                <p className='py-6'>
                    check out my recent work
                </p>
            </div>
            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>

                {/* project cards */}

                <ProjectCard name='project name' code='/' demo='' image={circle}/>
                <ProjectCard name='project name' code='/' demo='' image={circle}/>
                <ProjectCard name='project name' code='/' demo='' image={circle}/>
                <ProjectCard name='project name' code='/' demo='' image={circle}/>
                <ProjectCard name='project name' code='/' demo='' image={circle}/>

            </div>
        </div>
    </div>
  )
}

export default Projects