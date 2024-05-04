import React from 'react'
import "./Navbar.css"
import {Link} from "react-scroll"
const Navbar = () => {
  return (
    <div className='header'>
        <div className='header__left'>
            <h1>Develep<span>or</span></h1>
        </div>
        <div className='header__right'>
        {/*  the name which is given in the to tag is used to move to the another html element where id is same as the name given in the Link to tag*/}
        {/* smooth is used so that the scrolling of the page mives smoothly */}
        {/* duration is used to give the time it takes to scroll in miliseconds */}
        <Link to="about" smooth={true} duration={500}>
        <h4>
            About Me
        </h4>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
        <h4>
            Skills
        </h4>
        </Link>
        <Link to="projects" smooth={true} duration={500}>
        <h4>
            Projects
        </h4>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
        <h4>
            Contact
        </h4>
        </Link>
        <h4 className='header__rightbutton'>Join with me</h4>
        </div>
    </div>
  )
}

export default Navbar