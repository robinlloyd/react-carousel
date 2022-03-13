import { FIRST_SLIDE } from './constants'

export const getSlideToNumber = (slideNumber, lastSlide, shouldLoop) => {
  console.log('slideNumber', slideNumber)
  console.log('lastSlide', lastSlide)
  console.log('=====================')
  if (slideNumber > lastSlide) {
    console.log('go to first slide')
    return shouldLoop ? FIRST_SLIDE : lastSlide
  }

  if (slideNumber < FIRST_SLIDE) {
    console.log('go to last slide')
    return shouldLoop ? lastSlide : FIRST_SLIDE
  }

  console.log(`go to ${slideNumber}`)
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
