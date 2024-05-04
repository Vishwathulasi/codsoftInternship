import React from 'react'
import { Link } from 'react-scroll'
import './Topcontent.css'
export const Topcontent = () => {
  return (
    <div className='topcontent'>
        <div className='topcontent__container'>
            <h1>Vishwa thulasi Alagesan</h1>
            <p>Future software engineer</p>
            <a href="/">
                <button className='topcontent__downloadbutton'>Download cv</button>
            </a>
            <Link to="projects" smooth={true} duration={500}>
                <button className='topcontent__workbutton'>My work</button>
            </Link>
        </div>
    </div>
  )
}
