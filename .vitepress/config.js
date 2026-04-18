import { defineConfig } from 'vitepress'

// import vue from '@vitejs/plugin-vue' // (already in vue: https://github.com/vuejs/vitepress/issues/3986#issuecomment-2190469437)
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'node:path'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress with ECL Webcomponents",
  description: "Feasibility Study",
  srcExclude: ['**/README.md', '**/TODO.md', 'packages'],
  base: '/',
  vite: {
    plugins: [
      vueJsx(),
    ],
    resolve: {
      alias: {
        // this folder is copied together with the script of npm run docs:build
        '/build': resolve(__dirname, '../node_modules/@ecl/ecl-webcomponents/dist/ecl-webcomponents/build'),
        '@ecl/ecl-webcomponents-vue': resolve(__dirname, '../packages/ecl-webcomponents/packages/ecl-webcomponents-vue'),
      },
      // extensions: ['.ts', '.js', '.vue', '.json'], // https://vite.dev/config/shared-options#resolve-extensions
    },
  },
  head: [
    [
      'meta', {'data-ecl-asset-path': '/'}
    ]
  ],
  vue: {
    template: {
      compilerOptions: {
        // treat all tags with a dash as custom elements
        isCustomElement: (tag) => tag.includes('-'),
      },
    },
  },
})
