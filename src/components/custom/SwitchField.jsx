import React from 'react'
import PropTypes from 'prop-types'

const SwitchField = ({ value, setValue, options, size }) => {
  const widthSize = {
    large: 'w-32 md:w-36',
    small: 'w-16 md:w-20',
  }
  return (
    <div className="flex items-center justify-center my-3 md:my-5">
      <div className="flex items-center bg-gray-200 rounded-full p-1 md:p-2">
        {options.map((option) => {
          return (
            <button
              type="button"
              key={option.id}
              className={`rounded-3xl h-9 md:h-10 ${
                widthSize[size]
              } flex items-center justify-center cursor-pointer first:mr-2 ${
                value === option.id
                  ? 'bg-white'
                  : 'bg-transparent hover:bg-gray-200'
              }`}
              onClick={() => {
                setValue(option.id)
              }}
            >
              <div className="text-xs md:text-sm font-medium md:font-semibold text-gray-800">
                {option.label}
              </div>
              {option.discount && (
                <div className="bg-emerald-400 text-white rounded-2xl leading-6 px-1 md:px-2 text-tiny md:text-mini font-medium md:font-semibold ml-1">
                  {option.discount}
                </div>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

SwitchField.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf({
    id: PropTypes.string,
    label: PropTypes.string,
    discount: PropTypes.string,
  }).isRequired,
  size: PropTypes.string.isRequired,
}

export default SwitchField
