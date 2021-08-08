import React from 'react'

import style from './style'
import projects from '../../../data/projects'
import OneProjectMain from '../Projects/ProjectMain'

export default function ProjectMain() {
  const display_projects = projects.map((project, index) => (
    <OneProjectMain key={index} project={project} />
  ))

  return (
    <section>
      <div style={style.heading}>
        <h2 style={style.heading_h2}>{`<Projects/>`}</h2>
      </div>
      <div style={style.body}>{display_projects}</div>
    </section>
  )
}
