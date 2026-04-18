# Vitepress with ECL Webcomponents

The repos demonstrates how to use ECL webcomponents (<https://github.com/ec-europa/ecl-webcomponents>) together with <https://vitepress.dev/>.


## TODO

- as of 18 April 2026, the NPM package `ecl-webcomponents-vue` in the NPM registry is broken. Relevant merge request: <https://github.com/ec-europa/ecl-webcomponents/pull/139> \
  Until this is merged, this project has a preinstall script in `package.json` to copy the branch with the fix and use the dependency from a local folder.
- fix server-side rendering in ecl-webcomponents and make it work in vitepress. See: <https://github.com/ec-europa/ecl-webcomponents/issues/138>
- problems with asset folder when vitepress base is not /. See: <https://github.com/ec-europa/ecl-webcomponents/issues/140>
