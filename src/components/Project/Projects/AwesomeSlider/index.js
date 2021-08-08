import React from 'react'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import style from './style'

import ImageProject from '../ImageProject'

export default function Slider({ screenshots }) {
  const screenshots_slider = screenshots?.map(
    (screensh, index) => (
      // <div>
      <ImageProject key={index} imageUrl={screensh} />
    )
    // </div>
  )

  return (
    <div style={style.container}>
      {/* <AwesomeSlider> */}

      {screenshots_slider}
      {/* </AwesomeSlider> */}
    </div>
  )
}
