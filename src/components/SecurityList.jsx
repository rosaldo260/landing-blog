import React from 'react'
import clsx from 'clsx'
import PropTypes from 'prop-types'
import { Config } from '@constants'
import Typography from '@atoms/Typography'
import imgLimits from '@static/security/limits.svg'
import imgWarmUp from '@static/security/warmup.svg'
import imgActiveTimes from '@static/security/active-times.svg'
import imgActivity from '@static/security/activity.svg'
import imgIPAddress from '@static/security/ip-address.svg'
import imgAuthor from '@static/security/author-2.png'
import * as styles from './card.module.css'

const SecurityItem = ({
  title,
  body,
  // color,
  img,
  imgClass,
  imgContainerClass,
}) => (
  <div className="text-left pt-5 md:pt-8 space-y-8">
    <div
      className={clsx(
        imgContainerClass,
        'bg-gray-100 rounded-xl border border-gray-200 h-44 sm:h-52 overflow-hidden'
      )}
    >
      <div className={clsx('p-5 bg-white rounded-xl shadow-xl', imgClass)}>
        <img src={img} alt={title} />
      </div>
    </div>
    <div className="space-y-3">
      <p className="text-xl font-bold text-gray-800">{title}</p>
      <p className="text-gray-600 text-md 2xl:text-base">{body}</p>
    </div>
  </div>
)

SecurityItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // color: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  imgClass: PropTypes.string.isRequired,
  imgContainerClass: PropTypes.string.isRequired,
}

const createSecurityData = (
  title,
  body,
  color,
  img,
  imgClass,
  imgContainerClass
) => ({
  title,
  body,
  color,
  img,
  imgClass,
  imgContainerClass,
})

const securityData = [
  createSecurityData(
    'Your unique IP address',
    'To prevent detection by LinkedIn, each account you add gets its unique IP address from your country.',
    '#eafbf3',
    imgIPAddress,
    'pb-14 pt-6 px-4',
    'px-7 pt-6 pb-0'
  ),
  createSecurityData(
    'Cloud-based tool',
    `${Config.NAME} is safe cloud-based software. Your computer doesn't have to be on to run campaigns.`,
    '#fefaef',
    imgActiveTimes,
    'pb-14 px-4',
    'px-7 pt-6 pb-0'
  ),
  createSecurityData(
    'Mimics human behavior',
    `Our algorithm uses random delays between LinkedIn actions to ensure all actions look natural.`,
    '#ecf8fe',
    imgActivity,
    'pb-10 -mr-3 pt-4 pl-3 pr-0',
    'pl-7 pt-6 pb-0'
  ),
  createSecurityData(
    'Smart limits',
    'Automatically randomize the maximum number of invitations and messages sent per day to comply with the LinkedIn limits.',
    '#ebedf8',
    imgLimits,
    'pb-10 -ml-2 pt-6 pl-7',
    'pr-7 pt-8 pb-0'
  ),
  createSecurityData(
    'Auto warm-up your account',
    `Just like athletes warm-up before a game, ${Config.NAME} enables you to gradually increase the daily limits of invitation requests to reduce risk.`,
    '#fff4f6',
    imgWarmUp,
    'pt-4 pb-3',
    'px-6 py-6'
  ),
  // createSecurityData(
  //   'Time-zone Detection',
  //   'Contact your prospects during their office hours, when they most likely reply.',
  //   '#f37055',
  //   MdAccessTime
  // ),
]

const SecurityList = () => (
  <div className="py-14 md:pb-24">
    <div className="mx-auto w-full text-center mb-8">
      <Typography.H2>Secure software you can trust</Typography.H2>
      <Typography.SUBTEXT>
        Avoid getting restricted by LinkedIn with our unique IP address from
        your country, smart limits, and usage to comply with LinkedIn rules
        resulting in a 0% ban rate. Outreach at scale with {Config.NAME} is
        entirely safe and secure.
      </Typography.SUBTEXT>
    </div>
    <div className="grid w-full gap-10 row-gap-10 sm:grid-cols-2 lg:grid-cols-3 pt-2">
      {securityData.map((item) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <SecurityItem key={item.title} {...item} />
      ))}
      <div className="rounded-xl border border-gray-200 overflow-hidden text-left mt-5 md:mt-8 relative h-80 sm:h-auto bg-yellow-100">
        <div className="p-5">
          <div className={clsx(styles.bubble, 'shadow-lg')}>
            <div className="text-xs text-gray-800">
              <div className="mb-2">
                Hi{' '}
                <div
                  style={{
                    display: 'inline-block',
                    padding: '2px 3px',
                    marginRight: '2px',
                  }}
                  className="text-white font-medium bg-primary-main rounded text-mini leading-normal"
                >
                  first_name
                </div>
                ! 😉
              </div>
              <div>I&apos;m Matt,</div>
              <div>technical co-founder</div>
            </div>
          </div>
          <div className="absolute bottom-0 -right-16 h-72 max-w-xs">
            <img src={imgAuthor} alt="author" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SecurityList
