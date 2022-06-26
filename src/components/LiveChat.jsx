import { useEffect } from 'react'
import { Config } from '@constants'

const LiveChat = () => {
  useEffect(() => {
    window.$crisp = []
    window.CRISP_WEBSITE_ID = Config.CRISP_ID
    ;(function initCrisp() {
      const d = document
      const s = d.createElement('script')

      s.src = 'https://client.crisp.chat/l.js'
      s.async = true
      s.id = 'crispchat'
      d.getElementsByTagName('head')[0].appendChild(s)
    })()
  }, [])

  return null
}

export default LiveChat
