import React from 'react'

const ProjectCard = (props) => {
  return <>
        <div className="card" >
            <div className="card-front ">
                <img src={props.image} alt="project1"/>

                <div style={{color:'#020101'}}>
                    <h6 className="text-center">{props.name}</h6>
                    <p className="text-center container"> {props.summary} </p>
                </div>
            </div>
            <div className="card-back">
                <div className="container">
                    <div  style={{margin: '30vh 0px'}}>
                        
                        <a href={props.demo} target="_blank" rel="noreferrer">
                            <h6 className="text-center">Visit Site</h6>
                        </a>
                        <a href={props.code} target="_blank" rel="noreferrer">
                            <h6 className="text-center">View code</h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* grid item */}
        {/* <div style={{backgroundImage:`url(${props.image})`}}
            classNameName='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
        > */}
            {/* hover effects */}
            {/* <div classNameName='opacity-0 group-hover:opacity-100'>
                <span classNameName='text-2xl font-bold text-white tracking-wider'>
                    {props.name}
                </span>
                <div classNameName='pt-8 text-center'>
                    <a href={props.code} target="_blank" rel="noreferrer">
                        <button classNameName='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Code
                        </button>
                    </a>
                    <a href={props.demo} target="_blank" rel="noreferrer">
                        <button classNameName='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                            Demo
                        </button>
                    </a>
                </div>
            </div>
        </div> */}
    </>
}

export default ProjectCard