import React from 'react'
import { Config } from '@constants'
import Layout from '@components/Layout'
import HelmetHelper from '@components/HelmetHelper'

const createTermsData = (title, body) => ({ title, body })

const privacyData = [
  createTermsData(
    '1. Definitions',
    `<b>"Customer Personal Data"</b> means Personal Data (i) that Customer uploads or otherwise provides ${Config.NAME} in connection with its use of ${Config.NAME}’s services or (ii) for which Customer is otherwise a data controller.</br></br>

    <b>"Data Controller"</b> means Customer.</br></br>

    <b>"Data Processor"</b> means ${Config.NAME}.</br></br>

    <b>"Data Protection Requirements"</b> means the Directive, the General Data Protection Regulation, Local Data Protection Laws, any subordinate legislation and regulation implementing the General Data Protection Regulation, and all Privacy Laws.</br></br>

    <b>"Directive"</b> means the EU Data Protection Directive 95/46/EC.</br></br>

    <b>"EU Personal Data"</b> means Personal Data the sharing of which pursuant to this Agreement is regulated by the Directive, the General Data Protection Regulation and Local Data Protection Laws.</br></br>

    <b>"General Data Protection Regulation"</b> means the European Union Regulation on the protection of individuals with regard to the processing of personal data and on the free movement of such data.</br></br>

    <b>"Personal Data"</b> means information about an individual that (a) can be used to identify, contact or locate a specific individual, including data that Customer chooses to provide to ${Config.NAME} from services such as applicant tracking systems (ATSs) or customer-relationships management (CRM) services; (b) can be combined with other information that can be used to identify, contact or locate a specific individual; or (c) is defined as "personal data" or "personal information" by applicable laws or regulations relating to the collection, use, storage or disclosure of information about an identifiable individual.</br></br>

    <b>"Personal Data Breach"</b> means any accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to Customer Personal Data.</br></br>

    <b>"Privacy Laws"</b> means all applicable laws, regulations, and other legal requirements relating to (a) privacy, data security, consumer protection, marketing, promotion, and text messaging, email, and other communications; and (b) the use, collection, retention, storage, security, disclosure, transfer, disposal, and other processing of any Personal Data.</br></br>

    <b>"Process"</b> and its cognates mean any operation or set of operations which is performed on Personal Data or on sets of Personal Data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</br></br>

    <b>"Subprocessor"</b> means any entity which provides processing services to ${Config.NAME} in furtherance of ${Config.NAME}’s processing on behalf of Customer.</br></br>

    <b>"Supervisory Authority"</b> means an independent public authority which is established by a European Union member state pursuant to Article 51 of the General Data Protection Regulation.</br></br>`
  ),
  createTermsData(
    `2. Nature of Data Processing`,
    `Each party agrees to process Personal Data received under the Agreement only for the purposes set forth in the Agreement. For the avoidance of doubt, the categories of Personal Data processed and the categories of data subjects subject to this DPA are described in Schedule A to this DPA.`
  ),
  createTermsData(
    '3. Compliance with laws',
    `The parties shall each comply with their respective obligations under all applicable Data Protection Requirements.`
  ),
  createTermsData(
    '4. Customer obligations',
    `Customer agrees to:<br/></br>
    4.1 Provide instructions to ${Config.NAME} and determine the purposes and general means of ${Config.NAME}’s processing of Customer Personal Data in accordance with the Agreement; and
    </br></br>
    4.2 Comply with its protection, security and other obligations with respect to Customer Personal Data prescribed by Data Protection Requirements for data controllers by: (a) establishing and maintaining a procedure for the exercise of the rights of the individuals whose Customer Personal Data are processed on behalf of Customer; (b) processing only data that has been lawfully and validly collected and ensuring that such data will be relevant and proportionate to the respective uses; and (c) ensuring compliance with the provisions of this Agreement by its personnel or by any third-party accessing or using Customer Personal Data on its behalf.
    `
  ),
  createTermsData(
    `5. ${Config.NAME} obligations`,
    `5.1 Processing Requirements. ${Config.NAME} will:<br/></br>

    a. Process Customer Personal Data (i) only for the purpose of providing, supporting and improving ${Config.NAME}’s services (including to provide insights and other reporting), using appropriate technical and organizational security measures; and (ii) in compliance with the instructions received from Customer. ${Config.NAME} will not use or process the Customer Personal Data for any other purpose. ${Config.NAME} will promptly inform Customer in writing if it cannot comply with the requirements under Sections 5-8 of this DPA, in which case Customer may terminate the Agreement or take any other reasonable action, including suspending data processing operations;<br/></br>

    b. Inform Customer promptly if, in ${Config.NAME}’s opinion, an instruction from Customer violates applicable Data Protection Requirements;<br/></br>

    c. If ${Config.NAME} is collecting Customer Personal Data from individuals on behalf of Customer, follow Customer’s instructions regarding such Customer Personal Data collection (including with regard to the provision of notice and exercise of choice);<br/></br>

    d. Take commercially reasonable steps to ensure that (i) persons employed by it and (ii) other persons engaged to perform on ${Config.NAME}’s behalf comply with the terms of the Agreement;<br/></br>

    e. Ensure that its employees, authorized agents and any Subprocessors are required to comply with and acknowledge and respect the confidentiality of the Customer Personal Data, including after the end of their respective employment, contract or assignment;<br/></br>

    f. If it intends to engage Subprocessors to help it satisfy its obligations in accordance with this DPA or to delegate all or part of the processing activities to such Subprocessors, exclusive of the list of Subprocessors ${Config.NAME} maintains online (see below)<br/></br>

    g. Upon request, provide Customer with a summary of ${Config.NAME}’s privacy and security policies; and<br/></br>

    h. Inform Customer if ${Config.NAME} undertakes an independent security review.<br/></br>

    5.2 Notice to Customer. ${Config.NAME} will inform Customer if ${Config.NAME} becomes aware of:<br/></br>

    a. Any non-compliance by ${Config.NAME} or its employees with Sections 5-8 of this DPA or the Data Protection Requirements relating to the protection of Customer Personal Data processed under this DPA;<br/></br>

    b. Any legally binding request for disclosure of Customer Personal Data by a law enforcement authority, unless ${Config.NAME} is otherwise forbidden by law to inform Customer, for example to preserve the confidentiality of an investigation by law enforcement authorities;<br/></br>

    c. Any notice, inquiry or investigation by a Supervisory Authority with respect to Customer Personal Data; or<br/></br>

    d. Any complaint or request (in particular, requests for access to, rectification or blocking of Customer Personal Data) received directly from data subjects of Customer. ${Config.NAME} will not respond to any such request without Customer’s prior written authorization.<br/></br>

    5.3 Assistance to Customer. ${Config.NAME} will provide reasonable assistance to Customer regarding:<br/></br>

    a. Any requests from Customer data subjects in respect of access to or the rectification, erasure, restriction, portability, blocking or deletion of Customer Personal Data that ${Config.NAME} processes for Customer. In the event that a data subject sends such a request directly to ${Config.NAME}, ${Config.NAME} will promptly send such request to Customer;<br/></br>

    b. The investigation of Personal Data Breaches and the notification to the Supervisory Authority and Customer's data subjects regarding such Personal Data Breaches; and<br/></br>

    c. Where appropriate, the preparation of data protection impact assessments and, where necessary, carrying out consultations with any Supervisory Authority.<br/></br>

    5.4 Required Processing. If ${Config.NAME} is required by Data Protection Requirements to process any Customer Personal Data for a reason other than providing the services described in the Agreement, ${Config.NAME} will inform Customer of this requirement in advance of any processing, unless ${Config.NAME} is legally prohibited from informing Customer of such processing (e.g., as a result of secrecy requirements that may exist under applicable EU member state laws).<br/></br>

    5.5 Security. ${Config.NAME} will:<br/></br>

    a. Maintain appropriate organizational and technical security measures (including with respect to personnel, facilities, hardware and software, storage and networks, access controls, monitoring and logging, vulnerability and breach detection, incident response, encryption of Customer Personal Data while in transit and at rest) to protect against unauthorized or accidental access, loss, alteration, disclosure or destruction of Customer Personal Data;<br/></br>

    b. Be responsible for the sufficiency of the security, privacy, and confidentiality safeguards of all ${Config.NAME} personnel with respect to Customer Personal Data and liable for any failure by such ${Config.NAME} personnel to meet the terms of this DPA;<br/></br>

    c. Take reasonable steps to confirm that all ${Config.NAME} personnel are protecting the security, privacy and confidentiality of Customer Personal Data consistent with the requirements of this DPA; and<br/></br>

    d. Notify Customer of any Personal Data Breach by ${Config.NAME}, its Subprocessors, or any other third-parties acting on ${Config.NAME}’s behalf without undue delay of becoming aware of a Personal Data Breach.<br/></br>`
  ),
  createTermsData(
    '6. Audit, certification',
    `6.1 Supervisory Authority Audit. If a Supervisory Authority requires an audit of the data processing facilities from which ${Config.NAME} processes Customer Personal Data in order to ascertain or monitor Customer's compliance with Data Protection Requirements, ${Config.NAME} will cooperate with such audit. Customer is responsible for all costs and fees related to such audit, including all reasonable costs and fees for any and all time ${Config.NAME} expends for any such audit, in addition to the rates for services performed by ${Config.NAME}.<br/><br/>

    6.2 DPO requests. ${Config.NAME} must, upon Customer’s request (not to exceed one request per calendar year) by email to <a style="color:#1976d2" href=mailto:${Config.EMAIL}>${Config.EMAIL}</a>, certify compliance with Sections 5-8 of this DPA in writing.`
  ),
  createTermsData(
    '7. Data transfers',
    `For transfers of EU Personal Data to ${Config.NAME} for processing by ${Config.NAME} in a jurisdiction other than a jurisdiction in the EU, the EEA, or the European Commission-approved countries providing ‘adequate’ data protection, ${Config.NAME} agrees it will provide at least the same level of privacy protection for EU Personal Data as required under the U.S.-EU and U.S.-Swiss Privacy Shield frameworks.`
  ),
  createTermsData(
    '8. Data return and deletion',
    `The parties agree that on the termination of the data processing services or upon Customer’s reasonable request, ${Config.NAME} shall, and shall cause any Subprocessors to, at the choice of Customer, return all the Customer Personal Data and copies of such data to Customer or securely destroy them and demonstrate to the satisfaction of Customer that it has taken such measures, unless Data Protection Requirements prevent ${Config.NAME} from returning or destroying all or part of the Customer Personal Data disclosed. In such case, ${Config.NAME} agrees to preserve the confidentiality of the Customer Personal Data retained by it and that it will only actively process such Customer Personal Data after such date in order to comply with applicable laws.`
  ),
  createTermsData(
    '9. Third party data processors',
    `Customer acknowledges that in the provision of some services (such CRMs), ${Config.NAME}, on receipt of instructions from Customer, may transfer Customer Personal Data to and otherwise interact with third party data processors.`
  ),
  createTermsData(
    '10. Term',
    `This DPA shall remain in effect as long as ${Config.NAME} carries out Personal Data processing operations on behalf of Customer or until the termination of the ${Config.NAME} Contract (and all Personal Data has been returned or deleted in accordance with Section 8 above).`
  ),
  createTermsData(
    '11. Governing law, jurisdiction, and venue',
    `Notwithstanding anything in the Agreement to the contrary, this DPA shall be governed by the laws of the Slovak Republic, and any action or proceeding related to this DPA (including those arising from non contractual disputes or claims) will be brought in Bratislava, Slovak Republic.`
  ),
  createTermsData(
    '12. Appending',
    `List of Sub-Processors: </br></br>

    Amazon Web Services, Inc.</br>
    Cloudflare, Inc.</br>
    Bright Data Ltd.</br>
    Google, Inc.</br>

    </br>

    Last updated at 22 December 2021
    `
  ),
]

