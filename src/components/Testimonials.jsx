import React from 'react'
import PropTypes from 'prop-types'
import { Config } from '@constants'
import { FaQuoteLeft } from 'react-icons/fa'
import logo3 from '@static/clients/o2b.svg'
// import logo5 from '@static/clients/appmixer.svg'
// import logo2 from '@static/clients/visitero.svg'
import person5 from '@static/people/marek-hozak-mini.png'
import person2 from '@static/people/tomas-sroka-mini.png'
import Typography from '@atoms/Typography'

const createFeatureRedirectItem = (quote, title, subtitle, img) => ({
  quote,
  title,
  subtitle,
  img,
})

const TestimonialImage = ({ img, name, classNames }) => (
  <img className={`w-14 h-14 ${classNames}`} src={img} alt={name} />
)

TestimonialImage.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classNames: PropTypes.string.isRequired,
}

const TESTIMONIAL_ITEMS = [
  createFeatureRedirectItem(
    <>
      We&apos;ve tried many tools on the market, and {Config.NAME} is a{' '}
      <span className="font-semibold text-gray-800">
        {' '}
        must-have for a LinkedIn lead generation agency.{' '}
      </span>
      {Config.NAME} allows us to scale the number of client LinkedIn accounts we
      can manage.
    </>,
    'Out2Bound',
    'Sales development agency',
    // <TestimonialImage
    //   img={logo3}
    //   name="out2bound"
    //   style={{ height: '44px' }}
    // />,
    <TestimonialImage img={logo3} name="out2bound" />
  ),
  createFeatureRedirectItem(
    // <>
    //   <span className="font-semibold">
    //     Such a great tool for LinkedIn Automation!
    //   </span>{' '}
    //   {Config.NAME} successfully integrates with our outreach flow in Zapier and
    //   sends invitations and follow-ups. We&apos;ve previously tried
    //   Phantombuster, but actions were failing every day because of expired
    //   cookies on LinkedIn. Now it runs smoothly without interruptions.
    // </>,
    <>
      <span className="font-semibold text-gray-800">
        Such a reliable tool for LinkedIn Automation!
      </span>{' '}
      We use {Config.NAME} to turn LinkedIn outreach into free trial signups. It
      allows us to reach out to our target audience through relevant and
      personal messages at scale.
    </>,
    'Marek Hozák',
    'Marketing Manager, Appmixer',
    // <TestimonialImage
    //   img={logo5}
    //   name="appmixer"
    //   style={{ maxWidth: '145px' }}
    // />,
    <TestimonialImage
      img={person5}
      name="marek-hozak-appmixer"
      classNames="rounded-full"
    />
  ),
  createFeatureRedirectItem(
    <>
      <span className="font-semibold text-gray-800">Great tool! </span> Up and
      running immediately, and we had massive success using {Config.NAME} to
      scale our LinkedIn outreach. Request a demo if you are still in doubt. You
      won&apos;t be disappointed.
    </>,
    'Tomas Sroka',
    'Co-Founder, Visitero',
    // <TestimonialImage
    //   img={person2}
    //   name="tomas-sroka-visitero"
    //   style="rounded-full"
    // />,
    <TestimonialImage
      img={person2}
      name="tomas-sroka-visitero"
      classNames="rounded-full"
    />
  ),
]

const TestimonialItem = ({ title, subtitle, quote, img }) => (
  <div className="space-y-8">
    <div className="space-y-4">
      <FaQuoteLeft className="text-lg text-gray-700" />
      <div className="text-base text-gray-600 leading-relaxed">{quote}</div>
    </div>
    <div className="flex items-center justify-start space-x-3">
      {img}
      <div>
        <div className="text-base font-bold text-gray-800">{title}</div>
        <div className="text-sm text-gray-600">{subtitle}</div>
      </div>
    </div>
  </div>
)

TestimonialItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  img: PropTypes.node.isRequired,
}

const Testimonials = ({ title }) => {
  return (
    <div className="px-6 pt-16 pb-20 max-w-full md:max-w-screen-lg lg:max-w-screen-lg mx-auto w-full">
      <div className="mx-auto w-full text-center mb-16">
        <Typography.H2>{title}</Typography.H2>
        <Typography.SUBTEXT>
          See what some of our users have to say
        </Typography.SUBTEXT>
      </div>
      <div className="grid w-full gap-10 row-gap-10 md:gap-20 md:row-gap-20 grid-cols-1 sm:grid-cols-3">
        {TESTIMONIAL_ITEMS.map((item) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TestimonialItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  )
}

Testimonials.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Testimonials
