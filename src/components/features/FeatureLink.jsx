import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Button from '@atoms/Button'

const FeatureLink = ({ children, href, external = false, size = 'medium' }) => {
  const button = (
    <Button variant="outlined" size={size}>
      {children}
    </Button>
  )

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopenner nofollow"
        className="block w-max"
      >
        {button}
      </a>
    )
  }

  return (
    <Link className="block w-max" to={href}>
      {button}
    </Link>
  )
}

FeatureLink.propTypes = {
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
  children: PropTypes.node.isRequired,
  size: PropTypes.string,
}

FeatureLink.defaultProps = {
  external: false,
  size: 'medium',
}

export default FeatureLink
