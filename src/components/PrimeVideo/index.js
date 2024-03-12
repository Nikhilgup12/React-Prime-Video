import Slider from 'react-slick'
import Popup from 'reactjs-popup'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import './index.css'

import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMovie = () => {
    const action = moviesList.filter(each => each.categoryId === 'ACTION')
    return action
  }
  const action = actionMovie()

  const comedyMovie = () => {
    const comedy = moviesList.filter(each => each.categoryId === 'COMEDY')
    return comedy
  }
  const comedy = comedyMovie()

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <>
      <div className="primevideo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          className="primevideo-image"
          alt="prime video"
        />
        <div className="action-video-container">
          <h1 className="actionMovie-heading"> Action Movie </h1>
          <div className="actionMovie-container">
            <MoviesSlider actionMovie={action} />
          </div>
          <div className="comedy-container">
            <h1 className="actionMovie-heading"> Comedy Movie </h1>
            <Slider {...sliderSettings}>
              {comedy.map(each => (
                <Popup
                  modal
                  trigger={
                    <div>
                      <img
                        src={each.thumbnailUrl}
                        className="comedy-image"
                        alt="thumbnail"
                      />
                    </div>
                  }
                >
                  {close => (
                    <>
                      <div className="video-popup-container">
                        <button data-testid="closeButton" type="button">
                          <IoMdClose
                            className="cross-icon"
                            onClick={() => close()}
                            aria-label="close"
                          />
                        </button>
                        <div className="video-container">
                          <ReactPlayer
                            url={each.videoUrl}
                            controls
                            width="100%"
                          />
                        </div>
                      </div>
                    </>
                  )}
                </Popup>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrimeVideo
