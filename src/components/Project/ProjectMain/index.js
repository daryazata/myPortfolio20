import React from 'react'
import Project from '../Projects/index'
import style from './style'
import projects from '../../../data/projects'


export default function ProjectMain
() {

    const display_projects= projects.map((project, index)=>(

        <Project project={project}/>
    ))

    return (
      
        <section style={style.section} >
       
            {display_projects}
        </section>
       
    )
}
