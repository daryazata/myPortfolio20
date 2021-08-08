import React from 'react'
import 'react-awesome-slider/dist/styles.css'
import style from './style'
import ImageProject from '../ImageProject'

export default function Slider({ screenshots }) {
  const screenshots_slider = screenshots?.map((screensh, index) => (
    <ImageProject key={index} imageUrl={screensh} />
  ))

  return <div style={style.container}>{screenshots_slider}</div>
}
