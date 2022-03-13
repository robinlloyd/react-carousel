import CarouselContext from '../carousel_context'
import * as styles from './styles'

const CarouselSlides = ({ children }) => {
  return (
    <CarouselContext.Consumer>
      {(context) => {
        return (
          <div css={styles.slidesContainer}>
            <div
              style={styles.slidesInline(context.leftValue)}
              css={styles.slides}
            >
              {children}
            </div>
          </div>
        )
      }}
    </CarouselContext.Consumer>
  )
}

export default CarouselSlides
