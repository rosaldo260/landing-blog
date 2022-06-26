import React from 'react'
import { Config } from '@constants'
import clsx from 'clsx'
import { MdLiveHelp } from 'react-icons/md'
import * as styles from './faq.module.css'

const createData = (question, answer) => ({ question, answer })

const ChevronRight = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
)

const FrequentlyAsked = () => {
  const [openIndex, setOpenIndex] = React.useState(0)

  const toggleIndex = (index) => {
    if (index === openIndex) {
      return setOpenIndex(undefined)
    }
    return setOpenIndex(index)
  }

  const triggerChat = () => {
    window.$crisp.push(['do', 'chat:open'])
  }

  const data = [
    createData(
      'Can I cancel my plan anytime?',
      'Yes, you can cancel your subscription at any time. Your card will not be charged if you decide to cancel your free trial within the seven-day trial period. You can try us out risk-free. No questions asked.'
    ),
    createData(
      'How can I cancel my plan?',
      <>
        You can cancel your account at any moment in your Billing settings.
        <ul className={styles.menu}>
          <ol>Step 1: Select Billing in the right-hand corner user menu</ol>
          <ol>Step 2: Select the account for which you wish to cancel</ol>
          <ol>
            Step 3: Click on <b>Cancel subscription</b>
          </ol>
        </ul>
        After canceling, you&apos;ll be able to use your plan until the trial or
        subscription period ends.
      </>
    ),
    createData(
      'How can I contact customer support?',
      <>
        We will be happy to answer your question via{' '}
        <button
          className="text-link hover:underline"
          type="button"
          onClick={triggerChat}
        >
          Live chat
        </button>{' '}
        or at{' '}
        <a
          className="text-link"
          href={`mailto:${Config.EMAIL}?subject=Question%20about%20${Config.NAME}&body=`}
        >
          {Config.EMAIL}
        </a>
        .
      </>
    ),
    createData(
      'Do you guarantee after-sale customer support?',
      'Definitely, we are glad to help you with any problems or challenges you might have. We have world-class customer support that replies typically within a few hours.'
    ),
    createData(
      `What is ${Config.NAME}?`,
      `${Config.NAME} is an advanced LinkedIn automation tool for marketers, agencies, sales reps, startups, and recruiters to scale LinkedIn outreach and lead generation effectively.`
    ),
    createData(
      'How many connection requests and messages can I send daily?',
      "The safety of your LinkedIn account is a top priority for us. Therefore, we've limited the number of connection requests and messages you can send daily. The safety maximum limit is 100 invitations and 100 follow-up messages on LinkedIn daily."
    ),
    createData(
      'How do you keep my account safe?',
      <>
        {Config.NAME} combines several security measures to be the safest
        LinkedIn automation tool. To ensure your account security, with every
        plan, you&apos;ll get access to a dedicated IP address in your country
        working day and night to mimic human behavior so that LinkedIn
        won&apos;t detect any automation.
        <br />
        <br />
        You have complete control over your account&apos;s work times, daily
        limits, and account warmup, a premium safety feature that gradually
        increases your daily LinkedIn activities on autopilot.
      </>
    ),
    createData(
      'Can I manage multiple LinkedIn accounts?',
      `Sure! You can add and manage an unlimited number of LinkedIn accounts. You'll be able to switch and share resources between connected LinkedIn accounts easily.`
    ),
    createData(
      `Do I need LinkedIn Premium or Sales Navigator?`,
      `${Config.NAME} is compatible with LinkedIn Basic, LinkedIn Premium, and Sales Navigator. You don't need LinkedIn Premium or Sales Navigator to use ${Config.NAME}. However, you might run into limits with searches using only a basic LinkedIn account.`
    ),
    createData(
      `Can I integrate ${Config.NAME} with my CRM?`,
      `You asked, and we delivered this highly requested feature! You can quickly connect your ${Config.NAME} account to 3000+ web apps, including Hubspot, PipeDrive, Salesforce, Zoho CRM, Google Sheets through integration via Zapier.`
    ),
    createData(
      'Is there a long-term contract?',
      `There is no long-term commitment with ${Config.NAME}. You can pause, renew or cancel at any time. Your canceled subscription is active until the end of your current billing cycle.`
    ),
  ]

  return (
    <div className="max-w-xl lg:max-w-screen-md mx-auto p-4 sm:p-0">
      <h2 className="font-bold text-gray-800 text-2xl sm:text-3xl lg:text-4xl leading-tight text-center">
        Frequently asked questions
      </h2>
      <div className="my-12">
        {data.map((item, index) => (
          <div
            key={item.question}
            className={clsx('border border-gray-200', {
              [styles.notTop]: index !== 0,
              [styles.top]: index === 0,
              [styles.last]: index === data.length - 1,
            })}
          >
            <button
              className="py-4 px-3 sm:px-6 w-full"
              type="button"
              onClick={() => toggleIndex(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-sm sm:text-lg leading-6 font-medium text-gray-800 text-left">
                  {item.question}
                </h3>
                <div
                  className={clsx(styles.chevron, {
                    [styles.rotated]: openIndex === index,
                  })}
                >
                  {ChevronRight}
                </div>
              </div>
            </button>
            <div className="px-3 sm:px-6">
              <div
                className={clsx(styles.answer, {
                  [styles.collapsed]: openIndex !== index,
                })}
              >
                <p className="text-xs sm:text-base leading-6 text-gray-500 sm:mr-10">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center mb-10 sm:mb-0">
        <div className={clsx(styles.icon, styles.iconLarge, 'mr-2 p-1 sm:p-2')}>
          <MdLiveHelp className="text-3xl sm:text-5xl text-primary-main" />
        </div>
        <div>
          <h4 className="text-base sm:text-xl text-gray-800 font-semibold leading-8">
            Have other questions?
          </h4>
          <p className="text-xs sm:text-base leading-6 text-gray-500">
            If you have more questions on our pricing and plans,{' '}
            <button className="text-link" type="button" onClick={triggerChat}>
              contact us
            </button>{' '}
            so we can help.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FrequentlyAsked
