import React from 'react'
import Layout from '@components/Layout'
import FeatureList from '@components/features/FeatureList'
import Hero from '@components/Hero'
import SecurityList from '@components/SecurityList'
import BottomCta from '@components/BottomCta'
import Integrations from '@components/Integrations'
import PopularQuestionList, {
  createQuestionItem,
} from '@components/custom/PopularQuestionList'
import { Features, Config, Routes } from '@constants'
import FeatureRedirectList from '@components/features/FeatureRedirectList'
import Testimonials from '@components/Testimonials'
import MetricList from '@components/MetricList'

const POPULAR_QUESTION_ITEMS = [
  createQuestionItem(
    'Is it safe to use a LinkedIn Automation tool?',
    <>
      <div className="mb-3">
        {Config.NAME} combines several security measures and usage to comply
        with LinkedIn rules resulting in a 0% ban rate. With each account,
        you&apos;ll get access to a unique IP address from your region, smart
        limits, automatic warm-up to ensure safety.
      </div>
      <div>
        {Config.NAME} runs safely in the cloud, based on your daily work
        schedule, and mimics human behavior to ensure all LinkedIn actions are
        made naturally without causing suspicion.
      </div>
    </>,
    Features.SAFETY.link
  ),
  createQuestionItem(
    'How to get more leads using a LinkedIn Automation tool?',
    <>
      <div className="mb-3">
        You can use LinkedIn Automation tools like {Config.NAME} to outreach at
        scale and turn more prospects into leads. To begin, create a prospect
        list of people in your target audience, and add them to your automated
        campaign.
      </div>
      <div>
        A sales campaign automatically sends personalized invitations and
        follow-ups while you focus on your business. You just collect positive
        replies and save hours of manual work with LinkedIn automation.
      </div>
    </>
  ),
  createQuestionItem(
    'How many connection requests can I send per week?',
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
    `Can I integrate with our CRM or marketing platform?`,
    <>
      <div className="mb-3">
        Yes, you can easily sync data from {Config.NAME} to your CRM and push
        leads to your campaigns in {Config.NAME} via Zapier or MAKE
        (Integromat).
      </div>
      <div>
        Easily connect with tools in your existing workflow. Connect your
        account to 3000+ web apps, including Hubspot, Pipedrive, Copper,
        Salesforce, and Google Sheets through integration with just a few
        clicks.
      </div>
    </>,
    Routes.DOCS.INTEGRATIONS
  ),
  createQuestionItem(
    'Do I need LinkedIn Premium or Sales Navigator?',
    <>
      <div className="mb-3">
        {Config.NAME} is compatible with LinkedIn Basic, LinkedIn Premium, and
        Sales Navigator. You don&apos;t need LinkedIn Premium or Sales Navigator
        to use {Config.NAME}.
      </div>
      <div>
        However, you might run into a limited amount of visible search results
        if you often search using only a basic LinkedIn account.
      </div>
    </>
  ),
  createQuestionItem(
    'How do I get charged exactly?',
    <>
      <div className="mb-3">
        You start with a 7-day free trial with all features included to test the
        platform, during which you can cancel anytime directly in your account.
      </div>
      <div>
        Afterward, you get charged per LinkedIn account on which you run
        automation. Visit pricing below to learn more.
      </div>
    </>,
    Routes.PRICING
  ),
  createQuestionItem(
    'Can I manage multiple LinkedIn accounts?',
    `Sure! You can add and manage an unlimited number of LinkedIn accounts. You'll be able to easily switch and share resources between connected LinkedIn accounts.`
  ),
  createQuestionItem(
    `What companies use ${Config.NAME} for LinkedIn automation?`,
    `${Config.NAME} is trusted by Agencies, Sales teams, Growth Hackers, and growing Startups who want to personalize LinkedIn outreach at scale.`
  ),
]

const RootIndex = () => (
  <Layout>
    <div className="relative bg-white">
      <Hero />
      <MetricList />
      <FeatureList />
      <Testimonials title="You're in good company" />
      <SecurityList />
      <Integrations />
      <BottomCta />
      <PopularQuestionList list={POPULAR_QUESTION_ITEMS} />
      <FeatureRedirectList />
    </div>
  </Layout>
)

export default RootIndex
