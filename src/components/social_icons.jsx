import React from "react";

const IconCard = (props) => {
    return (
        <div className='flex '>
            <img className='pb-6 pr-2  height' src={props.img} alt="" />
            <span className='text-gray-300 pt-4 txt-hvr'> <a href={props.link} target='_blank' rel="noreferrer">{props.title}</a> </span>  
        </div>
    )
}
export default IconCard