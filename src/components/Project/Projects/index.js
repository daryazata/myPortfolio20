import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './style'

const Project = ({ project }) =>{
  console.log(project)
  return (
 
    <div style={style.project__card} >
        <h2>{project?.title}</h2>
        <p>{project?.description}</p>
        <a href="">Repo</a>
        <a href="">Live Demo</a>
    </div>
)} 


Project.propTypes = {
  siteTitle: PropTypes.string,
}

Project.defaultProps = {
  siteTitle: ``,
}

export default Project
