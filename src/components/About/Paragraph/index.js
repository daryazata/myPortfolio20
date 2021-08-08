import React from 'react'
import about_me from '../../../data/about_me'

export default function Paragraph() {
  const checkForLink = key => {
    const textWithoutLink = about_me[key].desc.split(about_me[key].linkText)

    return (
      <>
        {textWithoutLink[0]}
        <a target="_blank" href={about_me[key].link}>
          {about_me[key].linkText}
        </a>
        {textWithoutLink[1]}
      </>
    )
  }
  const paragraph_list = Object.keys(about_me).map((key, index) => (
    <p
      style={{
        fontFamily: 'Caveat, cursive',
        fontSize: '1.36rem',
      }}
      key={index}
    >
      {checkForLink(key)}
    </p>
  ))
  return (
    <>
      <div>{paragraph_list}</div>
    </>
  )
}
