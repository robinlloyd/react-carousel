import React from 'react'
import CarouselNav from '../carousel_nav'
import CarouselContext from '../carousel_context'

const CarouselNavButton = ({ children, goToSlideNumber }) => {
  return (
    <CarouselContext.Consumer>
      {(context) => {
        return (
          <>
            <CarouselNav handleClick={() => context.goToSlide(goToSlideNumber)}>
                {children}
            </CarouselNav>
          </>
        )
      }}
    </CarouselContext.Consumer>
  )
}

export default CarouselNavButton
