import React from 'react'
import ProjectDescription from '../ProjectDescription'
import ProjectTechstack from '../ProjectTechstack'
import style from './style'
import './style.css'

export default function OneProjectMain({project}) {
    

    return (
        <div className='container' style={style.container}>

            <ProjectDescription description={project.description} />
            <ProjectTechstack techstack={project.techstack}/>
        </div>
      
       
    )
}
