import React from 'react'
import Paragraph from '../Paragraph'
import TechstackImage from '../Techstack'
import style from './style'

export default function AboutContainer() {
  return (
    <div style={style.container}>
      <h2 style={style.container_h2}>Hi there, Im Darya!</h2>

      <Paragraph />
      <TechstackImage />

      {/* <img style={style.my_stack_logo} src='' alt=''></img> */}
    </div>
  )
}
