import React from 'react'
import { Config, Routes } from '@constants'
import Layout from '@components/Layout'
import HelmetHelper from '@components/HelmetHelper'

const createTermsData = (title, body) => ({ title, body })

const privacyData = [
  createTermsData(
    'Website visitors',
    `Like most website operators, ${Config.WEBSITE_NAME} collects non-personally-identifying information of the sort that web browsers and servers typically make available, such as the browser type, language preference, referring site, and the date and time of each visitor request. ${Config.WEBSITE_NAME} may also collect statistics about the behavior of visitors to its websites. ${Config.WEBSITE_NAME}'s purpose in collecting non-personally identifying information is to better understand how ${Config.WEBSITE_NAME}’s visitors use its website. From time to time, ${Config.WEBSITE_NAME} may release non-personally-identifying information in the aggregate, e.g., by publishing a report on trends in the usage of its website.`
  ),
  createTermsData(
    `Gathering of personally identifying information`,
    `Certain visitors to ${Config.WEBSITE_NAME}’s websites choose to interact with ${Config.WEBSITE_NAME} in ways that require ${Config.WEBSITE_NAME} to gather personally-identifying information. The amount and type of information that ${Config.WEBSITE_NAME} gathers depends on the nature of the interaction. For example, we ask visitors who sign up for an account at ${Config.WEBSITE_NAME} to provide an email address. Those who engage in transactions with ${Config.WEBSITE_NAME} – by purchasing access to the premium services, for example – are asked to provide additional information, including as necessary the personal and financial information required to process those transactions. In each case, ${Config.WEBSITE_NAME} collects such information only insofar as is necessary or appropriate to fulfill the purpose of the visitor’s interaction with ${Config.WEBSITE_NAME}. ${Config.WEBSITE_NAME} does not disclose personally-identifying information other than as described below. And visitors can always refuse to supply personally-identifying information, with the caveat that it may prevent them from engaging in certain website-related activities.`
  ),
  createTermsData(
    'Protection of certain personally identifying information',
    `${Config.WEBSITE_NAME} discloses potentially personally-identifying and personally-identifying information only to those of its employees, contractors and affiliated organizations that:

    <ul>
      <li>
        (i) need to know that information in order to process it on ${Config.WEBSITE_NAME}’s behalf or to provide services available at ${Config.WEBSITE_NAME}’s websites, and
      </li>
      <li>
        (ii) that have agreed not to disclose it to others.
      </li>
    </ul></br>

    Some of those employees, contractors and affiliated organizations may be located outside of your home country; by using ${Config.WEBSITE_NAME}’s websites, you consent to the transfer of such information to them. ${Config.WEBSITE_NAME} will not rent or sell potentially personally-identifying and personally-identifying information to anyone. Other than to its employees, contractors and affiliated organizations, as described above, ${Config.WEBSITE_NAME} discloses potentially personally-identifying and personally-identifying information ${Config.WEBSITE_NAME} in response to a subpoena, court order or other governmental request, or when ${Config.WEBSITE_NAME} believes in good faith that disclosure is reasonably necessary to protect the property or rights of ${Config.WEBSITE_NAME}, third parties or the public at large. If you are a registered user of an ${Config.WEBSITE_NAME} website and have supplied your email address, ${Config.WEBSITE_NAME} may occasionally send you an email to tell you about new features, solicit your feedback, or just keep you up to date with what’s going on with ${Config.WEBSITE_NAME} and our products. We primarily use our various other channels to communicate this type of information, so we expect to keep this type of email to a minimum. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. ${Config.WEBSITE_NAME} takes all measures reasonably necessary to protect against the unauthorized access, use, alteration or destruction of potentially personally-identifying and personally-identifying information.`
  ),
  createTermsData(
    'Cookies',
    `A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor's browser provides to the website each time the visitor returns. ${Config.WEBSITE_NAME} uses cookies to help ${Config.WEBSITE_NAME} identify and track visitors, their usage of ${Config.WEBSITE_NAME} website, and their website access preferences. ${Config.WEBSITE_NAME} visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using ${Config.WEBSITE_NAME}’s websites, with the drawback that certain features of ${Config.WEBSITE_NAME}’s websites may not function properly without the aid of cookies.</br></br>
    ${Config.WEBSITE_NAME} uses Google Analytics features based on Display Advertising. Visitors can opt out from this at any time. `
  ),
  createTermsData(
    'Business transfers',
    `If ${Config.WEBSITE_NAME}, or substantially all of its assets, were acquired, or in the unlikely event that ${Config.WEBSITE_NAME} goes out of business or enters bankruptcy, user information would be one of the assets that is transferred or acquired by a third party. You acknowledge that such transfers may occur, and that any acquirer of ${Config.WEBSITE_NAME} may continue to use your personal information as set forth in this policy. `
  ),
  createTermsData(
    'Privacy policy changes',
    `Although most changes are likely to be minor, ${Config.WEBSITE_NAME} may change its Privacy Policy from time to time, and in ${Config.WEBSITE_NAME}’s sole discretion. ${Config.WEBSITE_NAME} encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.

    </br></br>

    Our privacy policy above is based on the one from the wonderful guys from Automattic. You’re more than welcome to steal it and repurpose it for your own use, just make sure to replace references to us with ones to you. Also check out the original and consider WordPress.com when looking for blog or general CMS.`
  ),
  createTermsData(
    'Data Processing Agreement',
    `<a style="color:#1976d2" href="${Routes.LEGAL.GDPR}">Please click here to review our DPA</a>.`
  ),
]

const Terms = () => (
  <Layout>
    <HelmetHelper
      title={`Privacy Policy - ${Config.NAME}`}
      description={`Read how we at ${Config.WEBSITE_NAME} respect your privacy regarding any
        information we may collect while operating our websites.`}
    />
    <div className="w-full max-w-2xl mx-auto py-20">
      <h1 className="text-center text-4xl font-bold mb-8">Privacy Policy</h1>
      <p className="text-lg leading-relaxed font-light text-gray-600 mb-8">
        {Config.COMPANY_NAME} operates a website {Config.WEBSITE_NAME}. It is{' '}
        {Config.WEBSITE_NAME}’s policy to respect your privacy regarding any
        information we may collect while operating our websites.
      </p>
      {privacyData.map((data) => (
        <div key={data.title} className="mb-8">
          <h3 className="text-2xl text-gray-800 font-semibold mb-3">
            {data.title}
          </h3>
          <p
            className="text-base text-gray-600 leading-relaxed"
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
        </div>
      ))}
    </div>
  </Layout>
)

export default Terms
