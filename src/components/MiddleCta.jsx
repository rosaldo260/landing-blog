import React from 'react'
import { Routes } from '@constants'

const MiddleCta = () => (
  <div className="bg-blue-100">
    <div className="text-center lg:text-left max-w-screen-lg mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <div className="flex flex-col">
        <h3 className="text-2xl leading-9 font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-tight">
          Ready to connect with new leads?
        </h3>
        <p className="text-lg font-semibold text-primary-main">
          Get started for free.
        </p>
      </div>
      <div className="justify-center lg:justify-left mt-8 flex lg:flex-shrink-0 lg:mt-0">
        <div className="ml-3 inline-flex rounded-md shadow">
          <a
            href={Routes.APP.USER.SIGN_UP}
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center px-9 py-3 border border-transparent text-base leading-6 font-medium rounded text-white bg-primary-main hover:bg-primary-dark focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
          >
            Get started
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default MiddleCta
