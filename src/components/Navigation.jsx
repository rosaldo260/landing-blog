import React from 'react'
import { Link } from 'gatsby'
import { Config, Routes } from '@constants'
import logoInverted from '@static/icereach-text-white.svg'
import logo from '@static/icereach-text.svg'
import Button from '@atoms/Button'
import ButtonBadge from './ButtonBadge'

const Navigation = () => {
  const [openMobile, setOpenMobile] = React.useState(false)
  const [navbarScroll, setNavbarScroll] = React.useState(false)
  const toggleOpenMobile = () => {
    setOpenMobile(!openMobile)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setNavbarScroll(true)
      }
      if (window.scrollY < 50) {
        setNavbarScroll(false)
      }
    })
  }, [setNavbarScroll])

  /**
   * Hook that alerts clicks outside of the passed ref
   */
  function useOutsideAlerter(ref, closeFunc) {
    React.useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeFunc(false)
        }
      }

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref, closeFunc])
  }

  const mobileMenuRef = React.useRef(null)
  useOutsideAlerter(mobileMenuRef, setOpenMobile)

  return (
    <div
      className={`w-full sticky top-0 bg-primary-background py-1 ${
        navbarScroll ? 'shadow-lg z-40 sm:py-3' : 'z-30 sm:py-6'
      }`}
    >
      <div className="w-full max-w-xl mx-auto lg:max-w-screen-lg xl:max-w-screen-xl px-4 md:px-0">
        <div className="flex justify-between items-center md:justify-start md:space-x-14">
          <Link to={Routes.ROOT}>
            <img
              className="w-auto h-7"
              src={logoInverted}
              alt={Config.LOGO_TITLE}
              title={Config.LOGO_TITLE}
            />
          </Link>
          <div className="mr-2 my-2 md:hidden">
            <button
              onClick={toggleOpenMobile}
              type="button"
              className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-dark"
            >
              <span className="sr-only">Open menu</span>
              {/* <!-- Heroicon name: menu --> */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden lg:flex space-x-10">
            <a
              href={Routes.DOCS.ALL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm leading-6 font-medium text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
            >
              Docs
            </a>
            <Link
              to={Routes.BLOG.ALL}
              className="text-sm leading-6 font-medium text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
            >
              Blog
            </Link>
            <Link
              to={Routes.SUPPORT.HELP}
              className="text-sm leading-6 font-medium text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
            >
              Help
            </Link>
            <Link
              to={Routes.PRICING}
              className="text-sm leading-6 font-medium text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
            >
              Pricing
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href={Routes.APP.USER.SIGN_IN}
              rel="noopener noreferrer nofollow"
              className="whitespace-nowrap text-sm leading-6 font-medium text-gray-300 hover:text-gray-100 transition duration-150 ease-in-out"
            >
              Sign in
            </a>
            <a
              href={Routes.APP.USER.SIGN_UP}
              rel="noopener noreferrer nofollow"
              className="ml-6 whitespace-nowrap relative"
            >
              <Button>
                Get started - free
                <ButtonBadge />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  --> */}
      <div
        ref={mobileMenuRef}
        className={`${
          openMobile ? 'visible' : 'invisible'
        } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-30`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-3 pb-3 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-7 w-auto"
                  src={logo}
                  alt={Config.LOGO_TITLE}
                  title={Config.LOGO_TITLE}
                />
              </div>
              <div>
                <button
                  onClick={toggleOpenMobile}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-300 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-dark"
                >
                  <span className="sr-only">Close menu</span>
                  {/* <!-- Heroicon name: x --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              {/* <Link
                to={Routes.FEATURES.ALL}
                className="text-sm leading-6 font-medium text-gray-900 hover:text-gray-700"
              >
                Features
              </Link> */}

              <Link
                to={Routes.BLOG.ALL}
                className="text-sm leading-6 font-medium text-gray-900 hover:text-gray-700"
              >
                Blog
              </Link>

              <Link
                to={Routes.SUPPORT.HELP}
                className="text-sm leading-6 font-medium text-gray-900 hover:text-gray-700"
              >
                Support
              </Link>

              <Link
                to={Routes.PRICING}
                className="text-sm leading-6 font-medium text-gray-900 hover:text-gray-700"
              >
                Pricing
              </Link>
            </div>
            <div className="text-center">
              <a
                href={Routes.APP.USER.SIGN_UP}
                rel="noopener noreferrer nofollow"
              >
                <Button size="medium" className="w-full">
                  Get started - free
                </Button>
              </a>
              <p className="mt-6 text-sm leading-6 font-medium text-gray-500">
                Existing customer?{' '}
                <a
                  href={Routes.APP.USER.SIGN_IN}
                  rel="noopener noreferrer nofollow"
                  className="text-green-500 hover:text-green-700"
                >
                  Sign in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
