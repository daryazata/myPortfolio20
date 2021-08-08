import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component'

const ImageProject = ({ imageUrl }) => {
  return (
    <div>
      <LazyLoadImage
        // alt={image.alt}
        height={'700px'}
        src={imageUrl} // use normal <img> attributes as props
        // width={image.width}
      />
      {/* <span>{image.caption}</span> */}
    </div>
  )
}

export default ImageProject
