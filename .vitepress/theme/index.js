// https://vitepress.dev/guide/custom-theme
import Layout from './Layout.vue'
import './style.css'

import { ComponentLibrary } from '@ecl/ecl-webcomponents-vue'

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
    app.use(ComponentLibrary)
  }
}

