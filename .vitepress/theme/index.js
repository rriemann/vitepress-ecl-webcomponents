// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './style.scss'

import { ComponentLibrary } from '@ecl/ecl-webcomponents-vue'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(ComponentLibrary)
  }
}

