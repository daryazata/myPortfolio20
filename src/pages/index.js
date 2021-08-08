import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

import ProjectMain from '../components/Project/ProjectMain'
import MyHeader from '../components/Header/index'
import About from '../components/About'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <MyHeader />
    <About />
    <ProjectMain />
  </Layout>
)

export default IndexPage
