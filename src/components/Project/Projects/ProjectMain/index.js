import React from 'react'
import ProjectDescription from '../ProjectDescription'
import ProjectTechstack from '../ProjectTechstack'
import style from './style'
import './style.css'

export default function OneProjectMain(props) {
  return (
    <div className="container" style={style.container}>
      <ProjectDescription description={props.project.description} />
      <ProjectTechstack
        dataTechstackIcons={props.dataTechstackIcons}
        techstack={props.project.techstack}
      />
    </div>
  )
}
