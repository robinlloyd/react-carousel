import { css } from '@emotion/react'

export const slidesContainer = css`
  overflow: hidden;

`

export const slides = css`
  display: flex;
  transition: transform 0.3s;
`

export const slidesInline = (left) => {
  return {
    transform: `translate3d(${left}px, 0, 0)`
  }
}
