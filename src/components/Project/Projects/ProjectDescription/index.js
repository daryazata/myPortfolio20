import PropTypes from 'prop-types'
import React, { useState } from 'react'
import style from './style'
import { AiFillGithub } from 'react-icons/ai'
import { CgMediaLive } from 'react-icons/cg'
import { RiScreenshot2Line } from 'react-icons/ri'
import Paragraph from '../../../Paragraph'
import { Modal, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from '../AwesomeSlider'

const ProjectDescription = ({ description }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <div className="project" style={style.project}>
      <h2 style={style.project_h2}>{`${description?.title}:`}</h2>
      <Paragraph text={description?.description} />

      {description?.github && (
        <a
          target="_blank"
          rel="noreferrer"
          style={{ color: '#8bacbb;', marginRight: '1rem' }}
          title="github link"
          href={description?.github}
        >
          <AiFillGithub style={{ fontSize: '3rem' }} />
        </a>
      )}
      {description?.live_demo && (
        <a
          target="_blank"
          rel="noreferrer"
          style={{ color: '#8bacbb;', marginRight: '1rem' }}
          title="online demo"
          href={description?.live_demo}
        >
          <CgMediaLive style={{ fontSize: '3rem' }} />
        </a>
      )}

      {description?.screenshots && (
        <a
          style={{ color: 'tomato', marginRight: '1rem', cursor: 'pointer' }}
          title="screenshots"
          onClick={handleShow}
        >
          <RiScreenshot2Line style={{ fontSize: '3rem' }} />
        </a>
      )}

      <Modal size="xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{description?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Slider screenshots={description?.screenshots} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

ProjectDescription.propTypes = {
  siteTitle: PropTypes.string,
}

ProjectDescription.defaultProps = {
  siteTitle: ``,
}

export default ProjectDescription
