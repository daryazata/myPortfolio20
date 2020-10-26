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
import { FiLinkedin} from 'react-icons/fi';
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
          color:'white',
          textAlign:'center',
          padding:'1rem',
          fontFamily:'Caveat, cursive',
          fontSize:'1.3rem'    
          
        }}>
        
       
        <p style={{padding:'.3rem'}}> 
        <span style={{marginRight:'1rem'}}> <a  href="mailto:darya.zata@outlook.com"><AiOutlineMail style={{color:'white', fontSize:'2.3rem', cursor:'pointer'}}/></a> </span>
        <span> <a target="_blank" href="https://www.linkedin.com/in/darya-zatakova-88554119a/"><FiLinkedin style={{color:'white', fontSize:'2.2rem', cursor:'pointer'}}/></a> </span>
        
        
        </p>

        © {new Date().getFullYear()}, Darya Zatakova
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
