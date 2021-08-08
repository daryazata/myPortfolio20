import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
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
