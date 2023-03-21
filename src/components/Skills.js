import React from 'react';
import c from '../Icons/c.png'
import css from '../Icons/css.png'
import django from '../Icons/django.png'
import html from '../Icons/html.png'
import python from '../Icons/python.png'
import sql from '../Icons/sql.png'
import javascript from '../Icons/javascript.png'

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
                <SkillsCard name='c' alt='c icon' image={c} />
                <SkillsCard name='python' alt='circle icon' image={python} />
                <SkillsCard name='django' alt='django icon' image={django} />
                <SkillsCard name='html' alt='html icon' image={html} />
                <SkillsCard name='javascript' alt='javascript icon' image={javascript} />
                <SkillsCard name='css' alt='css icon' image={css} />
                <SkillsCard name='sql' alt='sql icon' image={sql} />
            </div>

        </div>

    </div>
  )
}

export default Skills