import React from 'react'
import clsx from 'clsx'
import * as styles from './buttonbadge.module.css'

const ButtonBadge = () => (
  <span className={clsx(styles.badge, styles.badgeAlert)} />
)

export default ButtonBadge
