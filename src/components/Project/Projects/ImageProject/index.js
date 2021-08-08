import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const ImageProject = ({ imageUrl }) => {
  return (
    <div>
      <LazyLoadImage
        height={'700px'}
        src={imageUrl} // use normal <img> attributes as props
      />
    </div>
  )
}

export default ImageProject
