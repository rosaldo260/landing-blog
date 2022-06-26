import React from 'react'
import {
  MdCloudDone,
  MdTextSnippet,
  MdPageview,
  MdPersonSearch,
  MdFactCheck,
  MdEdit,
  MdLocationPin,
  MdLock,
  MdScheduleSend,
  MdTimeline,
  MdNotificationsActive,
} from 'react-icons/md'
import { FaFileCsv } from 'react-icons/fa'
import FeatureListItem, {
  createFeatureItem,
} from '@components/features/FeatureListItem'
import { Config, Features } from '@constants'
import { getDayName } from '@utils'
import Typography from '@atoms/Typography'
import imgProspectMain from '@static/features/prospect-main.svg'
import imgSafetyMain from '@static/features/safety-main.svg'
import imgPersonalMain from '@static/features/personalized-main.svg'
import imgFollowMain from '@static/features/follow-main.svg'

const dayName = getDayName()

const FeatureList = () => (
  <div className="pt-20">
    <div className="mx-auto w-full text-center max-w-full md:max-w-screen-lg">
      <Typography.H2>How we help you grow using LinkedIn</Typography.H2>
      <Typography.SUBTEXT>
        From teams of 1 to 200+, {Config.NAME} scales your LinkedIn outreach.
        <br />
        Built for agencies, sales teams, and growing startups.
      </Typography.SUBTEXT>
    </div>
    {/* Prospecting */}
    <FeatureListItem
      title="Find new leads on LinkedIn"
      subtitle="Search in your target audience on LinkedIn or Sales Navigator. Add leads to your campaign or export to a CSV."
      image={imgProspectMain}
      button="LinkedIn prospecting"
      link={Features.PROSPECT.link}
      list={[
        createFeatureItem(
          1,
          'Scrape up to 2,500 leads from LinkedIn & Sales Navigator',
          MdPersonSearch
        ),
        createFeatureItem(
          2,
          'Collect LinkedIn prospects with valuable data, including name, company, job title, location, email address, and more',
          MdFactCheck
        ),
        createFeatureItem(
          3,
          'Import a custom list via Google Sheet or Export it to a CSV',
          // 'Export LinkedIn contacts to a CSV with lots of available data',
          FaFileCsv
        ),
      ]}
    />
    {/* Personalization */}
    <FeatureListItem
      title="Personalize outreach at scale"
      subtitle='Go beyond "Firstname" personalization. Add specific details to each message to make it personal and unique.'
      image={imgPersonalMain}
      reverseOrder
      button="Cold outreach platform"
      link={Features.PERSONALIZE.link}
      list={[
        createFeatureItem(
          3,
          'Preview your messages before your campaign starts',
          MdPageview
        ),
        createFeatureItem(
          1,
          <>
            Personalize your messages with smart placeholders like today&apos;s
            weekday: <span className="font-bold">Happy {dayName}</span> or
            dynamic IF/ELSE
          </>,
          MdTextSnippet
        ),
        createFeatureItem(
          2,
          'Write unique conversation openers and call-to-actions',
          MdEdit
        ),
      ]}
    />
    {/* Follow-ups */}
    <FeatureListItem
      title="Automate follow-ups"
      subtitle="Create drip campaigns with follow-ups in minutes, and reach the right people at the right time."
      image={imgFollowMain}
      button="LinkedIn outreach tool"
      link={Features.FOLLOWUP.link}
      list={[
        createFeatureItem(
          1,
          'Reach your leads during their work hours to boost replies',
          MdScheduleSend
        ),
        createFeatureItem(
          2,
          'Automatically detect when a person replies to continue the follow-up manually or return them to the sequence',
          MdNotificationsActive
        ),
        createFeatureItem(
          3,
          'Build multichannel sequences with Integrations',
          MdTimeline
        ),
      ]}
    />
    {/* Security */}
    <FeatureListItem
      title="Keep your LinkedIn account safe"
      subtitle="Get access to advanced security features to keep your account safe and prevent it from being flagged by LinkedIn."
      image={imgSafetyMain}
      reverseOrder
      button="Safe LinkedIn automation"
      link={Features.SAFETY.link}
      list={[
        createFeatureItem(
          2,
          'Get a unique IP address from your region for each account',
          MdLocationPin
        ),
        createFeatureItem(
          3,
          'Avoid getting restricted with smart limits and usage to comply with LinkedIn rules, resulting in a 0% ban rate',
          MdLock
        ),
        createFeatureItem(
          1,
          'Mimic human behavior in a cloud-based tool',
          MdCloudDone
        ),
      ]}
    />
  </div>
)

export default FeatureList
