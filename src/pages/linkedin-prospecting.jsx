import React from 'react'
import Layout from '@components/Layout'
import { Config, Routes } from '@constants'
import HelmetHelper from '@components/HelmetHelper'
import FeatureListItem from '@components/features/FeatureListItem'
import FeatureHeader from '@components/features/FeatureHeader'
import BottomCta from '@components/BottomCta'
import FeatureRedirectList from '@components/features/FeatureRedirectList'
import PopularQuestionList, {
  createQuestionItem,
} from '@components/custom/PopularQuestionList'
import Testimonials from '@components/Testimonials'
import imgProspectMain from '@static/features/prospect-main.svg'
import imgSalesNav from '@static/features/prospect-1.svg'
import imgIntegrations from '@static/integrations.svg'
import imgDataClean from '@static/features/data-clean.svg'
import imgGsheet from '@static/features/gsheet.mp4'

const POPULAR_QUESTION_ITEMS = [
  createQuestionItem(
    'How do I find target prospects on LinkedIn?',
    'You can use a basic LinkedIn search or advanced Sales Navigator search to find your target audience using filters such as country, industry, position, company, and more.'
  ),
  createQuestionItem(
    `Can I scrape a LinkedIn search for the outreach campaign?`,
    `Yes, simply assign leads that ${Config.NAME} collected from your search to a campaign and engage your prospects with invites to connect, messages, or profile views on autopilot.`
  ),
  createQuestionItem(
    'How do I scrape a LinkedIn basic search?',
    `${Config.NAME} is a cloud-based LinkedIn automation tool that allows you to extract and scrape up to 1,000 search results from LinkedIn basic search with ease. Simply copy-paste your search URL to ${Config.NAME} and collect your target prospects.`
  ),
  createQuestionItem(
    'How do I scrape a LinkedIn Sales Navigator search?',
    `If you need a simple yet powerful tool to extract and scrape up to 2,500 search results from LinkedIn Sales Navigator, use ${Config.NAME}. Just copy-paste the search URL from Sales Navigator to ${Config.NAME} and collect your target prospects.`
  ),
  createQuestionItem(
    `Can I export a saved list?`,
    'Yes, you can scrape saved lists and custom search results from LinkedIn Sales Navigator based on your filters. You can scrape up to 2,500 at once.'
  ),
  createQuestionItem(
    'How do I extract leads from LinkedIn?',
    `After finishing a search result scraping with ${Config.NAME}, your prospects will be available in your dashboard to sync with your CRM or any marketing platform via Zapier or MAKE (Integromat).`
  ),
]

const ProspectingPage = () => (
  <Layout>
    <HelmetHelper
      title={`Find leads on LinkedIn & Sales Navigator - ${Config.NAME}`}
      description={`${Config.NAME} lets you to find leads on LinkedIn & Sales Navigator in bulk and outputs clean data for outreach or export in seconds.`}
    />
    <FeatureHeader
      title="Find prospects on LinkedIn & Sales Navigator"
      subtitle="Collect LinkedIn prospects and find their valuable data at scale. Just connect your LinkedIn account and start generating highly-targeted leads."
      image={imgProspectMain}
      clientText="LinkedIn prospecting platform"
    />
    <FeatureListItem
      title="Real-time prospecting on LinkedIn"
      subtitle={
        <>
          <div className="mb-2">
            Convert any LinkedIn search, Sales Navigator search, or a saved list
            into an outreach list. Whether you&apos;re doing cold outreach or
            recruiting - {Config.NAME} is there to help you.
          </div>
          <div>Best part? Collect up to 2,500 prospects in one click.</div>
        </>
      }
      image={imgSalesNav}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    <FeatureListItem
      title="Import leads from a Google Sheet"
      subtitle="Already have a list of leads with their details? Simply import your custom list of leads from Google Sheet and personalize your messages using their data."
      video={imgGsheet}
      reverseOrder
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    <FeatureListItem
      title="Clean data, free of garbage"
      subtitle="Our AI cleans up your data, removing prefixes, suffixes, and emojis, so you don't have to. You won't have to worry about your message appearing to be sent by a robot"
      image={imgDataClean}
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    <FeatureListItem
      title="Sync prospects to your CRM"
      subtitle={
        <>
          <div className="mb-2">
            Manually syncing contacts from LinkedIn into your CRM as campaign
            runs can be monotonous and time-consuming.
          </div>
          <div>
            Connect with 3,000+ apps like HubSpot, Pipedrive, or Salesforce
            through Zapier with just a few clicks.
          </div>
        </>
      }
      reverseOrder
      image={imgIntegrations}
      objectClasses="h-96"
      button="Get started"
      link={Routes.APP.USER.SIGN_UP}
    />
    {/* <FeatureListItem
        title="Enrich prospects with no extra tool"
        subtitle={`Leverage the power of LinkedIn’s real-time data to enrich your prospects with available data including name, company, job title, email address and more. You get access to enriched contacts with each ${Config.NAME} plan.`}
        image={imgPersonalize}
        button="Get started"
        link={Routes.APP.USER.SIGN_UP}
      /> */}
    <Testimonials title="LinkedIn prospecting software trusted worldwide" />
    <BottomCta
      title="Get started for free now"
      subtitle="Find new LinkedIn prospects from LinkedIn and Sales Navigator today."
      button="Try it free"
    />
    <PopularQuestionList list={POPULAR_QUESTION_ITEMS} />
    <FeatureRedirectList />
  </Layout>
)

export default ProspectingPage
