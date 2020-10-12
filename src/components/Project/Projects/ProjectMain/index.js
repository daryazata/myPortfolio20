import React from 'react'
import ProjectDescription from '../ProjectDescription'
import ProjectTechstack from '../ProjectTechstack'
import style from './style'

export default function OneProjectMain({project}) {
    

    return (
        <div style={style.container}>

            <ProjectDescription project={project.description} />
            <ProjectTechstack techstack={project.techstack}/>
        </div>
      
       
    )
}
