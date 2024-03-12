import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {actionMovie} = props

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <Slider {...sliderSettings}>
        {actionMovie.map(each => (
          <MovieItem actionMovieItem={each} key={each.id} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider
