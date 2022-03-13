import React from 'react'
import CarouselNav from '../carousel_nav'
import CarouselContext from '../carousel_context'
import { shouldDisableNavButton } from '../carousel_nav/helpers'
import { getPrevSlide } from './helpers'

const CarouselNavPrevious = ({ children }) => {
  return (
    <CarouselContext.Consumer>
      {(context) => {
        const {
          currentSlide,
          goToSlide,
          hasNextSlide,
          hasPreviousSlide,
          shouldLoop
        } = context
        if (!hasNextSlide() && !hasPreviousSlide()) return null

        const prevSlide = getPrevSlide(currentSlide)
        return (
          <CarouselNav
            disabled={shouldDisableNavButton(hasPreviousSlide, shouldLoop)}
            handleClick={() => goToSlide(prevSlide)}
          >
            {children}
          </CarouselNav>
        )
      }}
    </CarouselContext.Consumer>
  )
}

export default CarouselNavPrevious
