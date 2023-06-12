import React from 'react';
import c from '../Icons/icons8-c.png'
import css from '../Icons/icons8-css3.png'
import django from '../Icons/icons8-django.png'
import html from '../Icons/icons8-html.png'
import python from '../Icons/icons8-python.png'
import sql from '../Icons/icons8-sql.png'
import javascript from '../Icons/icons8-javascript.png'
import react from '../Icons/icons8-react.png'

import SkillsCard from './SkillsCard';
import '../css/skills.css'

const Skills = () => {
  return (
    <div className='w-full h-screen bg-[#0a192f] text-gray-300' name='skills'>
        <div className='max-w-[1000px] mx-auto  p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                    Skills
                </p>
                <p className='py-4 '>
                    These are the techs I've worked with
                </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 myskills-body'>
                <SkillsCard name='python' alt='python icon' image={python} />
                <SkillsCard name='django' alt='django icon' image={django} />
                <SkillsCard name='react' alt='react icon' image={react} />
                <SkillsCard name='html' alt='html icon' image={html} />
                <SkillsCard name='css' alt='css icon' image={css} />
                <SkillsCard name='javascript' alt='javascript icon' image={javascript} />
                <SkillsCard name='sql' alt='sql icon' image={sql} />
                <SkillsCard name='c' alt='c icon' image={c} />
            </div>

        </div>

    </div>
  )
}

export default Skills