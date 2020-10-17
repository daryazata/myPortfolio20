/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { AiOutlineMail} from 'react-icons/ai';
import { Link } from "gatsby"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <div
        style={{

          display:"flex",
          flexDirection:"column",
          minHeight:"100vh"
        }}
      >
        <main 
        style={{flexGrow:1}}
        >{children}</main>
        <footer style={{
          //  marginTop: `3rem`, 
          backgroundColor:'hsl(195, 4.7%, 33.3%)',
          height:'7.5rem',
          color:'#f9df31',
          textAlign:'center',
          padding:'1rem'    
          
        }}>
          © {new Date().getFullYear()}, Darya Zatakova
       
        <p style={{padding:'.3rem'}}> <a  href="mailto:darya.zata@outlook.com"><AiOutlineMail style={{color:'white', fontSize:'2.3rem', cursor:'pointer'}}/></a> </p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
