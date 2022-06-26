import React from 'react'
import { MdCheck } from 'react-icons/md'
import PropTypes from 'prop-types'

const CtaNotes = ({ color }) => {
  const textClasses = `ml-1 text-xs lg:text-sm leading-5 ${color}`
  const iconClasses = color
  return (
    <div className="flex justify-between flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0 w-full max-w-lg mx-auto">
      <div className="flex justify-start md:justify-center items-center">
        <div className="flex-shrink-0">
          <MdCheck className={iconClasses} />
        </div>
        <p className={textClasses}>Free 7-day trial</p>
      </div>
      <div className="flex justify-start md:justify-center items-center">
        <div className="flex-shrink-0">
          <MdCheck className={iconClasses} />
        </div>
        <p className={textClasses}>No payment required</p>
      </div>
      <div className="flex justify-start md:justify-center items-center">
        <div className="flex-shrink-0">
          <MdCheck className={iconClasses} />
        </div>
        <p className={textClasses}>Cancel anytime</p>
      </div>
    </div>
  )
}

CtaNotes.propTypes = {
  color: PropTypes.string,
}

CtaNotes.defaultProps = {
  color: 'text-gray-700',
}

export default CtaNotes
