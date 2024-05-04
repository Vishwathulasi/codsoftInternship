import React from 'react'
import { Element } from 'react-scroll'
// import { IconButton } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Contactcontainer.css'
const Contactcontainer = () => {
  return (
   <Element className='contact' id='contact'>
        <h1>Contact</h1>
        <div className='contact__container'>
            <p>
                Email: <span>abc@gmail.com</span>
            </p>
            <p>
                GithubUsername: <span>vishwa thulasi</span>
            </p>
            <div className='contact__icons'>
                <a href="/">
                   <InstagramIcon/>
                   <FacebookIcon></FacebookIcon>
                   <LinkedInIcon/>
                </a>
            </div>
        </div>
   </Element>
  )
}

export default Contactcontainer