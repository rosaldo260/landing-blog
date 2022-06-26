import React from 'react'
import clsx from 'clsx'
import { MdLiveHelp, MdLibraryBooks, MdVideoCall } from 'react-icons/md'
import Layout from '@components/Layout'
import { Config, Routes } from '@constants'
import styles from '@components/card.module.css'
import HelmetHelper from '@components/HelmetHelper'

const HelpIndex = () => {
  return (
    <Layout>
      <HelmetHelper
        title={`Help & Support - ${Config.NAME}`}
        description={`${Config.NAME} support is here to help you with any problems. Reach out via chatbox or find demo articles on how to run your outreach campaigns.`}
      />
      <div className="p-10 sm:pt-20">
        <div className="mx-auto max-w-md">
          <div className="text-center p-8">
            <div
              className={clsx(
                styles.icon,
                styles.iconLarge,
                'bg-primary-light'
              )}
            >
              <MdLiveHelp className={clsx(styles.img, styles.imgLarge)} />
            </div>
            <h1 className="text-xl leading-tight font-bold text-gray-800 sm:text-3xl lg:text-4xl mt-2 mb-8">
              Help & Support
            </h1>
            <h2 className="mb-4 text-base text-gray-600">
              You can always reach us at{' '}
              <a
                className="font-semibold"
                href={`mailto:${Config.EMAIL}?subject=Question%20about%20${Config.NAME}&body=`}
              >
                {Config.EMAIL}
              </a>
            </h2>
            <h2 className="text-base text-gray-600">
              We&apos;ll get back to you as soon as we can, typically within a
              few hours. Thank you! 🙏
            </h2>
          </div>
        </div>
      </div>
      <div className="pb-20 bg-white">
        <div className="grid w-full gap-9 row-gap-9 sm:grid-cols-2">
          <a href={Routes.DOCS.ALL} target="_blank" rel="noopener noreferrer">
            <div className="text-left p-6 rounded-md border-2 border-gray-100 transition hover:border-primary-light">
              <div
                className={clsx(styles.icon, styles.iconSmall, 'bg-green-400')}
              >
                <MdLibraryBooks className={clsx(styles.img, styles.imgSmall)} />
              </div>
              <h4 className="text-base leading-tight font-bold text-gray-800 md:text-lg mt-1 mb-4">
                Documentation
              </h4>
              <p className="text-sm text-gray-600">
                Explore our documentation guides to start generating more leads
                with {Config.NAME}.
              </p>
            </div>
          </a>
          <a
            href={Routes.CALENDY}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <div className="text-left p-6 rounded-md border-2 border-gray-100 transition hover:border-primary-light">
              <div
                className={clsx(styles.icon, styles.iconSmall, 'bg-green-400')}
              >
                <MdVideoCall className={clsx(styles.img, styles.imgSmall)} />
              </div>
              <h4 className="text-base leading-tight font-bold text-gray-800 md:text-lg mt-1 mb-4">
                Book a demo call
              </h4>
              <p className="text-sm text-gray-600">
                Book a demo call to see how {Config.Name} can help you generate
                and convert more prospects.
              </p>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default HelpIndex
