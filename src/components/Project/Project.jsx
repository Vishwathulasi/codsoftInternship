import React, { useState } from 'react'
import './Project.css'
const Project = ({img,title,description}) => {
const[show1,setShow1]=useState(false);
  return (
    <a href="/">
        <div className='project' onMouseEnter={()=>setShow1(true)} onMouseLeave={()=>setShow1(false)}> 
            {
                show1 ? (
                    <div className='project__content'>
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                ) : (
                    <img src={img} alt="" />
                )
            }
            
        </div>
    </a>
  );
};

export default Project