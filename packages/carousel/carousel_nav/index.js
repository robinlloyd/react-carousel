import React from 'react'

const CarouselNav = ({ children, disabled, handleClick }) => {
  return (
    React.cloneElement(children, {
      disabled: disabled,
      onClick: handleClick
    })
  )
}

export default CarouselNav
