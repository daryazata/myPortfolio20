/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 * 
import { useStaticQuery, graphql } from 'gatsby'
const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
 */

import PropTypes from 'prop-types'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FiLinkedin } from 'react-icons/fi'

import './layout.css'

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <main style={{ flexGrow: 1 }}>{children}</main>
        <footer
          style={{
            backgroundColor: 'rgb(26, 59, 74, 0.6)',
            height: '7.5rem',
            color: 'white',
            textAlign: 'center',
            padding: '1rem',
            fontFamily: 'Caveat, cursive',
            fontSize: '1.28rem',
          }}
        >
          <p style={{ padding: '.3rem' }}>
            <span style={{ marginRight: '1rem' }}>
              <a href="mailto:darya.zata@gmail.com">
                <AiOutlineMail
                  style={{
                    color: 'white',
                    fontSize: '2.3rem',
                    cursor: 'pointer',
                  }}
                />
              </a>
            </span>
            <span>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/darya-zata-88554119a/"
              >
                <FiLinkedin
                  style={{
                    color: 'white',
                    fontSize: '2.2rem',
                    cursor: 'pointer',
                  }}
                />
              </a>
            </span>
          </p>
          <p>© 2020 - {new Date().getFullYear()}, Darya Zata</p>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
