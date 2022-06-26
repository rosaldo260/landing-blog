import React from 'react'
import Layout from '@components/Layout'
import { Config, Features, Routes } from '@constants'
import FeatureListItem from '@components/features/FeatureListItem'
import FeatureHeader from '@components/features/FeatureHeader'
import BottomCta from '@components/BottomCta'
import HelmetHelper from '@components/HelmetHelper'
import FeatureRedirectList from '@components/features/FeatureRedirectList'
import PopularQuestionList, {
  createQuestionItem,
} from '@components/custom/PopularQuestionList'
import Testimonials from '@components/Testimonials'
import SecurityList from '@components/SecurityList'
import imgLimits from '@static/features/report-limits.svg'
import imgWarmup from '@static/features/account-warmup.svg'
import imgSafetyMain from '@static/features/safety-main.svg'
import videoProxy from '@static/features/proxy.mp4'
import videoWorkHours from '@static/features/hours.mp4'
import videoActiveTimes from '@static/features/active.mp4'

const POPULAR_QUESTION_ITEMS = [
  createQuestionItem(
    'Is it safe to use a LinkedIn Automation tool?',
    <>
      <div className="mb-3">
        {Config.NAME} combines several security measures to ensure your account
        security. With each account, you&apos;ll get access to a unique IP
        address from your region, smart limits, automatic warm-up, and usage to
        comply with LinkedIn rules resulting in a 0% ban rate.
      </div>
      <div>
        {Config.NAME} runs safely in the cloud, based on your daily work
        schedule and mimics human behavior to ensure all LinkedIn actions are
        made naturally without causing suspicion.
      </div>
    </>
  ),
  createQuestionItem(
    'How many invitations can I safely send per week?',
    <>
      <div className="mb-3">
        You can send from 100 invitations on LinkedIn per week, with some
        accounts sending 200-300 invitations per week.
      </div>
      <div>
        However, we recommend gradually scaling up your daily limit using our
        automated account warm-up and focusing on increasing your acceptance
        rate, as this is a significant factor in how many connection requests
        LinkedIn allows you to send.
      </div>
    </>
  ),
  createQuestionItem(
    `What is the safest LinkedIn automation tool?`,
    <>
      If you need an easy-to-use yet safe and powerful LinkedIn automation tool
      to outreach at scale, {Config.NAME} is for you. {Config.NAME} makes it
      seamless to run sales campaigns, personalize messages and automate
      follow-ups on LinkedIn while keeping you account safe.
    </>
  ),
  createQuestionItem(
    `How can I get more leads on LinkedIn without getting banned?`,
    <>
      <div className="mb-3">
        LinkedIn doesn&apos;t like suspicious activity and spamming people.
      </div>
      <div>
        To ensure your account is safe, you should use{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={Features.FOLLOWUP.link}
          className="text-link hover:underline"
        >
          personalized messages
        </a>
        , target the right audience, keep your acceptance rate high and use the
        safe LinkedIn automation tool like {Config.NAME}.
      </div>
    </>
  ),
  createQuestionItem(
    'Does my account connect from a unique IP address?',
    `Yes! You'll get a unique IP address from your region to ensure your account safety with each account.`
  ),
  createQuestionItem(
    `Do I need to keep my browser open for ${Config.NAME} to work?`,
    `No, you don't have to, and that's one of the most significant advantages of using ${Config.NAME} as your LinkedIn automation tool. The software runs 100% in the cloud, based on your daily work schedule.`
  ),
]

const SafetyPage = () => (
  <Layout>
    <HelmetHelper
      title={`Safely automate your LinkedIn outreach - ${Config.NAME}`}
      description={`${Config.NAME} enables you to avoid getting restricted by LinkedIn with our unique IP address from your country and usage to comply with LinkedIn rules resulting in a 0% ban rate.`}
    />
    <FeatureHeader
      title="Safely automate your LinkedIn outreach at scale"
      subtitle={`Avoid getting restricted by LinkedIn with our unique IP address from your country, smart limits, and usage to comply with LinkedIn rules resulting in a 0% ban rate. Outreach at scale with ${Config.NAME} is entirely safe and secure.`}
      image={imgSafetyMain}
      clientText="Safe LinkedIn automation software"
    />
    <SecurityList />
    <FeatureListItem
      title="Access from your unique IP address"
      subtitle="You get a unique IP address from your local region assigned to your account to ensure all LinkedIn actions are made naturally without causing suspicion."
      // image={imgIPAddress}
      video={videoProxy}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />

    <FeatureListItem
      title={`Avoid LinkedIn jail with ${Config.NAME}`}
      subtitle={
        <>
          <div className="mb-2">
            LinkedIn began experimenting with the weekly limit and most accounts
            can send from 100 invitations per week.
          </div>
          <div>
            Automatically randomize the number of invites and messages sent per
            day to comply with the LinkedIn limits.
          </div>
        </>
      }
      reverseOrder
      image={imgLimits}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />

    <FeatureListItem
      title="Automate your outreach safely with a cloud-based tool"
      subtitle="Cloud-based LinkedIn automation software is safer to use than Chrome extensions as it directly logs in to your LinkedIn account and shields you from LinkedIn detection."
      // image={imgActiveTimes}
      video={videoWorkHours}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />

    <FeatureListItem
      title="Warm-up your LinkedIn account gradually"
      subtitle="Just like athletes need to warm up before a game, your LinkedIn account needs to warm up before you start sending multiple invitations daily. Best part? It's 100% automatic."
      reverseOrder
      image={imgWarmup}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />

    <FeatureListItem
      title="Your schedule with no restrictions"
      subtitle="Contact your prospects at the right time to increase the change of the reply without staying on LinkedIn during the night. Appear human to LinkedIn while you remain in control of scheduling."
      video={videoActiveTimes}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    <Testimonials title="Reliable for outreach at scale" />
    <BottomCta
      title="Start free 7-day trial now"
      subtitle="Supercharge your outreach with the safest LinkedIn automation tool."
      button="Try safe outreach"
    />
    <PopularQuestionList list={POPULAR_QUESTION_ITEMS} />
    <FeatureRedirectList />
  </Layout>
)

export default SafetyPage
