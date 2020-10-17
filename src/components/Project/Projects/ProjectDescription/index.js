import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import style from './style'
import { BsBraces } from 'react-icons/bs';
import Paragraph from "../../../Paragraph";

const ProjectDescription = ({  description }) =>{
  console.log(description?.description)
  return (
 
    <div className="project" style={style.project} >
        <h2>{`${description?.title}:`}</h2>
        <Paragraph text={description?.description}/>
       
       
     {description?.github && <button style={style.button_demo}> <a target="_blank" href={description?.github}>Github</a></button>} 
     {description?.live_demo && <button style={style.button_demo}> <a target="_blank" href={description?.live_demo}>Live Demo</a></button>} 
     
    </div>
)} 


ProjectDescription.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectDescription.defaultProps = {
  siteTitle: ``,
}

export default ProjectDescription
