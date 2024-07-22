import React from 'react'
import Paragraph from '../Paragraph'
import TechstackImage from '../Techstack'
import style from './style'

export default function AboutContainer(props) {
  return (
    <div style={style.container}>
      <h2 style={style.container_h2}>Hi there, I'm Darya!</h2>
      <Paragraph />
      <TechstackImage dataTechstackIcons={props.dataTechstackIcons} />
    </div>
  )
}
