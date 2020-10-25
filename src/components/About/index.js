import React from 'react'
import AboutContainer from './AboutContainer'
import style from './style'
//  import './style.css'

export default function About() {
    return (
        <div   style={style.container}>
            <div style={style.container__header}>

            <h2 style={style.container__heade_h2} >{`<AboutMe/>`}</h2>

            </div>
            <AboutContainer/>

        </div>
    )
}
