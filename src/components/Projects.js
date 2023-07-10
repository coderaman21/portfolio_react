import React from 'react'
import blogs from '../assets/blogs.png'
import edues from '../assets/edues.png'
import shopee from '../assets/shopee.png'
import texutilitie from '../assets/texutilitie.png'
import jamnotes from '../assets/jam_notes.png'
import ProjectCard from './ProjectCard'
import '../css/project.css'

const Projects = () => {
    let cartdoneSummary = "An E-commerce website made with python's djangoframework.View products,chechckout them and track them with your order id and emailaddress."
    let blogsSummary = 'Django blog application with CRUD opertions using class based viwes. sign in or signup ,view profile , create post ,view post and many more.. '
    let utilSummary = 'Perform diffrent action on your text such as character count, newline remover, extra-space remover etc. written in python-django.'
    let eduesSummary = 'A static responsive web-site using html,css and javascript. '
    let jamNotesSummary = 'A FullStack website to create notes , with React as Frontend and Django as Backend . login to your account or signup for one. Create,Read,Update,Delete notes. '
    
    return (
    <div name='projects' className='w-full  bg-[#0a192f] text-gray-300'>
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

                <ProjectCard name='Jam Notes' code='https://github.com/coderaman21/jam-notes-FE' demo='https://jam-notes.netlify.app/' image={jamnotes} summary={jamNotesSummary}/>
                <ProjectCard name='Cartdone' code='https://github.com/coderaman21/Cartdone' demo='https://divyanshu21.pythonanywhere.com/' image={shopee} summary={cartdoneSummary}/>
                <ProjectCard name='Techies blogs' code='https://github.com/coderaman21/techies-blogs' demo='https://techies-blogs.vercel.app/' image={blogs}  summary={blogsSummary}/>
                <ProjectCard name='Textutilite.com' code='https://github.com/coderaman21/Textutils' demo='https://textutils-five-wine.vercel.app/' image={texutilitie}  summary={utilSummary}/>
                <ProjectCard name='Edues.in' code='https://github.com/coderaman21/Edues.in' demo='https://coderaman21.github.io/Edues.in/' image={edues}  summary={eduesSummary}/>
                            
            </div>
        </div>
    </div>
  )
}

export default Projects