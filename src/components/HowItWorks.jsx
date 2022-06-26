import React from 'react'
import PropTypes from 'prop-types'
import img1 from '@static/how-to/how-to-1.png'
import img2 from '@static/how-to/how-to-2.png'
import img3 from '@static/how-to/how-to-3.png'

const HowItWorksItem = ({ title, body, img }) => (
  <div>
    <img
      src={img}
      width="128"
      height="117"
      className="w-32 h-auto"
      alt={title}
      title={title}
    />
    <h5 className="text-xl font-bold text-gray-800 mb-3">{title}</h5>
    <p className="text-gray-500 text-sm leading-6">{body}</p>
  </div>
)

HowItWorksItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

const HowItWorks = () => (
  <div className="w-full max-w-xl mx-auto lg:max-w-screen-lg xl:max-w-screen-xl py-10 md:py-20 bg-white">
    <div className="text-center md:text-left">
      <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl sm:leading-10 lg:text-4xl leading-tight my-4">
        How you scale your LinkedIn Outreach
      </h2>
      <h4 className="text-base text-gray-500">
        Create your personal lead generation funnel.
      </h4>
    </div>
    <div className="mt-10 grid gap-16 row-gap-4 lg:grid-cols-3">
      <HowItWorksItem
        title="Find prospects on LinkedIn"
        body="Use basic LinkedIn search and Sales Navigator search to find leads on LinkedIn, or simply import them from the Google Sheet."
        img={img1}
      />
      <HowItWorksItem
        title="Run outreach campaign"
        body="Create an outreach sequence of automated LinkedIn actions with delays to engage your prospects with invites to connect, messages, or profile views."
        img={img2}
      />
      <HowItWorksItem
        title="Get business leads"
        body="New qualified leads flood your network automatically and we notify you to reel them into booking a call on your calendar."
        img={img3}
      />
    </div>
  </div>
)

export default HowItWorks
