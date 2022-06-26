import React from 'react'
import PropTypes from 'prop-types'
import { Routes } from '@constants'
import Button from '@atoms/Button'
import Clients from '@components/Clients'
import Typography from '@atoms/Typography'

const FeatureHeader = ({ title, subtitle, image, clientText, buttonText }) => (
  <div>
    <div className="py-10 lg:py-6">
      <div className="w-full relative flex flex-col mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8">
          <div className="w-full md:w-7/12 2xl:w-6/12 text-center sm:text-left xl:pr-12">
            <Typography.H1>{title}</Typography.H1>
            <Typography.SUBHEADER component="h2">
              {subtitle}
            </Typography.SUBHEADER>
            <div className="mt-8 sm:max-w-lg sm:mx-auto lg:mx-0">
              <div
                className="flex flex-col items-center justify-center md:justify-start space-y-3 mx-auto md:mx-0"
                style={{ width: 'fit-content' }}
              >
                <a
                  href={Routes.APP.USER.SIGN_UP}
                  draggable="false"
                  rel="noopener noreferrer"
                  className="relative w-auto"
                >
                  <Button size="big" className="w-full md:w-auto">
                    {buttonText}
                  </Button>
                </a>
                <div className="text-xm md:text-xs text-gray-500">
                  <div>No payment required &#183; Cancel anytime</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-6/12">
            <img
              src={image}
              title={title}
              alt={title}
              style={{ maxHeight: 500 }}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="-mt-6 border-b border-gray-100 pb-16 mb-16">
      <Clients customText={clientText} />
    </div>
  </div>
)

FeatureHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  clientText: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
}

FeatureHeader.defaultProps = {
  buttonText: 'Get started for free',
}

export default FeatureHeader
