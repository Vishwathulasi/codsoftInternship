import React from 'react'
import { Element } from 'react-scroll'
import './Projectcontainer.css'
import Project  from '../Project/Project'
const Projectcontainer = () => {
    const client_project=[
        {
            img: "https://assets-global.website-files.com/6515a6d5f30daec433d0abe2/651716fd2b486642ab9f4cde_Tablet%202708x1598.webp",
            title:"health insurance",
            description:'website for health insurance',
        },
        {
            img: "https://ceblog.s3.amazonaws.com/wp-content/uploads/2021/03/10114044/image2-8.png",
            title:"website hosting",
            description:'A webpage for hosting your website',
        },
        {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6z_OmcDqitYv25BJaD6lHCZgfW3ty9EfLw&s",
            title:"Quick",
            description:'A website that teaches to build your website',
        },
        {
            img: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/08/Empire-Flippers-an-online-business-marketplace.webp",
            title:"empire",
            description:'online business marketplace',
        }
    ]

  return (
    <Element className='projectcontainer' id='projects'>
        <h1>Projects</h1>
        <p>Here are some projects that I have created</p>
        <div className='projectcontainer__projects'>
            {
                client_project.map((project,index)=>{
                    return (
                        <Project 
                        key={index} 
                        img={project.img} 
                        title={project.title}
                        description={project.description}/>
                    );
                })
            }
        </div>
    </Element>
  )
}

export default Projectcontainer