import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {actionMovieItem} = props
  const {videoUrl, thumbnailUrl} = actionMovieItem
  return (
    <>
      <Popup
        modal
        trigger={
          <div className="action-item">
            <img src={thumbnailUrl} className="action-image" alt="thumbnail" />
          </div>
        }
        className="popup-content"
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
                <ReactPlayer url={videoUrl} controls width="100%" />
              </div>
            </div>
          </>
        )}
      </Popup>
    </>
  )
}

export default MovieItem
