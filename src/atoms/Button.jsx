import React from 'react'
import PropTypes from 'prop-types'
import upperFirst from 'lodash/upperFirst'
import clsx from 'clsx'
import * as styles from './button.module.css'

const Button = ({
  children,
  // color = 'primary',
  variant = 'contained',
  size = 'small',
  className = '',
}) => (
  <div
    className={clsx(className, styles.buttonPrimary, {
      [styles.button]: true,
      [styles[`button${upperFirst(variant)}`]]: true,
      [styles[`button${upperFirst(size)}`]]: true,
    })}
  >
    {children}
  </div>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  // color: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
}

Button.defaultProps = {
  // color: 'primary',
  variant: 'contained',
  size: 'small',
  className: undefined,
}

export default Button
