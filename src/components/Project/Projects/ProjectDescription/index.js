import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './style'
import { BsBraces } from 'react-icons/bs';

const ProjectDescription = ({ project }) =>{
  console.log(project)
  return (
 
    <div className="project" style={style.project} >
        <h2>{`${project?.title}:`}</h2>
        <p>{project?.description}</p>
        <h3> Lets go for a <BsBraces />? </h3>
        <button style={style.button_demo}>Live Demo</button>
        <button style={style.button_demo}>Source</button>
    </div>
)} 


ProjectDescription.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectDescription.defaultProps = {
  siteTitle: ``,
}

export default ProjectDescription
