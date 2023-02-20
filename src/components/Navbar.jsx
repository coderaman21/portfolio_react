import React,{useState} from 'react'
import {FaBars,FaGithub,FaTimes} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'


function Navbar() {
    const [nav,setNav] = useState(true);
    const handleClick = () => setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        {/* logo */}
        <div>

        </div>
        {/* menu */}
        <div >
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </div>
        {/* hemburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}

            <ul className={nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>Projects</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>


        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul >
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300'href="/">linkedin</a> <FaLinkedin size={30}/>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300'href="/">Github</a> <FaGithub size={30}/>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#e93636]'>
                    <a className='flex justify-between items-center w-full text-gray-300'href="/">Mail</a> <HiOutlineMail size={30}/>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#979393]'>
                    <a className='flex justify-between items-center w-full text-gray-300'href="/">Resume</a> <BsFillPersonLinesFill size={30}/>
                </li>
            </ul>

        </div>

    </div>
  )
}

export default Navbar