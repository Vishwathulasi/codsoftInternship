import React from 'react'
import { Element } from 'react-scroll'
import coding from '../../assests/coding.jpeg'
import { LinearProgress } from '@mui/material'
import './Skills.css'
const Skills = () => {
  return (
    <Element id='skills' className='skillcontainer'>
        <div className='skillcontainer__image'>
            <img src={coding} alt="" />
        </div>
        <div className='skillcontainer__text'>
            <h2>SKILLSET</h2>
            <div className='skillcontainer__skillset'>
                <h5>React</h5>
                <div className='skillcontainer__slider skillcontainer__slider1'></div>
                <LinearProgress variant='determinate' value={50}/>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>Java</h5>
                <div className='skillcontainer__slider skillcontainer__slider2'></div>
                <LinearProgress variant='determinate' value={90}/>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>DSA</h5>
                <div className='skillcontainer__slider skillcontainer__slider3'></div>
                <LinearProgress variant='determinate' value={50}/>
            </div>
            <div className='skillcontainer__skillset'>
                <h5>Problem Solving</h5>
                <div className='skillcontainer__slider skillcontainer__slider4'></div>
                <LinearProgress variant='determinate' value={55}/>
            </div>
        </div>
    </Element>
  )
}

export default Skills