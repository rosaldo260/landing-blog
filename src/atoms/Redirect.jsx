import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { Link } from 'gatsby'

const Redirect = ({ children, href, external = false, onClick, className }) => {
  if (external && href && !onClick) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopenner nofollow"
        className={className}
      >
        {children}
      </a>
    )
  }
  if (!external && !onClick && href) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={clsx('text-left', className)}
      >
        {children}
      </button>
    )
  }

  return null
}

Redirect.propTypes = {
  href: PropTypes.string,
  external: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
}

Redirect.defaultProps = {
  href: '',
  external: false,
  onClick: undefined,
  className: '',
}

export default Redirect
