import React from 'react'
import Layout from '@components/Layout'
import { Config, Routes } from '@constants'
import HelmetHelper from '@components/HelmetHelper'
import FeatureListItem from '@components/features/FeatureListItem'
import FeatureHeader from '@components/features/FeatureHeader'
import { getDayName } from '@utils'
import BottomCta from '@components/BottomCta'
import FeatureRedirectList from '@components/features/FeatureRedirectList'
import PopularQuestionList, {
  createQuestionItem,
} from '@components/custom/PopularQuestionList'
import Testimonials from '@components/Testimonials'
import videoPreview from '@static/features/preview.mp4'
import videoDynamic from '@static/features/dynamic.mp4'
import videoWeekday from '@static/features/weekday.mp4'
import imgPersonalize from '@static/features/personalize-1.svg'
import imgPersonalMain from '@static/features/personalized-main.svg'

const dayName = getDayName()

const POPULAR_QUESTION_ITEMS = [
  createQuestionItem(
    'How do I personalize LinkedIn outreach at scale?',
    `
  If you need an easy way to scale your personalization efforts on LinkedIn without losing that personal touch, you should try ${Config.NAME}. A LinkedIn automation tool that helps you scale your outreach activities beyond just a "Firstname" personalization.`
  ),
  createQuestionItem(
    'How do I write personalized connection requests?',
    <>
      On LinkedIn, a well-crafted personalized message can go a long way.
      However, you might find it hard to know what to write in the message box.
      We&apos;ve created LinkedIn outreach templates, so you&apos;ll always have
      the right words no matter with whom you&apos;re connecting.
    </>,
    Routes.BLOG.TEMPLATES_ARTICLE
  ),
  createQuestionItem(
    'What is the best tool for personalized LinkedIn outreach?',
    `If you need an easy-to-use yet powerful LinkedIn automation tool to personalize your outreach at scale, ${Config.NAME} is for you. ${Config.NAME} makes it easy to personalize invitations, messages, and InMails with contact information, including name, company, position, and more.`
  ),
  createQuestionItem(
    `Can I preview outreach messages before they are sent?`,
    `Yes, you can preview your personalized messages for each prospect before sending out your campaign. Simply go to your campaign and click on the Preview button inside the sequence view.`
  ),
]

const PersonalizePage = () => (
  <Layout>
    <HelmetHelper
      title={`Personalize LinkedIn outreach at scale - ${Config.NAME}`}
      description={`${Config.NAME} allows you to customize your outreach depending on who your prospects are, what they do, where are they located, and how they act inside your sales funnel.`}
    />
    <FeatureHeader
      title="Personalize outreach that gets replies at scale"
      subtitle='Go beyond "Firstname" personalization. Customize your outreach depending on who your prospects are, what they do, where they are located, and how they act inside your sales funnel.'
      image={imgPersonalMain}
      clientText="LinkedIn outreach personalization tool"
    />
    <FeatureListItem
      title="From now on, your messages will stand out in a crowd"
      subtitle={
        <>
          <div className="mb-2">
            Send personalized invitations, open InMails and, messages. Add
            profile visits to maximize getting in touch with your leads.
          </div>
          <div>
            Write your own icebreaker lines, genuine compliments, and catchy
            call-to-actions.
          </div>
        </>
      }
      image={imgPersonalize}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    <FeatureListItem
      title="Preview your message before your campaign starts"
      subtitle={
        <>
          <div className="mb-2">
            Preview mode gives you an idea of how each step of your sequence
            will seem from the perspective of your prospects.
          </div>
          <div>
            Make sure your message templates are working and all data is
            available before you start your outreach.
          </div>
        </>
      }
      reverseOrder
      video={videoPreview}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    <FeatureListItem
      title={
        <>
          Did you say smart placeholders? Happy{' '}
          <span className="text-primary-main">{dayName}!</span>
        </>
      }
      subtitle="Go the extra mile with your personalization efforts. Use clever placeholders like today's weekday to make your messages more diverse and a lot more human."
      video={videoWeekday}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />

    <FeatureListItem
      title="Build IF/ELSE template scenarios"
      subtitle="Create custom messages for each prospect with dynamic placeholders. Don't just change the name or a few lines. Use dynamic formulas to create the entire template automatically."
      video={videoDynamic}
      button="Get started"
      reverseOrder
      link={Routes.APP.USER.SIGN_UP}
    />
    <Testimonials title="LinkedIn automation tool that people trust" />
    <BottomCta
      title="Ready to start 7-days for free?"
      subtitle="Send your first personalized LinkedIn outreach sequence today."
      button="Try it free"
    />
    <PopularQuestionList list={POPULAR_QUESTION_ITEMS} />
    <FeatureRedirectList />
  </Layout>
)

export default PersonalizePage
