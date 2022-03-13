import { useEffect, useRef, useState } from 'react'

import CarouselContext from '../carousel_context'
import { FIRST_SLIDE } from './constants'
import { debounce, getSlideToNumber } from './helpers'

const Carousel = ({
  children,
  numberOfSlides,
  shouldLoop
}) => {
  let autoPlayInterval
  const carouselContainerRef = useRef(null)

  // TODO: Make all autoplay stuff optional!
  const [autoplayIntervalID, setAutoplayIntervalID] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [leftValue, setLeftValue] = useState(0)

  useEffect(() => {
    window?.addEventListener('resize', handleResize)
    return () => {
      window?.removeEventListener('resize', handleResize)
    }
  })

  console.log('current slide', currentSlide)

  const handleResize = () => {
    debounce(
      goToSlide(currentSlide),
      300
    )
  }

  const handleStartAutoPlay = () => {
    const intervalID = setInterval(() => {
      setCurrentSlide((slide) => slide + 1)
    }, 1000)
    setAutoplayIntervalID(intervalID)
    console.log('ID========================', intervalID)
  }

  const handleStopAutoPlay = () => {
    if (autoplayIntervalID) clearInterval(autoplayIntervalID)
  }

  // TODO: Look up useCallback hook
  const goToSlide = (slideNumber) => {
    console.log('slide to...', slideNumber)
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

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentSlide((slide) => slide + 1)
    }, 1000)
    setAutoplayIntervalID(intervalID)
    return () => clearInterval(intervalID)
  }, [])

  console.log('init ID', autoplayIntervalID)

  useEffect(() => {
    goToSlide(currentSlide)
  }, [currentSlide]) // TODO: Ask jordan about what to do about this?...useCallback??

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
      <div
        ref={carouselContainerRef}
        onMouseEnter={handleStopAutoPlay}
        onMouseLeave={handleStartAutoPlay}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

Carousel.defaultProps = {
  shouldLoop: false
}

export default Carousel
