import React,{useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';

function Navbar() {
    const [nav,setNav] = useState(true);
    const handleClick = () => setNav(!nav);
  return (
    <div name='navbar' className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        {/* logo */}
        <div>

        </div>
        {/* menu */}
        <div >
            <ul className='hidden md:flex'>
                <li>
                    <Link to="home"  smooth={true}  duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link  to="about" spy={true} smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li>
                    <Link  to="skills" spy={true} smooth={true} duration={500} >
                        Skills
                    </Link>
                </li>
                <li>
                    <Link  to="projects" spy={true} smooth={true} duration={500} >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link  to="contact" spy={true} smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
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

    </div>
  )
}

export default Navbar