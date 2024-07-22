import React from 'react'

import projects from '../../../data/projects'
import OneProjectMain from '../Projects/ProjectMain'
import style from './style'

export default function ProjectMain(props) {
  const display_projects = projects.map((project, index) => (
    <OneProjectMain
      dataTechstackIcons={props.dataTechstackIcons}
      key={index}
      project={project}
    />
  ))

  return (
    <section style={style.container}>
      <div style={style.heading}>
        <h2 style={style.heading_h2}>{`<Projects/>`}</h2>
      </div>
      {display_projects}
    </section>
  )
}
