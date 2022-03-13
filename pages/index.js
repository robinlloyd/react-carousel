import Carousel from '@packages/carousel/carousel'
import CarouselSlides from '@packages/carousel/carousel_slides'
import CarouselSlide from '@packages/carousel/carousel_slide'
import CarouselNavButton from '../packages/carousel/carousel_nav_button'
import CarouselNavNext from '../packages/carousel/carousel_nav_next'
import CarouselNavPrevious from '../packages/carousel/carousel_nav_previous'

export default function Home() {
  const slides = [
    { src: 'https://placeimg.com/600/300/people', url: 'https://google.com' },
    { src: 'https://placeimg.com/600/300/people/sepia', url: 'https://apple.com' },
    { src: 'https://placeimg.com/600/300/people/greyscale', url: 'https://amazon.com' }
  ]

  const renderSlides = (slide) => {
    return (
      <CarouselSlide key={slide.url}>
        <a style={{ display: 'block', lineHeight: '0' }} href={slide.url}>
          <img style={{ width: '100%' }} src={slide.src} />
        </a>
      </CarouselSlide>
    )
  }

  return (
    <div style={{ width: '60%', margin: '0 auto' }}>
      <Carousel numberOfSlides={slides.length}>
        <CarouselSlides>
          {slides?.map(renderSlides)}
        </CarouselSlides>
        <CarouselNavButton goToSlideNumber={0}>
          <button>Go to 1</button>
        </CarouselNavButton>
        <CarouselNavButton goToSlideNumber={1}>
          <button>Go to 2</button>
        </CarouselNavButton>
        <CarouselNavButton goToSlideNumber={2}>
          <button>Go to 3</button>
        </CarouselNavButton>

        <CarouselNavPrevious>
          <button>{'<<<<'}</button>
        </CarouselNavPrevious>
        <CarouselNavNext>
          <button>{'>>>>'}</button>
        </CarouselNavNext>
      </Carousel>
    </div>
  )
}
