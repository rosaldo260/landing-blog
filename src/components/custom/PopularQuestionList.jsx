import React from 'react'
import PropTypes from 'prop-types'
import { RiArrowRightLine } from 'react-icons/ri'
import { Config } from '@constants'
import Typography from '@atoms/Typography'

export const createQuestionItem = (title, subtitle, link) => ({
  title,
  subtitle,
  link,
})

const PopularQuestionListItem = ({ title, subtitle, link }) => (
  <div className="space-y-3">
    <h6 className="my-0 text-sm md:text-md font-bold text-gray-900">{title}</h6>
    <p className="text-xs md:text-sm text-gray-600">{subtitle}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noreferrer noopenner nofollow"
        className="block w-max text-gray-800 font-bold text-xs hover:underline"
      >
        <div className="flex items-center">
          <RiArrowRightLine className="text-md mr-2" />
          Learn more
        </div>
      </a>
    )}
  </div>
)

const PopularQuestionItemPropTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
}

PopularQuestionListItem.propTypes = PopularQuestionItemPropTypes

const PopularQuestionList = ({ list }) => {
  return (
    <div className="py-14 max-w-full md:max-w-screen-lg lg:max-w-screen-lg mx-auto w-full">
      <div className="mx-auto w-full text-center mb-8">
        <Typography.H2>Frequently asked questions</Typography.H2>
        <Typography.SUBTEXT>
          Decide if {Config.NAME} is right for you
        </Typography.SUBTEXT>
      </div>
      <div className="grid w-full gap-14 row-gap-14 py-5 md:py-10 grid-cols-1 sm:grid-cols-2">
        {list.map((item) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <PopularQuestionListItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

PopularQuestionList.propTypes = {
  list: PropTypes.arrayOf(PopularQuestionItemPropTypes).isRequired,
}

export default PopularQuestionList
