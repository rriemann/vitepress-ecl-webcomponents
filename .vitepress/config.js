import { defineConfig } from 'vitepress'


// import vue from '@vitejs/plugin-vue' // (already in vue: https://github.com/vuejs/vitepress/issues/3986#issuecomment-2190469437)
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VitePress with ECL Webcomponents",
  description: "Feasibility Study",
  vite: {
    plugins: [
      vueJsx(),
    ],
    // resolve: {
    //   alias: {
    //     '@': path.join(__dirname, '../'),
    //   },
    //   extensions: ['.ts', '.js', '.vue', '.json'],
    // },
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
