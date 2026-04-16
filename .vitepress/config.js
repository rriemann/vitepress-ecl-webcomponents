import { defineConfig } from 'vitepress'


import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress with ECL Webcomponents",
  description: "Feasibility Study",
  vite: {
    plugins: [
      vue({
        template: {
          compilerOptions: {
            // treat all tags with a dash as custom elements
            isCustomElement: (tag) => tag.includes('-'),
          },
        },
      }),
      vueJsx(),
    ]
  },
  head: [
    [
      'meta', {'data-ecl-asset-path': '/'}
    ]
  ],
})
