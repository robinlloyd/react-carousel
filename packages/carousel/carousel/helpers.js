import { FIRST_SLIDE } from './constants'

export const getSlideToNumber = (slideNumber, lastSlide, shouldLoop) => {
  if (slideNumber > lastSlide) {
    return shouldLoop ? FIRST_SLIDE : lastSlide
  }

  if (slideNumber < FIRST_SLIDE) {
    return shouldLoop ? lastSlide : FIRST_SLIDE
  }

  return slideNumber
}

export const debounce = (fn, ms) => {
  let timer
  return () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      fn.apply()
    }, ms)
  }
}
