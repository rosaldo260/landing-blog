import React from 'react'
import Layout from '@components/Layout'
import BottomCta from '@components/BottomCta'
import PricingBox from '@components/PricingBox'
import HelmetHelper from '@components/HelmetHelper'
import FeatureOverview from '@components/features/FeatureOverview'
import Testimonials from '@components/Testimonials'
import PopularQuestionList, {
  createQuestionItem,
} from '@components/custom/PopularQuestionList'
import { Config, Features, Routes } from '@constants'

const PricingIndex = () => {
  const triggerChat = () => {
    if (window && window.$crisp) {
      window.$crisp.push(['do', 'chat:open'])
    }
  }

  const POPULAR_QUESTION_ITEMS = [
    createQuestionItem(
      'Do you offer a free trial?',
      <>Yes. We offer a 7-day free trial with all features included.</>
    ),
    createQuestionItem(
      'Can I test all the features during the free trial?',
      `Yes, all features are included, so you can test anything you like. You'll get access to a unique IP address from your region to ensure your account security with each account.`
    ),
    createQuestionItem(
      'How do I get charged exactly?',
      <>
        <div className="mb-3">
          You start with a 7-day free trial with all features included, and you
          can cancel anytime directly from your account.
        </div>
        <div>
          Afterward, you get charged per LinkedIn account on which you run
          automation. We offer discounts for users with multiple seats.
        </div>
      </>
    ),
    createQuestionItem(
      'Will I be charged when my free trial is up?',
      <>
        <div className="mb-3">
          We ask for payment details to start your free trial as a measure to
          prevent fake accounts from abusing LinkedIn automation.
        </div>
        <div>
          We won&apos;t charge your card until the 7-day trial is over. You can
          try us out risk-free.
        </div>
      </>
    ),
    createQuestionItem(
      'What payment methods do you accept?',
      'You can purchase a monthly or annual subscription with any major credit card. All payments are securely processed by our partner, Stripe.'
    ),
    createQuestionItem(
      'Can I cancel my plan anytime?',
      `Yes, you can cancel your subscription at any time. Your card will not be charged if you decide to cancel your free trial within the 7-day trial period. You can try us out risk-free. No questions asked.`
    ),

    createQuestionItem(
      'Is it safe to use a LinkedIn Automation tool?',
      <>
        {Config.NAME} combines several security measures to ensure your account
        safety. With each account, you get a unique IP address from your region,
        cloud-based performance, smart limits, account warm-up, and usage to
        comply with LinkedIn rules resulting in a 0% ban rate.
      </>,
      Features.SAFETY.link
    ),
    createQuestionItem(
      `Can I integrate with our CRM or marketing platform?`,
      <>
        Yes, you can easily connect with the tools you already use. Connect your
        account to 3000+ web apps, including Hubspot, Pipedrive, Copper,
        Salesforce, Google Sheets through integration through Zapier, MAKE
        (Integromat), or any custom-made webhooks.
      </>,
      Routes.DOCS.INTEGRATIONS
    ),
    createQuestionItem(
      'Can I manage multiple LinkedIn accounts?',
      `Sure! You can add and manage an unlimited number of LinkedIn accounts.  You'll be able to easily switch and share resources between connected LinkedIn accounts.`
    ),
    createQuestionItem(
      'Do I need LinkedIn Premium or Sales Navigator?',
      <>
        {Config.NAME} is compatible with LinkedIn Basic, LinkedIn Premium, and
        Sales Navigator. You don&apos;t need LinkedIn Premium or Sales Navigator
        to use {Config.NAME}.
      </>
    ),
    createQuestionItem(
      'How can I get in touch with Sales or Support?',
      <>
        We will be happy to answer your question via{' '}
        <button
          className="text-link hover:underline"
          type="button"
          onClick={triggerChat}
        >
          Live chat
        </button>{' '}
        or at{' '}
        <a
          className="text-link hover:underline"
          href={`mailto:${Config.EMAIL}?subject=Question%20about%20${Config.NAME}&body=`}
        >
          {Config.EMAIL}
        </a>
        .
      </>
    ),
    createQuestionItem(
      'How can I book a demo?',
      <>
        You can schedule a live demo at{' '}
        <a
          rel="noopenner noreferrer nofollow"
          target="_blank"
          href={Routes.CALENDY}
          className="text-link hover:underline"
        >
          Demo with Matt
        </a>
        .
      </>
    ),
  ]

  return (
    <Layout>
      <HelmetHelper
        title={`Plans & Pricing - ${Config.NAME}`}
        description={`${Config.NAME} offers All-in-one subscription package with all features included. Don't forget to save 20% on annual billing.`}
      />

      <PricingBox />
      <FeatureOverview />
      <Testimonials title="Don't just take our word for it" />
      <BottomCta />
      <PopularQuestionList list={POPULAR_QUESTION_ITEMS} />
    </Layout>
  )
}

export default PricingIndex
