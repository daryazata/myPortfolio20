import Img from 'gatsby-image'
import React from 'react'
import techstack_all from '../../../data/techstack'
import './style.css'

export default function TechstackImage(props) {
  const techstack_list = Object.keys(techstack_all).map(key => {
    const image = props.dataTechstackIcons.allFile.edges.find(edge =>
      edge.node.relativePath.includes(techstack_all[key]),
    )

    return (
      <div key={crypto.randomUUID()} className="my_stack_logo_middle">
        {image.node.publicURL ? (
          <img src={image.node.publicURL} alt={key} />
        ) : (
          <Img fluid={image.node.childImageSharp.fluid} alt={key} />
        )}
      </div>
    )
  })
  return (
    <>
      <h2
        style={{
          fontFamily: 'Caveat, cursive',
          fontWeight: 'bold',
          margin: '3rem 0',
        }}
      >
        Technologies I worked with:
      </h2>
      <div className="container-images-ts">{techstack_list}</div>
    </>
  )
}
