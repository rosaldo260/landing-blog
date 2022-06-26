import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  getFilledPercentage,
  getDealsLeft,
  formatPrice,
  calculatePercentage,
  AxiosInstance,
} from '@utils'
import Button from '@atoms/Button'
import { Routes } from '@constants'
import clsx from 'clsx'
import styles from './pricing.module.css'
import stylesCard from './card.module.css'
import ButtonBadge from './ButtonBadge'

// Placeholder to not have 0 there
const fakeSeats = 22

const DiscountPriceBox = ({ price, fullPrice }) => {
  const [count, setCount] = useState(0)
  async function fetchCount() {
    try {
      const { data } = await AxiosInstance.get('/stripe/subscriptions/count/')
      // Placeholder to not have 0 there
      setCount(data.distinct_seat_count + fakeSeats)
      return data
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    fetchCount()
  }, [])

  const filledPercentage = getFilledPercentage(count)
  const dealsLeft = getDealsLeft(count)

  return (
    <div
      className={clsx(
        stylesCard.card,
        stylesCard.actionCard,
        'w-full md:w-1/2 bg-white rounded shadow p-4 py-9 max-w-sm mx-auto md:m-0 md:mr-8 mb-8 md:mb-0 border-2 border-primary-main relative'
      )}
    >
      <div className="absolute inset-x-0 top-0 transform translate-y-px">
        <div className="flex justify-center transform -translate-y-1/2">
          <span className="inline-flex rounded-full bg-green-500 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
            Limited supply
          </span>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xl font-semibold mb-3">Early All-in-one</p>
        <div className="relative flex justify-center items-center mb-3">
          <span className="inline-flex rounded-full border border-red-600 px-2 leading-5 text-mini font-semibold tracking-wider uppercase text-red-600 bg-white">
            Save {calculatePercentage(price.unit_amount, fullPrice.unit_amount)}
          </span>
        </div>
        <div className="relative flex justify-center content-start items-start">
          <span className="font-light text-2xl">$</span>
          <span className="font-semibold text-gray-800 text-9xl leading-none">
            {formatPrice(price.unit_amount)}
          </span>
        </div>
        <span className="text-gray-600 text-sm font-normal">
          per seat / month
        </span>
      </div>
      <div className="w-full my-4 px-4">
        <div className="relative">
          <div className="text-gray-500 text-xs text-right">
            {dealsLeft} deals left
          </div>
          <div className="w-full bg-gray-200 rounded-full my-1 h-2">
            <div
              className="w-1/2 bg-green-500 h-full rounded-full"
              style={{ width: `calc(${filledPercentage})` }}
            />
          </div>
        </div>
      </div>
      <div className="px-6 mt-8">
        <ul className={styles.featureList}>
          <li className={styles.check}>All features included</li>
          <li className={styles.check}>7-days free trial</li>
          <li className={styles.check}>Cancel anytime</li>
        </ul>
        <div className="mt-8 relative">
          <a rel="noopener noreferrer nofollow" href={Routes.APP.USER.SIGN_UP}>
            <Button size="big" className="w-full">
              Get started - free
              <ButtonBadge />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

DiscountPriceBox.propTypes = {
  price: PropTypes.shape({
    unit_amount: PropTypes.number.isRequired,
  }),
  fullPrice: PropTypes.shape({
    unit_amount: PropTypes.number.isRequired,
  }),
}

DiscountPriceBox.defaultProps = {
  price: {
    unit_amount: 0,
  },
  fullPrice: {
    unit_amount: 0,
  },
}

export default DiscountPriceBox
