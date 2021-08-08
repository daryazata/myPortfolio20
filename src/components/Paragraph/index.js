import React from 'react'

export default function Paragraph({ text }) {
  const text_display = text?.map((par, index) => {
    if (par instanceof Array) {
      const li_elem = par.map((elem, index) => (
        <li style={{ fontSize: '1.25rem' }} key={index}>
          {elem}
        </li>
      ))
      return <ul key={index * 7}>{li_elem}</ul>
    } else {
      return (
        <p
          style={{
            fontSize: '1.25rem',
          }}
          key={index}
        >
          {par}
        </p>
      )
    }
  })

  return <>{text_display}</>
}
