import React from 'react'
import PropTypes from 'prop-types'
import logo1 from '@static/clients/saferpass.svg'
import logo2 from '@static/clients/uxtweak.svg'
import logo3 from '@static/clients/out2bound.svg'
import logo4 from '@static/clients/datamole.svg'
import logo5 from '@static/clients/appmixer.svg'
// import logo6 from '@static/clients/advertia.svg'
import logo7 from '@static/clients/info-msp.svg'
import Typography from '@atoms/Typography'
import styles from './clients.module.css'

const ClientLogo = ({ img, name, style }) => (
  <div className="w-1/2 flex items-center justify-center md:w-100 px-4 sm:p-0 my-5 sm:m-0">
    <img
      src={img}
      alt={`customer-${name}`}
      className={styles.clientImg}
      style={style}
    />
  </div>
)

ClientLogo.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object.isRequired,
}

const TrustedByClients = ({ customText = '' }) => (
  <div className="w-full text-center">
    <div className="pt-6 px-6 md:px-12 mx-auto max-w-full md:max-w-screen-md lg:max-w-screen-lg">
      <Typography.SUBTEXT>
        {customText
          ? `${customText} trusted by Agencies, Sales teams, and Startups`
          : 'Trusted by Agencies, Sales teams, and Startups to drive more business from LinkedIn'}
      </Typography.SUBTEXT>
      <div className="flex-wrap md:flex-nowrap justify-center md:justify-between flex items-center box-border -ml-12 sm:ml-0">
        <ClientLogo
          img={logo3}
          name="out2bound"
          style={{ maxHeight: '42px' }}
        />

        <ClientLogo img={logo2} name="uxtweak" style={{ maxHeight: '32px' }} />
        <ClientLogo img={logo4} name="datamole" style={{ maxHeight: '18px' }} />
        <ClientLogo
          img={logo1}
          name="saferpass"
          style={{ maxHeight: '32px' }}
        />
        {/* <ClientLogo img={logo6} name="advertia-digital" style={{ maxHeight: '31px' }} /> */}
        <ClientLogo img={logo7} name="info-msp" style={{ maxHeight: '30px' }} />
        <ClientLogo img={logo5} name="appmixer" style={{ maxHeight: '24px' }} />
      </div>
    </div>
  </div>
)

TrustedByClients.propTypes = {
  customText: PropTypes.string,
}

TrustedByClients.defaultProps = {
  customText: '',
}

export default TrustedByClients
