import Vue from 'vue'
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'

if (process.env.NODE_ENV === 'production') {
  Raven
    .config('https://b487d0659d5a44a1bb069f4718a4a790@sentry.io/1445952')
    .addPlugin(RavenVue, Vue)
    .install()
}
