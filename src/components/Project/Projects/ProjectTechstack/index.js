import Img from 'gatsby-image'
import React from 'react'
import techstack_all from '../../../../data/techstack'
import style from './style'
import './style.css'

export default function ProjectTechstack(props) {
  const display_techstack = props.techstack?.map((ts, index) => {
    for (const key in techstack_all) {
      if (key == ts) {
        const image = props.dataTechstackIcons.allFile.edges.find(edge =>
          edge.node.relativePath.includes(techstack_all[key]),
        )

        if (image.node.publicURL) {
          return (
            <img
              title={key}
              style={style.image_techstack}
              className={'stack_logo'}
              key={index}
              src={image.node.publicURL}
              alt={key}
            />
          )
        } else {
          return (
            <Img
              title={key}
              style={style.image_techstack}
              className={'stack_logo'}
              key={index}
              fluid={image.node.childImageSharp.fluid}
              alt={key}
            />
          )
        }
      }
    }
  })

  return <div style={style.container}>{display_techstack}</div>
}
