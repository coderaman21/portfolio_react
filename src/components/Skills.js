import React from 'react';
import circle from '../assets/circle.png'
import SkillsCard from './SkillsCard';

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

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <SkillsCard name='circle' alt='circle icon' image={circle} />
                <SkillsCard name='circle' alt='circle icon' image={circle} />
                <SkillsCard name='circle' alt='circle icon' image={circle} />
                <SkillsCard name='circle' alt='circle icon' image={circle} />
                <SkillsCard name='circle' alt='circle icon' image={circle} />
            </div>

        </div>

    </div>
  )
}

export default Skills