import React from 'react'
import Layout from '@components/Layout'
import { Routes, Config } from '@constants'
import HelmetHelper from '@components/HelmetHelper'
import FeatureListItem from '@components/features/FeatureListItem'
import FeatureHeader from '@components/features/FeatureHeader'
import BottomCta from '@components/BottomCta'
import FeatureRedirectList from '@components/features/FeatureRedirectList'
import PopularQuestionList, {
  createQuestionItem,
} from '@components/custom/PopularQuestionList'
import videoWorkHours from '@static/features/hours.mp4'
import imgAnalytics from '@static/features/analytics.svg'
import imgFollowMain from '@static/features/follow-main.svg'
import imgSequence from '@static/features/sequence.svg'
import imgDetection from '@static/features/reply-detection.svg'
import Testimonials from '@components/Testimonials'

const POPULAR_QUESTION_ITEMS = [
  createQuestionItem(
    'How do I increase reply rates on LinkedIn?',
    `${Config.NAME} is a cloud-based tool that helps you boost your replies on LinkedIn with automated sales campaigns. Set up an unlimited number of targeted follow-ups with delays, and achieve more positive responses.`
  ),
  createQuestionItem(
    `Does my campaign automatically stop when the prospect replies?`,
    `Yes, ${Config.NAME} automatically detects when a prospect in your campaign replies. You can continue the conversation manually or return the contact to the outreach sequence.`
  ),
  createQuestionItem(
    'What LinkedIn actions can I automatically send?',
    `With ${Config.NAME}, you can build a sales funnel on LinkedIn by creating a sequence of automated LinkedIn actions. You can send personalized connection requests, messages, open InMails and profile visits to maximize getting in touch with your leads.`
  ),
  createQuestionItem(
    `How do I analyze the performance of my campaigns?`,
    `${Config.NAME} allows you to access your advanced analytics page, which displays daily usage statistics, recent account activity, and a detailed report on the effectiveness of each step in your sequence.`
  ),
]

const AutomatePage = () => (
  <Layout>
    <HelmetHelper
      title={`Boost LinkedIn replies with automated follow-ups - ${Config.NAME}`}
      description="More follow-up messages mean more replies. Automatically send follow-ups while you sleep, and wake up to an inbox flooded with responses. No manual work."
    />

    <FeatureHeader
      title="Boost your replies on LinkedIn with automated follow-ups"
      subtitle="More follow-up messages mean more replies. Automatically send follow-ups while you sleep, and wake up to an inbox flooded with responses. Best part? It's 100% automated."
      image={imgFollowMain}
      clientText="Automated LinkedIn outreach"
    />
    <FeatureListItem
      title="Build a high-converting sequence"
      subtitle={
        <>
          <div className="mb-2">
            Create your sequence, add as many LinkedIn personalized actions as
            you wish, and set time delays between them.
          </div>
          <div>
            Run outreach campaigns for your 1st, 2nd, or 3rd-degree connections
            on autopilot and watch leads come to you.
          </div>
        </>
      }
      image={imgSequence}
      containerClasses="h-96 overflow-hidden"
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    <FeatureListItem
      title="Auto-detect when prospects reply"
      subtitle="Pause sending the rest of the campaign when the prospect replies. Continue the discussion manually or return them to the sequence until they're ready to convert."
      image={imgDetection}
      reverseOrder
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    <FeatureListItem
      title="Prospect on your ideal schedule"
      subtitle="Reach your prospects on autopilot during their office hours to maximize the reply. Without tedious manual work."
      video={videoWorkHours}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    <FeatureListItem
      title="Real-time campaign insights"
      subtitle={
        <>
          <div className="mb-2">
            You can see what stage each prospect is in at any time and your full
            LinkedIn engagement with them.
          </div>
          <div>
            Monitor each step of your campaign in detail and run A/B tests to
            boost your response rate.
          </div>
        </>
      }
      reverseOrder
      image={imgAnalytics}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    <Testimonials title="LinkedIn outreach on autopilot that people trust" />
    <BottomCta
      title="Ready to get more replies?"
      subtitle="Send your first LinkedIn outreach campaign today."
      button="Get started for free"
    />
    <PopularQuestionList list={POPULAR_QUESTION_ITEMS} />
    <FeatureRedirectList />
  </Layout>
)

export default AutomatePage
