import React from 'react'
import "./Heading.css"

const Heading = ({heading,subheading}) => {
  return (
    <div>
      <h2 className='heading-h2'>{heading}</h2>
      <p className='heading-p'>{subheading}</p>
    </div>
  )
}

export default Heading
