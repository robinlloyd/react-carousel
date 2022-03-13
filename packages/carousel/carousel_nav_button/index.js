import React from 'react'
import CarouselNav from '../carousel_nav'
import CarouselContext from '../carousel_context'

const CarouselNavButton = ({ children, goToSlideNumber }) => {
  const handleNavClick = (context) => {
    // context.handleStopAutoPlay()
    context.goToSlide(goToSlideNumber)
  }

  return (
    <CarouselContext.Consumer>
      {(context) => {
        return (
          <>
            <CarouselNav handleClick={() => handleNavClick(context)}>
                {children}
            </CarouselNav>
          </>
        )
      }}
    </CarouselContext.Consumer>
  )
}

export default CarouselNavButton
