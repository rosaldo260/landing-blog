import React from 'react'
import { Config } from '@constants'
import Layout from '@components/Layout'
import HelmetHelper from '@components/HelmetHelper'

const createTermsData = (title, body) => ({ title, body })

const termsData = [
  createTermsData(
    `Your ${Config.WEBSITE_NAME} Account and Site`,
    `If you create an account on the Website, you are responsible for maintaining the security of your account and experiments, and you are fully responsible for all activities that occur under the account.

    </br></br>

    When creating an account, the user needs to provide accurate and complete data. Failing to do so is in breach of the Terms and Conditions stated here. Only personal accounts can be connected to ${Config.WEBSITE_NAME}. Each ${Config.WEBSITE_NAME} account is valid for only one LinkedIn account.

    </br></br>

    You must immediately notify ${Config.WEBSITE_NAME} of any unauthorized uses of your account or any other breaches of security. The user must not share their password with third parties. ${Config.WEBSITE_NAME} will not be liable for any acts or omissions by You, including any damages of any kind incurred as a result of such acts or omissions.`
  ),
  createTermsData(
    `Subscriptions`,
    `The product ${Config.WEBSITE_NAME} is billed on a subscription basis. The 7-day free trial is applicable only to the first account added to a subscription plan. If you add a second account to an existing subscription the charges for this account will begin the date the account is added. The subscription is monthly and the payment is collected at the time of subscribing and after the first month on the same date every following month. After being renewed, the subscription will continue under the same conditions as the previous month.

    </br></br>

    The payment method needs to be valid, otherwise the subscription will be terminated. The customer should provide accurate and complete billing information. Once provided with the billing information, ${Config.WEBSITE_NAME} is authorized to and will automatically collect the fee for the subscription every month. The date of fee collection cannot be changed.

    </br></br>

    The subscription will last until it’s terminated by the customer or ${Config.WEBSITE_NAME}. It can be terminated at every given moment and can be renewed immediately after.

    </br></br>

    ${Config.WEBSITE_NAME} keeps its right to change the amount of the fee at any time. The users will be informed in advance and will be given the choice to terminate their subscription or continue using the product with the new price of the subscription.`
  ),
  createTermsData(
    `Refunds`,
    `Unless required by law, the subscriptions fees are nonrefundable.`
  ),
  createTermsData(
    `Responsibility of Contributors`,
    `If you post material to the Website, post links on the Website, or otherwise make (or allow any third party to make) material available by means of the Website (any such material, "Content"), You are entirely responsible for the content of, and any harm resulting from, that Content. That is the case regardless of whether the Content in question constitutes text, graphics, an audio file, or computer software. By making Content available, you represent and warrant that:

    <ul>
      <li>
        the downloading, copying and use of the Content will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark or trade secret rights, of any third party;
      </li>
      <li>
        if your employer has rights to intellectual property you create, you have either (i) received permission from your employer to post or make available the Content, including but not limited to any software, or (ii) secured from your employer a waiver as to all rights in or to the Content;
      </li>
      <li>
        you have fully complied with any third-party licenses relating to the Content, and have done all things necessary to successfully pass through to end users any required terms;
      </li>
      <li>
        the Content does not contain or install any viruses, worms, malware, Trojan horses or other harmful or destructive content;
      </li>
      <li>
        the Content is not spam, is not machine- or randomly-generated, and does not contain unethical or unwanted commercial content designed to drive traffic to third party sites, or to further unlawful acts (such as phishing) or mislead recipients as to the source of the material (such as spoofing);
      </li>
      <li>
        the Content is not pornographic, does not contain threats or incite violence, and does not violate the privacy or publicity rights of any third party;
      </li>
    </ul></br>

    Without limiting any of those representations or warranties, ${Config.WEBSITE_NAME} has the right (though not the obligation) to, in ${Config.WEBSITE_NAME}’s sole discretion (i) refuse or remove any content that, in ${Config.WEBSITE_NAME}’s reasonable opinion, violates any ${Config.WEBSITE_NAME} policy or is in any way harmful or objectionable, or (ii) terminate or deny access to and use of the Website to any individual or entity for any reason, in ${Config.WEBSITE_NAME}’s sole discretion. ${Config.WEBSITE_NAME} will have no obligation to provide a refund of any amounts previously paid.`
  ),
  createTermsData(
    'LinkedIn',
    `${Config.WEBSITE_NAME} is not authorized as an official feature of LinkedIn. ${Config.WEBSITE_NAME} does not take responsibility for the practices and policies of LinkedIn.

    </br></br>

    ${Config.WEBSITE_NAME} is not responsible for the personal account of the user or what purposes the product is used for. ${Config.WEBSITE_NAME} is not responsible or liable, in case of a banning of the user’s account due to the activities executed by the user.`
  ),
  createTermsData(
    'Responsibility of Website Visitors',
    `${Config.WEBSITE_NAME} has not reviewed, and cannot review, all of the material, including computer software, posted through the Website, and cannot therefore be responsible for that material’s content, use or effects. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. The Website may contain content that is offensive, indecent, or otherwise objectionable, as well as content containing technical inaccuracies, typographical mistakes, and other errors. The Website may also contain material that violates the privacy or publicity rights, or infringes the intellectual property and other proprietary rights, of third parties, or the downloading, copying or use of which is subject to additional terms and conditions, stated or unstated. ${Config.WEBSITE_NAME} disclaims any responsibility for any harm resulting from the use by visitors of the Website, or from any downloading by those visitors of content there posted.`
  ),
  createTermsData(
    'Acceptable Use',
    `You must not:

    <ul>
      <li>
        use the Website to manage LinkedIn accounts you do not own and operate or to which you have not been given authorized access.
      </li>
      <li>
        engage in or to instigate actions that may have an adverse effect on the stability and performance of the Website or other services. ${Config.WEBSITE_NAME} may choose to set limits on the use of a resource through quotas, time limits, and other mechanisms.
      </li>
      <li>
        engage in any activity that is intended to harm Website's systems, other customers, other systems, or end users of other services and websites.
      </li>
      <li>
        distribute, publish, send, or facilitate the sending of unsolicited mass e-mails, LinkedIn messages or other messages.
      </li>
      <li>
        use, or facilitate use of, the Website in a manner, which violates any applicable law or regulation.
      </li>
    </ul></br>

    ${Config.WEBSITE_NAME} reserves the right to take immediate action to suspend or terminate your account if, in its sole and exclusive discretion, you are engaging in activities that violate this agreement. Any termination or suspension may be undertaken with or without notice to you.`
  ),
  createTermsData(
    'Content Posted on Other Websites',
    `We have not reviewed, and cannot review, all of the material, including computer software, made available through the websites and webpages to which ${Config.WEBSITE_NAME} links, and that link to ${Config.WEBSITE_NAME}. ${Config.WEBSITE_NAME} does not have any control over those non-${Config.WEBSITE_NAME} websites and webpages, and is not responsible for their contents or their use. By linking to a non-${Config.WEBSITE_NAME} website or webpage, ${Config.WEBSITE_NAME} does not represent or imply that it endorses such website or webpage. You are responsible for taking precautions as necessary to protect yourself and your computer systems from viruses, worms, Trojan horses, and other harmful or destructive content. ${Config.WEBSITE_NAME} disclaims any responsibility for any harm resulting from your use of non-${Config.WEBSITE_NAME} websites and webpages.`
  ),
  createTermsData(
    'Intellectual Property',
    `This Agreement does not transfer from ${Config.WEBSITE_NAME} to you any ${Config.WEBSITE_NAME} or third party intellectual property, and all right, title and interest in and to such property will remain (as between the parties) solely with ${Config.WEBSITE_NAME}. ${Config.WEBSITE_NAME}, its logo, and all other trademarks, service marks, graphics and logos used in connection with ${Config.WEBSITE_NAME}, or the Website are trademarks or registered trademarks of ${Config.WEBSITE_NAME} or ${Config.WEBSITE_NAME}'s licensors. Other trademarks, service marks, graphics and logos used in connection with the Website may be the trademarks of other third parties. Your use of the Website grants you no right or license to reproduce or otherwise use any ${Config.WEBSITE_NAME} or third-party trademarks.`
  ),
  createTermsData(
    'Changes',
    `${Config.WEBSITE_NAME} reserves the right, at its sole discretion, to modify or replace any part of this Agreement. It is your responsibility to check this Agreement periodically for changes. Your continued use of or access to the Website following the posting of any changes to this Agreement constitutes acceptance of those changes. ${Config.WEBSITE_NAME} may also, in the future, offer new services and/or features through the Website (including, the release of new tools and resources). Such new features and/or services shall be subject to the terms and conditions of this Agreement.`
  ),
  createTermsData(
    'Termination',
    `${Config.WEBSITE_NAME} may terminate your access to all or any part of the Website at any time, with or without cause, with or without notice, effective immediately. If you wish to terminate this Agreement or your ${Config.WEBSITE_NAME} account (if you have one), you may simply discontinue using the Website. All provisions of this Agreement which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.`
  ),
  createTermsData(
    'Disclaimer of Warranties',
    `The Website is provided "as is". ${Config.WEBSITE_NAME} and its suppliers and licensors hereby disclaim all warranties of any kind, express or implied, including, without limitation, the warranties of merchantability, fitness for a particular purpose and non-infringement. Neither ${Config.WEBSITE_NAME} nor its suppliers and licensors, makes any warranty that the Website will be error free or that access thereto will be continuous or uninterrupted. You understand that you download from, or otherwise obtain content or services through, the Website at your own discretion and risk.`
  ),
  createTermsData(
    'Limitation of Liability',
    `In no event will ${Config.WEBSITE_NAME}, or its suppliers or licensors, be liable with respect to any subject matter of this agreement under any contract, negligence, strict liability or other legal or equitable theory for: (i) any special, incidental or consequential damages; (ii) the cost of procurement for substitute products or services; (iii) for interruption of use or loss or corruption of data; or (iv) for any amounts that exceed the fees paid by you to ${Config.WEBSITE_NAME} under this agreement during the twelve (12) month period prior to the cause of action. ${Config.WEBSITE_NAME} shall have no liability for any failure or delay due to matters beyond their reasonable control. The foregoing shall not apply to the extent prohibited by applicable law.`
  ),
  createTermsData(
    'General Representation and Warranty',
    `You represent and warrant that (i) your use of the Website will be in strict accordance with the ${Config.WEBSITE_NAME} Privacy Policy, with this Agreement and with all applicable laws and regulations (including without limitation any local laws or regulations in your country, state, city, or other governmental area, regarding online conduct and acceptable content, and including all applicable laws regarding the transmission of technical data exported from the United States or the country in which you reside) and (ii) your use of the Website will not infringe or misappropriate the intellectual property rights of any third party.

    </br></br>

    You or ${Config.WEBSITE_NAME} may identify the other as a user or customer and may use the other’s company name and logo in blog posts, press releases, advertisements, and on their respective websites. You also grant ${Config.WEBSITE_NAME} a non-exclusive license to use your trademarks for the purpose of referring to you within the user interface for the Website. ${Config.WEBSITE_NAME}’s right to use your name and logo may be revoked by writing to <a href=mailto:${Config.EMAIL}>${Config.EMAIL}</a>.`
  ),
  createTermsData(
    'Indemnification',
    `You agree to indemnify and hold harmless ${Config.WEBSITE_NAME}, its contractors, and its licensors, and their respective directors, officers, employees and agents from and against any and all claims and expenses, including attorneys’ fees, arising out of your use of the Website, including but not limited to your violation of this Agreement.`
  ),
  createTermsData(
    'Miscellaneous',
    `This Agreement constitutes the entire agreement between ${Config.WEBSITE_NAME} and you concerning the subject matter hereof, and they may only be modified by a written amendment signed by an authorized executive of ${Config.WEBSITE_NAME}, or by the posting by ${Config.WEBSITE_NAME} of a revised version.

    </br></br>

    If any part of this Agreement is held invalid or unenforceable, that part will be construed to reflect the parties’ original intent, and the remaining portions will remain in full force and effect. A waiver by either party of any term or condition of this Agreement or any breach thereof, in any one instance, will not waive such term or condition or any subsequent breach thereof. You may assign your rights under this Agreement to any party that consents to, and agrees to be bound by, its terms and conditions; ${Config.WEBSITE_NAME} may assign its rights under this Agreement without condition. This Agreement will be binding upon and will inure to the benefit of the parties, their successors and permitted assigns.
    `
  ),
  createTermsData(
    'Disclaimer',
    `The data, graphics, images and information available on this website are for informational purposes only and not for the purposes of providing professional investing or trading advice. None of the content on the site is to be taken as a recommendation to enter in any transaction. You should use the information available for your own analysis or contact an investment or trading professional.

    The use of ${Config.WEBSITE_NAME} is solely a risk taken by the user. ${Config.WEBSITE_NAME} can be used from all parts of the world at any time. However, ${Config.WEBSITE_NAME} does not take responsibility for the product being interrupted or unavailable at times. ${Config.WEBSITE_NAME} will inform its users in case of maintenance of the website and/or the product unless it being an emergency.`
  ),
  createTermsData(
    'Governing law, jurisdiction, and venue',
    `These Terms and Conditions are governed and construed in accordance with the laws of the Slovak Republic, and any action or proceeding related to this Terms of Use will be brought in Bratislava, Slovak Republic.
    `
  ),
  createTermsData(
    'Outside links',
    `${Config.WEBSITE_NAME} has no responsibility for the contents of the linked websites and links should not be taken as endorsements or recommendations of any kind.
    `
  ),
]

