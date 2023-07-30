import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#00040f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About
                    </p>     
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hello, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>
                        Started carrer being a self-taught developer , With basic frontend and backend 
                        skills. Gained good knowledge of skills over the time. Mainly worked as a backend developer
                        and developed some live backend apps from scratch. Learned power of google ( when you stuck at something 😁).
                        Did R&d's😤. Faced many real world problems while developing the apps and solved them logical thinking.
                        Learned new tech stack to implement them in projects.<br/>
                        Conistantly learning new stuffs (current react) to improve myself and my skils.
                    </p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default About