const Terms = () => (
  <Layout>
    <HelmetHelper
      title={`Data Processing Agreement - ${Config.NAME}`}
      description={`Learn how ${Config.NAME} safeguards and processes your data.`}
    />
    <div className="w-full max-w-2xl mx-auto py-20">
      <h1 className="text-center text-4xl font-bold mb-8">
        Data Processing Agreement
      </h1>
      <p className="text-lg leading-relaxed font-light text-gray-600 mb-8">
        This Data Processing Agreement (the &quot;DPA&quot;), entered into by
        the {Config.NAME} customer identified on the applicable {Config.NAME}{' '}
        ordering document for {Config.NAME} services (&quot;Customer&quot;) and
        the {Config.NAME} company identified on the ordering document (&quot;
        {Config.NAME}&quot;), governs the processing of personal data that
        Customer uploads or otherwise provides {Config.NAME} in connection with
        the services and the processing of any personal data that {Config.NAME}{' '}
        uploads or otherwise provides to Customer in connection with the
        services.
      </p>
      {privacyData.map((data) => (
        <div key={data.title} className="mb-8">
          <h3 className="text-2xl text-gray-800 font-semibold mb-3">
            {data.title}
          </h3>
          <p
            className="text-base leading-relaxed text-gray-600"
            /* eslint-disable-next-line react/no-danger */
            dangerouslySetInnerHTML={{ __html: data.body }}
          />
        </div>
      ))}
    </div>
  </Layout>
)

export default Terms
