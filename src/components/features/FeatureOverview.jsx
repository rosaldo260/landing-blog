import React from 'react'
import PropTypes from 'prop-types'
import {
  MdCheckCircle,
  MdCloudDone,
  MdGroup,
  MdSearch,
  MdLocationPin,
  MdCampaign,
  MdPersonAddAlt1,
  MdForum,
  MdAutoGraph,
  MdCallSplit,
  MdThermostatAuto,
  MdContactMail,
  MdOutlineMilitaryTech,
} from 'react-icons/md'
import { AiTwotoneApi } from 'react-icons/ai'
import { FaLinkedin } from 'react-icons/fa'
import { SiGooglesheets } from 'react-icons/si'

const FeatureItem = ({ longTitle, bg, color, icon: Icon }) => (
  <div className="mt-4 text-left">
    <div className="flex items-center space-x-4">
      <div
        className="inline-flex items-center justify-between rounded-md w-12 h-12"
        style={{ backgroundColor: bg }}
      >
        <Icon className="text-4xl w-12 h-8" style={{ color }} />
      </div>
      <div className="text-md leading-relaxed text-gray-700">{longTitle}</div>
    </div>
  </div>
)

FeatureItem.propTypes = {
  longTitle: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
}

const createFeatureData = (longTitle, bg, color, icon) => ({
  longTitle,
  bg,
  color,
  icon,
})

export const featureData = [
  createFeatureData(
    'Unlimited number of campaigns',
    '#f5eff6',
    '#a166ab',
    MdCampaign
    // MdOutgoingMail
  ),
  createFeatureData(
    'Unlimited invitations to connect',
    '#ebf5f8',
    '#3F9FB5',
    MdPersonAddAlt1
  ),
  createFeatureData(
    'Intuitive cloud-based dashboard',
    '#ecf8fe',
    '#039BE9',
    MdCloudDone
  ),
  createFeatureData(
    'Manage multiple accounts from one dashboard',
    '#f2f2fe',
    '#4E4CFA',
    MdGroup
  ),
  createFeatureData(
    'Personalized invitation requests, messages, InMails',
    '#f3f9ee',
    '#8dc559',
    MdContactMail
  ),
  createFeatureData(
    'Smart Inbox (contact info, tag, note, and reply from the app)',
    '#fdf0ee',
    '#f37055',
    MdForum
  ),
  createFeatureData(
    'LinkedIn Basic, Premium & Sales Navigator compatible',
    '#e8f6fe',
    '#0277B5',
    FaLinkedin
  ),
  createFeatureData(
    'Auto-scale invitation requests (account warm-up)',
    '#fff4f6',
    '#ff658b',
    MdThermostatAuto
  ),
  createFeatureData(
    'Unique IP address from your location',
    '#dffdf9',
    '#07b39b',
    MdLocationPin
  ),
  createFeatureData(
    'Integration via webhooks with Zapier or Integromat (2-way)',
    '#ffece5',
    '#FF4A00',
    AiTwotoneApi
  ),
  createFeatureData(
    <>
      Reply detection
      <br />
      (auto-pause sequence on reply)
    </>,
    '#edf1f7',
    '#5073b8',
    MdSearch
  ),
  createFeatureData(
    'Military-grade account security',
    '#f1f6f1',
    '#4A724A',
    MdOutlineMilitaryTech
  ),
  createFeatureData(
    'Import custom list campaigns from Google Sheet',
    '#eafbf3',
    '#189C5B',
    SiGooglesheets
  ),
  createFeatureData(
    'A/B test your outreach campaigns',
    '#fefaef',
    '#f6bd1e',
    MdCallSplit
  ),
  createFeatureData(
    'Real-time metrics and reporting',
    '#ebedf8',
    '#3F51B5',
    MdAutoGraph
  ),
]

const FeatureList = () => (
  <div className="pb-10 px-2 sm:px-6 max-w-full md:max-w-screen-lg mx-auto w-full text-center">
    <h2 className="my-0 mb-2 text-1xl sm:text-2xl font-bold text-gray-800 md:text-3xl xl:text-4xl flex items-center justify-center">
      All features included
      <MdCheckCircle className="text-emerald-400 ml-2" />
    </h2>
    <div className="grid w-full gap-7 row-gap-7 py-6 sm:grid-cols-2 lg:grid-cols-3">
      {featureData.map((item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <FeatureItem key={item.title} {...item} />
      ))}
    </div>
  </div>
)

export default FeatureList
