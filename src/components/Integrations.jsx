import React from 'react'
import img from '@static/integrations.svg'
import { Routes } from '@constants'
import FeatureListItem from '@components/features/FeatureListItem'

const Integrations = () => (
  <FeatureListItem
    title="Integrate with the tools you use"
    subtitle={
      <>
        <div className="mb-2">
          Easily connect and send your prospects&apos; data to your CRM or
          marketing platform like HubSpot, Pipedrive, or Salesforce.
        </div>
        <div>
          Connect with 3,000+ apps through Zapier, Integromat, or a custom-made
          webhook with just a few clicks.
        </div>
      </>
    }
    image={img}
    objectClasses="h-96"
    button="Learn more"
    link={Routes.DOCS.INTEGRATIONS}
  />
)

export default Integrations
