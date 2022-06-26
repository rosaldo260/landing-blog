const API_VERSION = '/api'
const APP_NAME = 'Icereach'
const APP_NAME_LOWER_CASE = APP_NAME.toLowerCase()

const Config = {
  NAME: APP_NAME,
  EMAIL: `hello@${APP_NAME_LOWER_CASE}.com`,
  APP: {
    BASE_URL: `https://app.${APP_NAME_LOWER_CASE}.com`,
  },
  WEBSITE_NAME: `${APP_NAME_LOWER_CASE}.com`,
  COMPANY_NAME: 'Softwarebel s.r.o.',
  ROOT_URL: process.env.GATSBY_ROOT_URL,
  DOCS_URL: `https://docs.${APP_NAME_LOWER_CASE}.com`,
  PRICE: {
    DISCOUNT: {
      ALL: 100,
      NICKNAME: 'discount',
    },
    FULL: {
      NICKNAME: 'full',
    },
  },
  CRISP_ID: process.env.GATSBY_CRISP_ID,
  GOOGLE_ANALYTICS_ID: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
  API_ROOT: `${process.env.GATSBY_API_URL}${API_VERSION}`,
  STRIPE: {
    SEC_KEY: process.env.GATSBY_STRIPE_SEC_KEY,
  },
  LOGO_TITLE: `${APP_NAME} logo`,
  SOCIAL: {
    TWITTER: `https://twitter.com/matthlavacka`,
    FACEBOOK: `https://www.facebook.com/${APP_NAME_LOWER_CASE}com`,
    LINKEDIN: {
      PERSONAL: 'https://www.linkedin.com/in/matthlavacka/',
      COMPANY: 'https://www.linkedin.com/company/icereachcom/',
    },
  },
}

const prefixRootUrl = (internalUrl) => `${Config.ROOT_URL}${internalUrl}`

const Routes = {
  // ABOUT_US: prefixRootUrl('/about-us'),
  APP: {
    USER: {
      SIGN_UP: `${Config.APP.BASE_URL}/sign-up/`,
      SIGN_IN: `${Config.APP.BASE_URL}/sign-in/`,
    },
  },
  BLOG: {
    ALL: prefixRootUrl('/blog/'),
    POST: prefixRootUrl('/blog/:id/'),
    TEMPLATES_ARTICLE:
      'https://icereach.com/blog/7-linkedin-outreach-b2b-templates-2021/',
  },
  CALENDY: `https://calendly.com/${APP_NAME_LOWER_CASE}/meet`,
  // COMPARE: {
  //   ALL: '/alternatives',
  //   EXPANDI: '/vs/expandi',
  //   ZOPTO: '/vs/zopto',
  //   LH: '/vs/linkedhelper',
  // },
  DOCS: {
    ALL: Config.DOCS_URL,
    INTEGRATIONS: `${Config.DOCS_URL}/webhooks`,
  },
  FEATURES: {
    // ALL: '/features',
    PROSPECT: '/linkedin-prospecting',
    PERSONALIZE: '/personalize-linkedin-outreach',
    FOLLOWUP: '/automate-linkedin-followups',
    SAFETY: '/safe-linkedin-automation',
    // TARGET_AUDIENCE: '/features/target-audience',
    // FOR_TEAMS: '/features/icereach-for-teams',
  },
  LEGAL: {
    PRIVACY_POLICY: prefixRootUrl('/privacy/'),
    TOS: prefixRootUrl('/terms/'),
    GDPR: prefixRootUrl('/gdpr/'),
  },
  PRICING: prefixRootUrl('/pricing/'),
  ROOT: prefixRootUrl('/'),
  SUPPORT: {
    HELP: prefixRootUrl('/help/'),
    // FAQ: prefixRootUrl('/faq'),
  },
}

const createFeature = (link, text) => ({ link, text })

const Features = {
  PROSPECT: createFeature(Routes.FEATURES.PROSPECT, 'LinkedIn prospecting'),
  PERSONALIZE: createFeature(
    Routes.FEATURES.PERSONALIZE,
    'Personalize LinkedIn outreach'
  ),
  FOLLOWUP: createFeature(
    Routes.FEATURES.FOLLOWUP,
    'Automate LinkedIn follow-ups'
  ),
  SAFETY: createFeature(Routes.FEATURES.SAFETY, 'Safe LinkedIn automation'),
}

const Styles = {
  navbarHeight: {
    true: 'h-16',
    false: 'h-20',
  },
  bodyMargin: {
    true: 'mt-16',
    false: 'mt-20',
  },
  flyoutTop: {
    true: 'top-16',
    false: 'top-20',
  }, // Depends on navbar height for desktop,
  container:
    'w-full mx-auto max-w-full md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl',
}

export { Routes, Config, Features, Styles }
