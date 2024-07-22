import React from 'react'
import AboutContainer from './AboutContainer'
import style from './style'

export default function About(props) {
  return (
    <section style={style.container}>
      <div style={style.container__header}>
        <h2 style={style.container__heade_h2}>{`<AboutMe/>`}</h2>
      </div>
      <AboutContainer dataTechstackIcons={props.dataTechstackIcons} />
    </section>
  )
}
