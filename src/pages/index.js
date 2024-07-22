import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import About from '../components/About'
import MyHeader from '../components/Header/index'
import ProjectMain from '../components/Project/ProjectMain'

import { graphql, useStaticQuery } from 'gatsby'

const IndexPage = () => {
  const dataTechstackIcons = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg|jpeg|png|svg|gif)/" }
          relativeDirectory: { eq: "techstack_icons" }
        }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
            publicURL
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />

      <MyHeader />
      <About dataTechstackIcons={dataTechstackIcons} />
      <ProjectMain dataTechstackIcons={dataTechstackIcons} />
    </Layout>
  )
}

export default IndexPage
