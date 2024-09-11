// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from '@sentry/nextjs'

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: 'https://0abb76d5407d5260770cdba7c3c07af0@o1289319.ingest.us.sentry.io/4507935813730304',

    // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
    tracesSampleRate: 1,

    // Setting this option to true will print useful information to the console while you're setting up Sentry.
    debug: false,
  })
}
