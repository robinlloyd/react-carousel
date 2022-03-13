import * as styles from './styles'

const CarouselSlide = ({ children }) => {
  return (
    <div css={styles.slide}>
      {children}
    </div>
  )
}

export default CarouselSlide
