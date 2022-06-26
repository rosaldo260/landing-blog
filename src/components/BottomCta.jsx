import React from 'react'
import PropTypes from 'prop-types'
import { Routes } from '@constants'
import Button from '@atoms/Button'
import Typography from '@atoms/Typography'
import CtaNotes from './CtaNotes'

const BottomCta = ({ title, subtitle, button }) => (
  <div className="py-10 md:py-20 mx-auto max-w-full md:max-w-4xl">
    <div className="py-10 md:py-16 px-8 bg-yellow-200 text-center rounded-lg">
      <Typography.H2>{title}</Typography.H2>
      <Typography.SUBTEXT color="text-gray-800">{subtitle}</Typography.SUBTEXT>
      <div className="mb-12">
        <a
          href={Routes.APP.USER.SIGN_UP}
          draggable="false"
          rel="noopener noreferrer"
          className="relative w-auto"
        >
          <Button
            size="big"
            variant="inverted"
            className="transition duration-300 ease-in-out transform hover:scale-110"
          >
            {button}
          </Button>
        </a>
      </div>
      <CtaNotes color="text-gray-800" />
    </div>
  </div>
)

BottomCta.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  button: PropTypes.string,
}

BottomCta.defaultProps = {
  title: 'Ready to get started?',
  subtitle: 'Send your first outreach campaign with LinkedIn automation today.',
  button: 'Try for free',
}

export default BottomCta
