import { useEffect, useRef, useState } from 'react'

import CarouselContext from '../carousel_context'
import { FIRST_SLIDE } from './constants'
import { debounce, getSlideToNumber } from './helpers'

const Carousel = ({
  children,
  numberOfSlides,
  shouldLoop
}) => {
  const carouselContainerRef = useRef(null)

  const [currentSlide, setCurrentSlide] = useState(0)
  const [leftValue, setLeftValue] = useState(0)

  useEffect(() => {
    window?.addEventListener('resize', handleResize)
    return () => {
      window?.removeEventListener('resize', handleResize)
    }
  })

  const handleResize = () => {
    debounce(
      goToSlide(currentSlide),
      300
    )
  }

  const goToSlide = (slideNumber) => {
    const carouselWidth = carouselContainerRef?.current?.clientWidth
    const lastSlide = numberOfSlides - 1
    const slideToNumber = getSlideToNumber(slideNumber, lastSlide, shouldLoop)
    const newLeftValue = -(carouselWidth * slideToNumber)
    setCurrentSlide(slideToNumber)
    setLeftValue(newLeftValue)
  }

  const hasNextSlide = () => {
    return (numberOfSlides - currentSlide) - 1 > 0
  }

  const hasPreviousSlide = () => {
    return currentSlide !== FIRST_SLIDE
  }

  return (
    <CarouselContext.Provider
      value={{
        // props
        numberOfSlides,
        shouldLoop,

        // state
        currentSlide,
        leftValue,

        // functions
        goToSlide,
        hasNextSlide,
        hasPreviousSlide
      }}
    >
      <div ref={carouselContainerRef}>
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

Carousel.defaultProps = {
  shouldLoop: false
}

export default Carousel
