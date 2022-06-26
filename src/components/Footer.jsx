import React from 'react'
import { MdEmail } from 'react-icons/md'
import Redirect from '@atoms/Redirect'
import PropTypes from 'prop-types'
import logo from '@static/icereach-text.svg'
import { Config, Routes, Features } from '@constants'

const FooterListHeader = ({ text }) => (
  <p className="tracking-wide font-bold text-gray-800 leading-5 text-sm">
    {text}
  </p>
)

FooterListHeader.propTypes = {
  text: PropTypes.string.isRequired,
}

const FooterListItem = ({ link, text, external, onClick }) => (
  <li className="mt-3">
    <Redirect
      onClick={onClick}
      external={external}
      href={link}
      className="text-sm text-gray-600 hover:text-gray-900 hover:underline"
    >
      {text}
    </Redirect>
  </li>
)

FooterListItem.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  external: PropTypes.bool,
  onClick: PropTypes.func,
}

FooterListItem.defaultProps = {
  external: false,
  onClick: undefined,
}

const Footer = () => (
  <div className="w-full pt-4 px-6 mt-8 mx-auto bg-gray-100 border-opacity-10">
    <div className="mx-auto max-w-full md:max-w-screen-lg lg:max-w-screen-xl w-full h-full py-8 flex justify-between flex-col sm:flex-row">
      <div className="w-1/2 mb-6 sm:mb-0 space-y-8">
        <div className="space-y-4">
          <img
            className="h-5 w-auto sm:h-6 mr-3"
            src={logo}
            title={Config.LOGO_TITLE}
            alt={Config.LOGO_TITLE}
          />
          <p className="text-sm text-gray-600">Safe LinkedIn automation tool</p>
        </div>
        <div className="flex items-center space-x-2">
          <MdEmail className="text-gray-800 text-lg" />
          <a
            href={`mailto:${Config.EMAIL}?subject=Question%20about%20${Config.NAME}&body=`}
            className="text-sm font-medium text-gray-600 hover:text-gray-900 hover:underline"
          >
            {Config.EMAIL}
          </a>
        </div>
      </div>
      <div className="grid w-full gap-10 row-gap-10 lg:grid-cols-3 pt-1">
        {/* <div>
          <FooterListHeader text="Company" />
          <ul className="list-none p-0 mt-2 space-y-2">
            <FooterListItem link={Routes.BLOG.ALL} text="Blog" />
            <FooterListItem link={Routes.PRICING} text="Pricing" />
          </ul>
        </div> */}
        <div>
          <FooterListHeader text="Solutions" />
          <ul className="list-none p-0 mt-2 space-y-2">
            {Object.keys(Features).map((key) => {
              const feature = Features[key]
              // eslint-disable-next-line react/jsx-props-no-spreading
              return <FooterListItem key={feature.link} {...feature} />
            })}
          </ul>
        </div>
        <div className="lg:pl-10">
          <FooterListHeader text="Resources" />
          <ul className="list-none p-0 mt-2 space-y-2">
            <FooterListItem link={Routes.BLOG.ALL} text="Blog" />
            <FooterListItem
              link={Routes.DOCS.ALL}
              text="Help Center"
              external
            />
            <FooterListItem
              onClick={() =>
                window &&
                window.$crisp &&
                window.$crisp.push(['do', 'chat:open'])
              }
              text="Talk with us"
            />
            <FooterListItem link={Routes.CALENDY} text="Book a demo" external />
            {/* <FooterListItem link={Routes.SUPPORT.FAQ} text="FAQ" /> */}
          </ul>
        </div>
        <div>
          <FooterListHeader text="Company" />
          <ul className="list-none p-0 space-y-2">
            <FooterListItem link={Routes.PRICING} text="Pricing" />
            <FooterListItem link={Routes.LEGAL.TOS} text="Terms of Use" />
            <FooterListItem
              link={Routes.LEGAL.PRIVACY_POLICY}
              text="Privacy Policy"
            />
            <FooterListItem link={Routes.LEGAL.GDPR} text="GDPR" />
          </ul>
        </div>
        {/* TODO: Add comparisons to other products - SEO */}
        {/* <div>
        <FooterListHeader text="Comparisons" />
        <ul className="list-none mt-2 space-y-2">
          <FooterListItem link={Routes.COMPARE.ZOPTO} text="vs Zopto" />
          <FooterListItem link={Routes.COMPARE.EXPANDI} text="vs Expandi" />
          <FooterListItem link={Routes.COMPARE.LH} text="vs LinkedHelper" />
        </ul>
      </div> */}
      </div>
    </div>
    <div className="flex justify-between mx-auto max-w-full md:max-w-screen-lg lg:max-w-screen-xl w-full pt-6 border-t border-gray-200 flex-row">
      <p className="text-xs text-gray-500">{Config.NAME} © 2022</p>
      <div className="flex items-center space-x-4 mt-0">
        <a
          rel="noreferrer nofollow"
          title="Twitter author"
          href={Config.SOCIAL.TWITTER}
          className="text-xs leading-6 text-gray-500 hover:text-gray-700"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
          </svg>
        </a>
        <a
          rel="noreferrer nofollow"
          href={Config.SOCIAL.FACEBOOK}
          title="Facebook page"
          className="text-xs leading-6 text-gray-500 hover:text-gray-700"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
          </svg>
        </a>
      </div>
    </div>
    <div className="max-w-4xl pt-8 pb-4 mx-auto">
      <p className="text-tiny text-center text-gray-500">
        Disclaimer: {Config.NAME} is not affiliated, associated, authorized,
        endorsed by, or in any way officially connected with Microsoft or
        LinkedIn, or any of their subsidiaries or affiliates. The name LinkedIn,
        as well as related names, marks, logos, emblems, and images are
        registered trademarks of their respective owners.
      </p>
    </div>
  </div>
)

Footer.propTypes = {}

export default Footer
