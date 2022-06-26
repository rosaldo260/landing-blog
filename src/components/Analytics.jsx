import { useEffect } from 'react'
import ReactGA from 'react-ga'
import { Config } from '@constants'

const Analytics = () => {
  ReactGA.initialize(Config.GOOGLE_ANALYTICS_ID, {
    debug: true,
    titleCase: false,
  })

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return null
}

export default Analytics
