import React from 'react'
import PropTypes from 'prop-types'
import FeatureLink from '@components/features/FeatureLink'
import BrowserBox from '../custom/BrowserBox'

export const createFeatureItem = (id, text, icon) => ({ id, text, icon })

const itemListColors = {
  0: 'bg-yellow-400',
  1: 'bg-emerald-400',
  2: 'bg-red-400',
}

const FeatureListItem = ({
  title,
  subtitle,
  button,
  link,
  image,
  objectClasses,
  element,
  video,
  reverseOrder,
  list,
}) => (
  <div className="w-full my-12 md:my-24">
    <div className="grid-cols-1 md:grid-cols-4 grid grid-flow-row gap-10 2xl:gap-20">
      <div
        className={`col-span-3 md:col-span-2 mr-0 mb-2 md:mb-0 order-last ${
          reverseOrder ? 'md:ml-2' : 'md:mr-2 md:order-first'
        }`}
      >
        <div className="flex items-center justify-center h-full">
          {!!element && element}
          {image && !video && !element && (
            <img
              src={image}
              alt={title}
              title={title}
              className={objectClasses}
            />
          )}
          {video && !element && <BrowserBox video={video} />}
        </div>
      </div>
      <div className="flex items-center justify-start col-span-3 md:col-span-2">
        <div
          className={`space-y-8 ${
            reverseOrder ? 'md:px-10' : 'md:pl-12 md:pr-8'
          }`}
        >
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800 text-2xl lg:text-3xl mb-4">
              {title}
            </h3>{' '}
            <p className="text-base md:text-base lg:text-lg leading-relaxed text-gray-600">
              {subtitle}
            </p>
          </div>
          {!!list && (
            <div className="space-y-4">
              {list.map(({ icon: Icon, text, id }, index) => (
                <div
                  className="flex items-center content-center justify-start space-x-3"
                  key={id}
                >
                  <div
                    className={`${itemListColors[index]} rounded-full list-item-icon`}
                  >
                    <Icon className="w-4 h-auto text-white" />
                  </div>
                  <div className="text-gray-600 text-md 2xl:text-base">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          )}
          <FeatureLink href={link}>{button}</FeatureLink>
        </div>
      </div>
    </div>
  </div>
)

FeatureListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  button: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
  objectClasses: PropTypes.string,
  element: PropTypes.node,
  video: PropTypes.string,
  reverseOrder: PropTypes.bool,
  list: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
  }),
}

FeatureListItem.defaultProps = {
  reverseOrder: false,
  list: undefined,
  video: undefined,
  image: undefined,
  element: undefined,
  objectClasses: undefined,
}

export default FeatureListItem