const Terms = () => (
  <Layout>
    <HelmetHelper
      title={`Terms of use - ${Config.NAME}`}
      description={`These terms and conditions govern all use of the
        ${Config.WEBSITE_NAME} website and all content, services and products
        available`}
    />
    <div className="w-full max-w-2xl mx-auto py-20">
      <h1 className="text-center text-4xl font-bold mb-8">Terms of Use</h1>
      <p className="text-lg leading-relaxed font-light text-gray-600 mb-8">
        The following terms and conditions govern all use of the
        {Config.WEBSITE_NAME} website and all content, services and products
        available at or through the website (&quot;Website&quot;). The Website
        is owned and operated by {Config.COMPANY_NAME}. The Website is offered
        subject to your acceptance without modification of all of the terms and
        conditions contained herein and all other operating rules, policies
        (including, without limitation, {Config.WEBSITE_NAME}&apos;s Privacy
        Policy) and procedures that may be published from time to time on this
        Site by {Config.WEBSITE_NAME} (collectively, the &quot;Agreement&quot;).
      </p>

      <p className="text-base leading-relaxed text-gray-600 mb-8">
        Please read this Agreement carefully before accessing or using the
        Website. By accessing or using any part of the web site, you agree to
        become bound by the terms and conditions of this agreement. If you do
        not agree to all the terms and conditions of this agreement, then you
        may not access the Website or use any services. If these terms and
        conditions are considered an offer by {Config.WEBSITE_NAME}, acceptance
        is expressly limited to these terms. The Website is available only to
        individuals who are at least 13 years old.
      </p>
      {termsData.map((data) => (
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
