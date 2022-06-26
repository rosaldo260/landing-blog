import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const HelmetHelper = ({ children, title, description, image }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {!!image && <meta property="og:image" content={image} />}
      {!!image && <meta name="twitter:image:src" content={image} />}
      {children}
    </Helmet>
  )
}

HelmetHelper.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  children: PropTypes.node,
}

HelmetHelper.defaultProps = {
  children: undefined,
  image: '',
}

export default HelmetHelper
