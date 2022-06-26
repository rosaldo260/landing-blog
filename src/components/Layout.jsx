import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import Footer from '@components/Footer'
import LiveChat from '@components/LiveChat'
import Analytics from '@components/Analytics'
import { Config, Styles } from '@constants'
import './base.css'
import Navbar from '@components/general/Navbar'

const defaultSeo = {
  title: `${Config.NAME}: LinkedIn Automation Tool to Scale Your Outreach`,
  description: `Start 10x more conversations and personalize outreach at scale with ${Config.NAME}. The safest LinkedIn automation tool that delivers results.`,
  image: `${Config.ROOT_URL}/social.png`,
}

const breakpoint = 600

const Layout = ({ children, disableContainer }) => {
  const [offset, setOffset] = React.useState(0)

  React.useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset)
    // clean up code
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isBreakpointActive = offset > breakpoint

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <meta charset="UTF-8" />
        <title>{defaultSeo.title}</title>
        <meta name="description" content={defaultSeo.description} />
        <meta name="application-name" content={Config.NAME} />
        <meta property="og:site_name" content={Config.NAME} />
        <meta property="og:image" content={defaultSeo.image} />
        <meta property="og:title" content={defaultSeo.title} />
        <meta property="og:url" content={Config.ROOT_URL} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={defaultSeo.description} />
        <meta name="twitter:widgets:csp" content="on" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:src" content={defaultSeo.image} />
        <meta name="twitter:site" content="@matthlavacka" />
        <meta name="twitter:creator" content="@matthlavacka" />
        <meta name="twitter:title" content={defaultSeo.title} />
        <meta name="twitter:description" content={defaultSeo.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <html lang="en" />
        <meta
          name="facebook-domain-verification"
          content="fo7jotgrm1i164ar6gfgzfyudiusgm"
        />
        <meta property="fb:app_id" content="1181493175590403" />
      </Helmet>

      <Analytics />
      <div className="flex-1 px-6">
        <div className={!disableContainer && Styles.container}>
          <Navbar isBreakpointActive={isBreakpointActive} />
          <div className={`${Styles.bodyMargin[isBreakpointActive]} relative`}>
            {children}
          </div>
        </div>
      </div>
      <LiveChat />
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  disableContainer: PropTypes.bool,
}

Layout.defaultProps = {
  disableContainer: false,
}

export default Layout
