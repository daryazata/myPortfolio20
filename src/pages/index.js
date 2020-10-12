import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.css'

import ProjectMain from "../components/Project/ProjectMain"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <header className="header">
      <div className="header__info">
          
          <h1 className="header__info_h1">Hi, I'm Darya</h1>
          <p>I'm a Fullstack Developer who loves to work with JavaScript  </p>

        </div>    
      
    </header>
      <ProjectMain/>
  </Layout>
)

export default IndexPage
