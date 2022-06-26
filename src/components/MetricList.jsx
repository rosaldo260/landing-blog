import React from 'react'
import Typography from '@atoms/Typography'

const MetricList = () => (
  <div className="pt-6 pb-20 max-w-screen-lg mx-auto">
    <div className="mx-auto w-full text-center mb-8">
      <Typography.H2>Why you should focus on LinkedIn?</Typography.H2>
      <Typography.SUBTEXT>
        80% of B2B marketing leads from social media originate from LinkedIn.
      </Typography.SUBTEXT>
    </div>
    <div className="grid w-full gap-2 row-gap-2 grid-cols-1 lg:grid-cols-3 pt-8">
      <div className="flex items-center justify-center flex-col space-y-1">
        <div className="text-4xl lg:text-7xl text-primary-main font-bold">
          310M+
        </div>
        <div className="text-gray-600 text-base lg:text-lg">
          Monthly active users
        </div>
      </div>

      <div className="flex items-center justify-center flex-col space-y-1">
        <div className="text-4xl lg:text-7xl text-primary-main font-bold">
          277%
        </div>
        <div className="text-gray-600 text-base lg:text-lg">
          More effective than Twitter & Facebook
        </div>
      </div>

      <div className="flex items-center justify-center flex-col space-y-1">
        <div className="text-4xl lg:text-7xl text-primary-main font-bold">
          57M+
        </div>
        <div className="text-gray-600 text-base lg:text-lg">
          Companies on LinkedIn
        </div>
      </div>
    </div>
  </div>
)

export default MetricList
