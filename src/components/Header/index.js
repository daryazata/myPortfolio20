import React from 'react'
import './index.css'

export default function MyHeader() {
  return (
    <header className="header">
      <div className="header__info">
        <h1 className="header__info_h1">Welcome to my portfolio website!</h1>
        <p>
          I'm Darya, a Full-Stack Developer from Berlin, who loves to work with
          JavaScript, it's libraries and frameworks.
        </p>
        <p className="photo__info">
          Background{' '}
          <a
            className="anchor__info"
            target="_blank"
            href="https://unsplash.com/photos/o5NY_TysZ2Q"
          >
            photo
          </a>{' '}
          by{' '}
          <a
            target="_blank"
            href="https://unsplash.com/@jaspergarrattphotography"
            className="anchor__info"
          >
            Jasper Garratt{' '}
          </a>
        </p>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  )
}
