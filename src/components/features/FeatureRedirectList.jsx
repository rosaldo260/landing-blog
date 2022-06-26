import React from 'react'
import PropTypes from 'prop-types'
import {
  MdContactMail,
  MdOutgoingMail,
  MdFindInPage,
  MdLock,
} from 'react-icons/md'
import { RiArrowRightLine } from 'react-icons/ri'
import { Features } from '@constants'
import Typography from '@atoms/Typography'
import { Link } from 'gatsby'

const createFeatureRedirectItem = (title, subtitle, link, icon, color) => ({
  title,
  subtitle,
  link,
  icon,
  color,
})

const FEATURE_REDIRECT_ITEMS = [
  createFeatureRedirectItem(
    'Prospect',
    'Turn LinkedIn searches of your target audience into prospect lists with contact details.',
    Features.PROSPECT.link,
    MdFindInPage,
    'bg-red-400'
  ),
  createFeatureRedirectItem(
    'Personalize',
    'Send personalized invitations, open InMails and messages on scale without any manual work.',
    Features.PERSONALIZE.link,
    MdContactMail,
    'bg-yellow-400'
  ),
  createFeatureRedirectItem(
    'Automate',
    'Automatically send follow-ups while you sleep and wake up to an inbox flooded with replies.',
    Features.FOLLOWUP.link,
    MdOutgoingMail,
    'bg-purple-400'
  ),
  createFeatureRedirectItem(
    'Secure',
    'Keep your LinkedIn account safe and unrestricted using our advanced security.',
    Features.SAFETY.link,
    MdLock,
    'bg-emerald-400'
  ),
]

const FeatureRedirectListItem = ({
  title,
  subtitle,
  link,
  icon: Icon,
  color,
}) => (
  <Link to={link}>
    <div className="space-y-6 group">
      <div className="space-y-4">
        <div className={`${color} p-2 rounded w-max`}>
          <Icon className="w-6 h-auto text-white" />
        </div>
        <h5 className="my-0 text-base md:text-lg lg:text-2xl font-bold text-gray-800 group-hover:underline">
          {title}
        </h5>
        <p className="text-xs text-gray-600">{subtitle}</p>
      </div>
      <div className="block w-max text-gray-800 font-bold text-xs">
        <div className="flex items-center hover:underline">
          <RiArrowRightLine className="text-md mr-2" />
          Learn more
        </div>
      </div>
    </div>
  </Link>
)

FeatureRedirectListItem.propTypes = {
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

const FeatureRedirectList = () => {
  return (
    <div className="py-8 md:py-14 max-w-full md:max-w-screen-lg lg:max-w-screen-lg mx-auto w-full">
      <div className="mx-auto w-full text-center mb-8">
        <Typography.H2>Discover our solutions</Typography.H2>
        <Typography.SUBTEXT>
          All-in-one LinkedIn automation tool, built to grow your sales
          pipeline.
        </Typography.SUBTEXT>
      </div>
      <div className="grid w-full gap-14 row-gap-14 py-5 md:py-10 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURE_REDIRECT_ITEMS.map((item) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <FeatureRedirectListItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

export default FeatureRedirectList
