import React from 'react'
import PropTypes from 'prop-types'
import styles from './browser.module.css'

const BrowserBox = ({ img, imgAlt, video, element }) => (
  <div className="shadow-lg rounded-b-lg">
    <div className={styles.container}>
      <div className={styles.chrome}>
        <div className={styles.chromeButtons}>
          <div className={styles.chromeButton} />
          <div className={styles.chromeButton} />
          <div className={styles.chromeButton} />
        </div>
      </div>
      {!!element && element}
      {!!img && (
        <div className={styles.imageContainer}>
          <img src={img} alt={imgAlt} title={imgAlt} />
        </div>
      )}
      <div className="p-2">
        {!!video && (
          <video loop muted autoPlay controls="">
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  </div>
)

BrowserBox.propTypes = {
  img: PropTypes.string,
  imgAlt: PropTypes.string,
  video: PropTypes.string,
  element: PropTypes.node,
}

BrowserBox.defaultProps = {
  img: undefined,
  imgAlt: undefined,
  video: undefined,
  element: undefined,
}

export default BrowserBox
