import React from 'react'
import PropTypes from 'prop-types'

const props = {
  children: PropTypes.node.isRequired,
}

const H1 = ({ children }) => {
  return (
    <h1 className="text-4xl font-bold text-gray-900 lg:text-5xl xl:text-6xl my-0 leading-snug">
      {children}
    </h1>
  )
}

H1.propTypes = props

const H2 = ({ children, color }) => {
  return (
    <h2
      className={`my-0 mb-4 font-bold text-3xl lg:text-4xl xl:text-5xl ${color}`}
    >
      {children}
    </h2>
  )
}

H2.propTypes = {
  color: PropTypes.string,
  ...props,
}

H2.defaultProps = {
  color: 'text-gray-900',
}

const SUBHEADER = ({ children, styles, component: Component, color }) => {
  return (
    <Component
      className={`max-w-3xl mx-auto text-lg md:text-xl xl:text-1xl leading-relaxed font-normal ${styles} ${color}`}
    >
      {children}
    </Component>
  )
}

SUBHEADER.propTypes = {
  ...props,
  color: PropTypes.string,
  component: PropTypes.string,
}

SUBHEADER.defaultProps = {
  component: 'h2',
  color: 'text-gray-600',
}

const SUBTEXT = ({ children, styles, component: Component = 'p', color }) => {
  return (
    <Component
      className={`max-w-3xl mx-auto text-lg lg:text-xl leading-relaxed mb-8 font-normal ${styles} ${color}`}
    >
      {children}
    </Component>
  )
}

SUBTEXT.propTypes = {
  ...props,
  color: PropTypes.string,
  component: PropTypes.string,
}

SUBTEXT.defaultProps = {
  component: 'p',
  color: 'text-gray-600',
}

const Typography = {
  H1,
  H2,
  SUBHEADER,
  SUBTEXT,
}

export default Typography
