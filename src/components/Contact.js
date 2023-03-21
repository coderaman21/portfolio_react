import React from 'react'
import gmail from '../Icons/gmail-new.png'
import call from '../Icons/call.png'
import linkedin from '../Icons/linkedin.png'
import github from '../Icons/github.png'
import twitter from '../Icons/twitter.png'
import '../css/contact.css'


const Contact = () => {
    // copy to clipborad 
    function CTC(TextToCopy, btn) {
        // fetch id of element
        var id = btn.id;

        var TempText = document.createElement("input");
        TempText.value = TextToCopy;
        document.body.appendChild(TempText);
        TempText.select();

        document.execCommand("copy");
        document.body.removeChild(TempText);
        alert('Copied to clipboard ');
        
    }
  return (
    <div name='contact' className='w-full h-screen  bg-[#0a192f] flex justify-center items-center p-4'>
        <div className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 text-center'>Contact Me</p>
                <p className='text-gray-300'>Submit the form below. </p>
            </div>
            <div  className='contact-body'>
                <div className="email">
                    <img className="bounce" src={gmail} alt='gmail image'/>
                    <span id="tooltip1" data-bs-toggle="tooltip" title="click to copy"
                        onclick="CTC('amans197555@gmail.com',this)" className="copy ">amans197555@gmail.com
                    </span>
                </div>
                <div className="email">
                    <img className="bounce" src={call} alt='phone image'/>
                    <span id="tooltip2" data-bs-toggle="tooltip" title="click to copy"
                        onclick="CTC('+917372958746',this)" class="copy">+917372958746
                    </span>
                </div>
            </div>
            <div className="contact-body mt ">

                <div className="social-media text-center">
                    <img className="bounce"  src={linkedin} alt='linkedin image'/>
                    <a  href="https://www.linkedin.com/in/divyanshusoni/" target="_blank">
                        <p>Linkedin</p>
                    </a>
                </div>
                
                <div className="social-media text-center">
                    <img className="bounce" src={twitter} alt='twitter image'/>
                    <a href="https://twitter.com/amans197555" target="_blank">
                        <p>Twitter</p>
                    </a>
                </div>
                <div className="social-media text-center">
                    <img className="bounce" src={github} alt='github image'/>
                    <a  href="https://github.com/coderaman21" target="_blank">
                        <p>Github</p>
                    </a>
                </div>
              </div>
            
        </div>

    </div>
  )
}

export default Contact