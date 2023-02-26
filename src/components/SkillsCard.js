import React from 'react'

const SkillsCard = (props) => {
  return <>
        <div className='shandow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={props.image} alt={props.alt} className='w-20 mx-auto'/>
            <p className='my-4'>{props.name}</p>
        </div>
    </>
}

export default SkillsCard