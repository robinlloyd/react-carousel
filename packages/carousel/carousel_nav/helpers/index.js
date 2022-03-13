export const shouldDisableNavButton = (hasUpcomingSlide, shouldLoop) => {
  return !shouldLoop && !hasUpcomingSlide()
}
