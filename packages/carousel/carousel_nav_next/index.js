import React from 'react'
import CarouselNav from '../carousel_nav'
import CarouselContext from '../carousel_context'
import { shouldDisableNavButton } from '../carousel_nav/helpers'
import { getNextSlide } from './helpers'

const CarouselNavNext = ({ children }) => {
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

        const nextSlide = getNextSlide(currentSlide)
        return (
          <CarouselNav
            disabled={shouldDisableNavButton(hasNextSlide, shouldLoop)}
            handleClick={() => goToSlide(nextSlide)}
          >
            {children}
          </CarouselNav>
        )
      }}
    </CarouselContext.Consumer>
  )
}

export default CarouselNavNext
