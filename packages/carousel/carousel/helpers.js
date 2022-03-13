export const getLastSlide = (numberOfSlides, slidesToShow) => {
  return numberOfSlides - slidesToShow
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
