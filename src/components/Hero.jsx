import React from 'react'
import imgHeroEmpty from '@static/hero/hero-empty.svg'
import imgHeroCampaign from '@static/hero/hero-campaign.svg'
import imgHeroFull from '@static/hero/hero-full.svg'
import FeatureHeader from './features/FeatureHeader'

const Hero = () => {
  const [currentImage, setCurrentImage] = React.useState(imgHeroEmpty)

  React.useEffect(() => {
    setTimeout(() => {
      setCurrentImage(imgHeroCampaign)
    }, 800)
  }, [])

  React.useEffect(() => {
    setTimeout(() => {
      setCurrentImage(imgHeroFull)
    }, 1400)
  }, [])

  return (
    <FeatureHeader
      title={
        <>
          <div>Generate more business from LinkedIn with safe automation.</div>
          <div className="text-primary-main mt-2">Fast.</div>
        </>
      }
      subtitle={
        <>
          Identify new leads and start <b>10x more conversations</b> using safe
          LinkedIn automation tool that delivers results.
        </>
      }
      image={currentImage}
      buttonText="Try now - 7 days free"
    />
  )
}

export default Hero
