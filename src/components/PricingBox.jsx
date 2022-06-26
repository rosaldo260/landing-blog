import React, { useState, useEffect } from 'react'
import isEmpty from 'lodash/isEmpty'
import { Config, Routes } from '@constants'
import { AxiosInstance, formatPriceByInterval } from '@utils'
import Button from '@atoms/Button'
import Typography from '@atoms/Typography'
import SwitchField from './custom/SwitchField'
import CtaNotes from './CtaNotes'
import ButtonBadge from './ButtonBadge'

const defaultCurrency = 'usd'
const defaultInterval = 'month'

const PricingBox = () => {
  const [priceData, setPrices] = useState({})

  const [currency, setCurrency] = useState(defaultCurrency)
  const [interval, setInterval] = useState(defaultInterval)

  async function fetchPrices() {
    try {
      const { data } = await AxiosInstance.get('/stripe/prices/')
      setPrices(data)
      return data
    } catch (err) {
      throw new Error(err)
    }
  }

  useEffect(() => {
    fetchPrices()
  }, [])

  const fullPrice =
    !isEmpty(priceData) &&
    priceData.results.find(
      (p) =>
        p.data.nickname === Config.PRICE.FULL.NICKNAME &&
        p.data.currency === currency &&
        p.data.recurring.interval === interval
    )

  return (
    <div className="py-14 2xl:pt-20 2xl:pb-16">
      <div className="mx-auto w-full text-center">
        <div className="mx-auto mb-6 space-y-4">
          <Typography.H1>Scale your LinkedIn outreach easier</Typography.H1>
          <Typography.SUBHEADER>
            Start your <b className="font-semibold">7-day free trial</b> with
            all features included today.
          </Typography.SUBHEADER>
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row max-w-4xl mx-auto">
          <SwitchField
            value={interval}
            setValue={setInterval}
            size="large"
            options={[
              {
                id: 'month',
                label: 'Monthly',
              },
              {
                id: 'year',
                label: 'Annually',
                discount: '-20%',
              },
            ]}
          />
          <SwitchField
            value={currency}
            setValue={setCurrency}
            size="small"
            options={[
              {
                id: 'usd',
                label: 'USD',
              },
              {
                id: 'eur',
                label: 'EUR',
              },
            ]}
          />
        </div>
      </div>

      <div className="">
        <div className="py-6">
          <div className="space-y-8">
            <div className="w-full bg-white relative space-y-8 max-w-xs mx-auto">
              <div className="text-center">
                <p className="text-1xl font-semibold mb-4">
                  <span className="text-primary-main">{Config.NAME}</span> seat
                </p>
                <div
                  className={`relative flex justify-center content-start  mb-2 -ml-1 ${
                    currency === 'usd' ? 'items-start' : 'items-end'
                  }`}
                >
                  {currency === 'usd' && <span className="text-3xl">$</span>}
                  <span className="font-semibold text-gray-800 text-9xl leading-none">
                    {fullPrice ? (
                      formatPriceByInterval(
                        fullPrice.data.unit_amount,
                        interval
                      )
                    ) : (
                      <div className="w-14 h-14 bg-gray-100 rounded" />
                    )}
                  </span>
                  {currency === 'eur' && <span className="text-3xl">€</span>}
                </div>
                <div className="text-gray-600 text-md font-normal mb-1">
                  per seat / month
                </div>
                <div
                  className={`text-gray-600 text-md ${
                    interval === 'year' ? 'visible' : 'hidden'
                  }`}
                >
                  billed annually
                </div>
              </div>
              <div className="relative mx-auto text-center">
                <a
                  rel="noopener noreferrer nofollow w-max"
                  href={Routes.APP.USER.SIGN_UP}
                >
                  <Button size="big" className="relative">
                    Start now - 7 days free
                    <ButtonBadge />
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <CtaNotes />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingBox
