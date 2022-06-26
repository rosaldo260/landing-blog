import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import {
  MdMenu,
  MdClose,
  MdEditCalendar,
  MdChromeReaderMode,
  MdSupportAgent,
  MdLock,
  MdOutgoingMail,
  MdFindInPage,
  MdHelpCenter,
  MdContactMail,
} from 'react-icons/md'
import { Popover, Transition } from '@headlessui/react'
import logo from '@static/icereach-text.svg'
import { Config, Routes, Features, Styles } from '@constants'
import Button from '@atoms/Button'
import FlyoutMenu from '@atoms/FlyoutMenu'

const product = [
  {
    groupName: 'Solutions',
    items: [
      {
        color: 'bg-red-400',
        name: Features.PROSPECT.text,
        description: 'Find LinkedIn prospects and their details at scale',
        href: Features.PROSPECT.link,
        icon: MdFindInPage,
      },
      {
        color: 'bg-yellow-400',
        name: Features.PERSONALIZE.text,
        description: 'Scale outreach without appearing impersonal',
        href: Features.PERSONALIZE.link,
        icon: MdContactMail,
      },
    ],
  },
  {
    groupName: '',
    items: [
      {
        color: 'bg-purple-400',
        name: Features.FOLLOWUP.text,
        description: 'Get more responses with targeted follow-ups',
        href: Features.FOLLOWUP.link,
        icon: MdOutgoingMail,
      },
      {
        color: 'bg-emerald-400',
        name: 'Keep your account safe',
        description: 'Outreach on autopilot without being detected',
        href: Features.SAFETY.link,
        icon: MdLock,
      },
    ],
  },
]
const resources = [
  {
    groupName: 'Support',
    items: [
      {
        color: 'bg-red-400',
        name: 'Help Center',
        description: 'Find an answer for your question',
        href: Routes.DOCS.ALL,
        external: true,
        icon: MdHelpCenter,
      },
      {
        color: 'bg-emerald-400',
        name: 'Talk with us',
        description: 'Get in touch with our support team.',
        onClick: () =>
          window && window.$crisp && window.$crisp.push(['do', 'chat:open']),
        icon: MdSupportAgent,
      },
    ],
  },
  {
    groupName: 'Learn & Grow',
    items: [
      {
        color: 'bg-yellow-400',
        name: 'Blog',
        description: 'Helpful ideas to succeed in LinkedIn outreach',
        href: Routes.BLOG.ALL,
        icon: MdChromeReaderMode,
      },
      {
        color: 'bg-purple-400',
        name: 'Book a demo',
        description: 'Get a 1 on 1 product demo.',
        href: Routes.CALENDY,
        external: true,
        icon: MdEditCalendar,
      },
    ],
  },
]

const buttonNames = {
  sign_up: {
    text: 'Start free trial',
    link: Routes.APP.USER.SIGN_UP,
  },
  sign_in: {
    text: 'Login',
    link: Routes.APP.USER.SIGN_IN,
  },
  demo: {
    text: 'Request a demo',
    link: Routes.CALENDY,
  },
}

export default function Navbar({ isBreakpointActive }) {
  return (
    <Popover
      className={`${
        Styles.navbarHeight[isBreakpointActive]
      } bg-white top-0 right-0 left-0 z-10 ${
        isBreakpointActive ? 'shadow fixed' : 'absolute'
      }`}
    >
      <div className={`${Styles.container} h-full`}>
        <div className="flex justify-between items-center h-full">
          <div className="flex w-full md:w-auto justify-between md:justify-start items-center md:space-x-14 px-5 md:px-0">
            <Link to={Routes.ROOT}>
              <span className="sr-only">Workflow</span>
              <img
                className="h-6 w-auto sm:h-6"
                src={logo}
                alt={Config.LOGO_TITLE}
                title={Config.LOGO_TITLE}
              />
            </Link>
            <div className="-mr-1 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MdMenu className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group
              as="nav"
              className={isBreakpointActive ? 'hidden' : 'hidden md:flex'}
            >
              <FlyoutMenu
                name="Solutions"
                data={product}
                isBreakpointActive={isBreakpointActive}
              />
              <FlyoutMenu
                name="Resources"
                data={resources}
                isBreakpointActive={isBreakpointActive}
              />
              <Link
                to={Routes.PRICING}
                className="text-md font-medium text-gray-700 hover:text-gray-900 px-2 mx-3 flex items-center"
              >
                Pricing
              </Link>
              <Link
                to={Routes.BLOG.ALL}
                className="text-md font-medium text-gray-700 hover:text-gray-900 px-2 mx-3 flex items-center"
              >
                Blog
              </Link>
            </Popover.Group>
            <Popover.Group
              as="nav"
              className={!isBreakpointActive ? 'hidden' : 'hidden lg:flex'}
            >
              <div className="text-md text-gray-700">
                Trusted by agencies, sales teams, and startups to{' '}
                <span className="bg-yellow-100 px-1 py-1 font-medium text-gray-800">
                  start 10x more conversations
                </span>
              </div>
            </Popover.Group>
          </div>

          <div className="hidden md:flex items-center justify-end w-auto space-x-4">
            <a
              href={buttonNames.sign_in.link}
              className={`whitespace-nowrap text-md font-medium text-gray-700 hover:text-gray-900 mr-3 ${
                isBreakpointActive && 'hidden'
              }`}
            >
              {buttonNames.sign_in.text}
            </a>
            <a href={buttonNames.sign_up.link}>
              <Button size="small">{buttonNames.sign_up.text}</Button>
            </a>
            <a
              href={buttonNames.demo.link}
              target="_blank"
              rel="noopenner noreferrer nofollow"
              className={!isBreakpointActive && 'hidden'}
            >
              <Button variant="outlined" size="small">
                {buttonNames.demo.text}
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="fixed right-0 left-0 top-0 inset-x-0 transition transform origin-top-right md:hidden z-10"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-3 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-6 w-auto"
                    src={logo}
                    alt={Config.LOGO_TITLE}
                    title={Config.LOGO_TITLE}
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <MdClose className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="pt-1 pb-5 px-5">
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {product.map(({ items }) => {
                    return items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 space-x-4"
                      >
                        <div className="bg-emerald-400 p-1 rounded">
                          <item.icon
                            className="flex-shrink-0 h-6 w-6 text-white"
                            aria-hidden="true"
                          />
                        </div>

                        <span className="text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))
                  })}
                </nav>
              </div>
            </div>

            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <Link
                  to={Routes.PRICING}
                  className="text-md font-medium text-gray-600 hover:text-gray-900 py-5 px-5"
                >
                  Pricing
                </Link>
                <Link
                  to={Routes.BLOG.ALL}
                  className="text-md font-medium text-gray-600 hover:text-gray-900 py-5 px-5"
                >
                  Blog
                </Link>
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div>
                <a href={buttonNames.sign_up.link} className="w-full">
                  <Button size="medium" className="w-full">
                    {buttonNames.sign_up.text}
                  </Button>
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <a
                    href={buttonNames.sign_in.link}
                    className="text-primary-main hover:text-primary-dark"
                  >
                    {buttonNames.sign_in.text}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

Navbar.propTypes = {
  isBreakpointActive: PropTypes.bool.isRequired,
}
