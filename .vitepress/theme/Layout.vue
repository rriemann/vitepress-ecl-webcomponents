<script setup>
import { useData } from 'vitepress'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>

<template>
  <ecl-site-header
    login-block
    language-block
    search-block
    search-text="search"
    search-placeholder="Placeholder text"
    language="EN"
    lang-code="en"
    login-text="Log in"
    logged="false"
    logged-in-text="Logged in"
    eu-label="Official EU languages:"
    non-eu-label="Other languages:"
    language-title="Choose your language"
    login-link="/example.html#7vvsc"
    logout-link="/example.html#q4zt0"
    logout-text="Log out"
    language-id="language-switcher"
    logo-alt="European Commission"
    logo-size="l"
    logo-title="European commission"
    language-aria-label="Choose language"
    site-name="News, policies, information and services"
  >
    <ecl-language-item
    slot="eu-category"
    path="/example.html#i86ic"
    lang-code="bg"
    language="български"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#0uax9"
    lang-code="es"
    language="español"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#juv1x"
    lang-code="cs"
    language="čeština"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#thp85"
    lang-code="da"
    language="dansk"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#gfqtz"
    lang-code="de"
    language="Deutsch"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#wyju8"
    lang-code="et"
    language="eesti"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#kr90a"
    lang-code="el"
    language="ελληνικά"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#sm4km"
    lang-code="en"
    language="English"
    active
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#digse"
    lang-code="fr"
    language="français"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#u9qj4"
    lang-code="ga"
    language="Gaeilge"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#be37t"
    lang-code="hr"
    language="hrvatski"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#v48hf"
    lang-code="it"
    language="italiano"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#ljhu0"
    lang-code="lv"
    language="latviešu"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#67ge6"
    lang-code="lt"
    language="lietuvių"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#9n1rj"
    lang-code="hu"
    language="magyar"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#8z2gf"
    lang-code="mt"
    language="Malti"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#aaxuk"
    lang-code="nl"
    language="Nederlands"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#0k8us"
    lang-code="pl"
    language="polski"
  ></ecl-language-item>
  <ecl-language-item

    slot="eu-category"
    path="/example.html#xp14g"
    lang-code="pt"
    language="português"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#w73zt"
    lang-code="ro"
    language="română'"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#durb1"
    lang-code="sk"
    language="slovenčina"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#3g2o6"
    lang-code="fi"
    language="suomi"
  ></ecl-language-item>
  <ecl-language-item
    slot="eu-category"
    path="/example.html#pxq09"
    lang-code="sv"
    language="svenska"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="/example.html#oga7i"
    lang-code="ar"
    language="عَرَبِيّ"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="/example.html#4yeg4"
    lang-code="ca"
    language="Català"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="/example.html#bteom"
    lang-code="is"
    language="Íslenska"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="/example.html#9fjv9"
    lang-code="lb"
    language="Lëtzebuergesch"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="/example.html#yq9c9"
    lang-code="ja"
    language="日本語"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="/example.html#15app"
    lang-code="nb"
    language="Norsk bokmål"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="/example.html#da7fs"
    lang-code="ru"
    language="русский язык"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="/example.html#lc0t4"
    lang-code="tr"
    language="Türk"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="/example.html#36f5n"
    lang-code="uk"
    language="українська мова"
  ></ecl-language-item>
  <ecl-language-item
    slot="non-eu-category"
    path="/example.html#vej4k"
    lang-code="zh"
    language="中文"
  ></ecl-language-item>

  <ecl-mega-menu
    slot="menu"
    style-class="sc-ecl-site-header-ec"
    toggle-label="Close"
    back-label="Back"
    menu-id="mega-menu-demo"
    aria-label="Main navigation"
  >
    <ecl-mega-menu-item label="Home" path="/example.html#u26yk"></ecl-mega-menu-item>
    <ecl-mega-menu-item
      label="News and media"
      has-children
      has-info
      has-featured
      see-all
      see-all-label="Discover more"
      info-title="About the news and media"
      featured-image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
      aria-label="Pages in this section"
    >
      <span slot="info">
        Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
      <ecl-mega-menu-featured-list-item
        slot="featured"
        has-description
        path="/example.html#7lxaw"
        label="Featured link 1"
        external
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
      >
        Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ecl-mega-menu-featured-list-item>
      <ecl-mega-menu-subitem
        path="/example.html#tbvun"
        label="Item 2.1"
        has-featured
        has-children
        see-all
        see-all-label="See all pages"
        aria-label="Sub-pages in this section"
      >
        <ecl-mega-menu-subitem path="/example.html#6w0ta" label="Item 2.1 subitem 1"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#js5pz" label="Item 2.1 subitem 2"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#mwrgy" label="Item 2.1 subitem 3"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#4jfn5" label="Item 2.1 subitem 4"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#u8hoh" label="Item 2.1 subitem 5"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#xf7r9" label="Item 2.1 subitem 6"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#5p3xk" label="Item 2.1 subitem 7"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#imw3x" label="Item 2.1 subitem 8"></ecl-mega-menu-subitem>
        <ecl-mega-menu-featured-list-item
          slot="featured-second"
          has-description
          path="/example.html#lwtkr"
          label="Featured link 1"
          external
          image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        >
          I belong to the sub item
        </ecl-mega-menu-featured-list-item>
      </ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem path="/example.html#htcxd" label="Item 2.2"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem
        path="/example.html#9h45f"
        label="Item 2.3"
        see-all
        see-all-label="See all pages"
      >
        <ecl-mega-menu-subitem path="/example.html#8yha8" label="Item 2.3 subitem 1"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#unfu9" label="Item 2.3 subitem 2"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#dsnfi" label="Item 2.3 subitem 3"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#jxpqq" label="Item 2.3 subitem 4"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem path="/example.html#ub9ig" label="Item 2.3 subitem 5"></ecl-mega-menu-subitem>
      </ecl-mega-menu-subitem>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item
      label="About the EU"
      has-children
      has-info
      info-title="About the European Union"
      has-featured
      one-level-only
      aria-label="Pages in this section"
    >
      <span slot="info">
        Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
      <ecl-mega-menu-featured-list-item
        slot="featured"
        has-description
        path="/example.html#x6zvb"
        label="Featured link 1"
        external
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
      >
        I belong to the sub item
      </ecl-mega-menu-featured-list-item>
      <ecl-mega-menu-subitem label="Item 3.1" path="/example.html#5nu28"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.2" path="/example.html#38hlf"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.3" path="/example.html#i0ox8"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.4" path="/example.html#o36qu"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.5" path="/example.html#r9mon"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.6" path="/example.html#tf0bd"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.7" path="/example.html#4091o"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.8" path="/example.html#b83om"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 3.9" path="/example.html#kyc4q"></ecl-mega-menu-subitem>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item
      label="About the EC"
      has-children
      info-title="About the European Commission"
      has-info
      one-level-only
      see-all
      see-all-label="Discover more"
      aria-label="Pages in this section"
    >
      <span slot="info">
        Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
      <ecl-mega-menu-subitem label="Item 4.1" path="/example.html#kyhn9"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.2" path="/example.html#kblxn"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.3" path="/example.html#vutlm"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.4" path="/example.html#34srt"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.5" path="/example.html#lej0r"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.6" path="/example.html#1205j"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.7" path="/example.html#p9qt4"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.8" path="/example.html#agmhm"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.9" path="/example.html#uu8e0"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.10" path="/example.html#2s5kw"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.11" path="/example.html#5kz7a"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 4.12" path="/example.html#hzswy"></ecl-mega-menu-subitem>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item
      label="Topics"
      has-children
      one-level-only
      aria-label="Pages in this section"
    >
      <ecl-mega-menu-subitem label="Item 5.1" path="/example.html#s9som"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.2" path="/example.html#m9bi4"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.3" path="/example.html#9yfii"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.4" path="/example.html#m4j6w"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.5" path="/example.html#f83qn"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.6" path="/example.html#qskgx"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.7" path="/example.html#vtnp3"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.8" path="/example.html#zaath"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.9" path="/example.html#tdk7j"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.10" path="/example.html#orzfz"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.11" path="/example.html#75vk3"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.12" path="/example.html#9cod1"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.13" path="/example.html#rdctl"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.14" path="/example.html#xn7kk"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.15" path="/example.html#2lfh3"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.16" path="/example.html#n360g"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.17" path="/example.html#w7wl3"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.18" path="/example.html#wrqnz"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.19" path="/example.html#7d6im"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.20" path="/example.html#57lof"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.21" path="/example.html#we404"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.22" path="/example.html#r8z23"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.23" path="/example.html#viwwn"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Item 5.24" path="/example.html#xaosj"></ecl-mega-menu-subitem>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item
      label="Key priorities"
      path="/example.html#lurf9"
      has-children
      has-info
      has-featured
      info-title="About key priorities"
      featured-title="Featured items"
      aria-label="Pages in this section"
    >
      <ecl-mega-menu-featured-list-item
        has-description
        slot="featured"
        image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        path="/example.html#gr6xm"
      >
        Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </ecl-mega-menu-featured-list-item>
      <span slot="info">
        Description text, lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </span>
      <ecl-mega-menu-subitem
        has-children
        label="Aid, Development cooperation, Fundamental rights"
        path="/example.html#r2yfw"
        aria-label="Sub-pages in this section"
      >
        <ecl-mega-menu-subitem label="A lonely item" path="/example.html#p7pjh"></ecl-mega-menu-subitem>
      </ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Energy, Climate change, Environment" path="/example.html#wdigj"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Law" path="/example.html#xkl72"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="EU regional and urban development" path="/example.html#pu7wr"></ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem
        label="Research and innovation"
        path="/example.html#366h6"
        has-children
        has-featured
        see-all
        see-all-label="see all pages"
        aria-label="Sub-pages in this section"
      >
        <ecl-mega-menu-featured-list-item
          slot="featured-second"
          image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item
          slot="featured-second"
          path="/example.html#0pe4p"
          label="Featured link 1"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item
          slot="featured-second"
          path="/example.html#kla3t"
          label="Featured link 2"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item
          slot="featured-second"
          path="/example.html#klj3l"
          label="Featured link 3"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item
          slot="featured-second"
          path="/example.html#bwcwk"
          label="Featured link 4"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-featured-list-item
          slot="featured-second"
          path="/example.html#7g7hz"
          label="Featured link 5"
        >
        </ecl-mega-menu-featured-list-item>
        <ecl-mega-menu-subitem label="How we provide aid" path="/example.html#nlbpp"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem label="Who we work with" path="/example.html#tobdp"></ecl-mega-menu-subitem>
        <ecl-mega-menu-subitem label="Get involved in EU humanitarian aid" path="/example.html#9gjzc"></ecl-mega-menu-subitem>
      </ecl-mega-menu-subitem>
      <ecl-mega-menu-subitem label="Food, Farming, Fisheries" path="/example.html#r47wd"></ecl-mega-menu-subitem>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item
      label="Engage"
      is-container
    >
      <div slot="container">
        <ecl-text tag="h2" type="heading" level="2">Title for the container</ecl-text>
        <ecl-text tag="p">Minimal content for the container</ecl-text>
      </div>
    </ecl-mega-menu-item>
    <ecl-mega-menu-item
      label="SOTEU"
      is-promotional
      path="/example.html#aq5qp"
    ></ecl-mega-menu-item>
  </ecl-mega-menu>
    <span slot="ecl-site-header-login-description">'Logged in as "last name" "first name"'</span>
  </ecl-site-header>

  <div class="ecl-container">
    <div class="ecl-row">
      <div class="ecl ecl-u-mb-2xl">
        <div v-if="frontmatter.home" class="ecl-u-mb-2xl">
          <h1>{{ site.title }}</h1>
          <p>{{ site.description }}</p>
          <ul>
            <li><a href="/markdown-examples.html">Markdown Examples</a></li>
            <li><a href="/api-examples.html">API Examples</a></li>
          </ul>
        </div>
        <div v-else>
          <a href="/">Home</a>
          <Content />
        </div>

        <ecl-featured-item
          color-mode=""
          el-id="featured-item-demo"
          variant=""
          theme="ec"
          item-title="Ut enim ad minim veniam quis nostrud exercitation"
          position="left"
          image="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg"
          link-path="/example.html#o1ds1"
          link-label="Read more"
          link-type="default"
          media-caption="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          media-behavior="static"
          vertical-alignment="top"
          media-anchor="center"
        >

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

        </ecl-featured-item>
      </div>
    </div>
  </div>

<ecl-footer-ec
  logo-alt="European Commission"
  logo-title="European Commission"
  logo-lang-code="en"
  variant="core"
  description="This site is managed by:"
  description-name="[name of the manager of the site]"
  site-name="European Commission website"
  logo-link="/example.html#69p9s"
  co-owner-title="This page is managed by:"
  co-owner-links='[{"label": "Directorate-General for [DG role]", "path": "/example.html#4q13n"},{"label": "Directorate-General for [DG role]", "path": "/example.html#sz0xz"}]'
>
  <ecl-footer-item
    link="/example.html#92tmo"
    slot="ecl-footer-list-core"
    is-first
  >
    About us
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#l4myw"
    slot="ecl-footer-list-core"
  >
    Contact us
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#kryae"
    slot="ecl-footer-list-core"
  >
    Priorities
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#tnykw"
    slot="ecl-footer-list-core"
  >
    Topics
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#xm6mm"
    slot="ecl-footer-list-core"
  >
    Funding and tenders
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#a4be9"
    slot="ecl-footer-list-core"
  >
    Jobs
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#zessg"
    slot="ecl-footer-list-core"
  >
    Press corner
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#34cg8"
    slot="ecl-footer-list-core"
  >
    Events
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#ruhmr"
    theme="ec"
  >
    Report an IT vulnerability
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#mjapr"
    slot="ecl-footer-list-bottom-left"
  >
    Languages on our websites
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#og6e6"
    slot="ecl-footer-list-bottom-left"
  >
    Cookies
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#ema0m"
    slot="ecl-footer-list-bottom-left"
  >
    Privacy policy
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#nykrd"
    slot="ecl-footer-list-bottom-left"
  >
    Legal notice
  </ecl-footer-item>
  <ecl-footer-item
    link="/example.html#im8t6"
    slot="ecl-footer-list-bottom-left"
    is-last
  >
    Accessibility
  </ecl-footer-item>
  <ecl-social-media-follow
    variant="horizontal"
    description="Follow us"
    position="left"
    style-class="ecl-site-footer__social-media sc-ecl-footer-ec-ec"
    inline-title="Follow us"
    slot="ecl-footer-social-follow"
  >
    <ecl-social-media-follow-item
      icon="x"
      color="inverted"
      hide-label
      share-path="http://example.html"
    >
      X
    </ecl-social-media-follow-item>
    <ecl-social-media-follow-item
      icon="instagram"
      color="inverted"
      hide-label
      share-path="http://instagram.com"
    >
      Instagram
    </ecl-social-media-follow-item>
    <ecl-social-media-follow-item
      icon="linkedin"
      color="inverted"
      hide-label
      share-path="http://linkedin.com"
    >
      Linkedin
    </ecl-social-media-follow-item>
    <ecl-social-media-follow-item
      icon="telegram"
      color="inverted"
      hide-label
      share-path="http://telegram.com"
    >
      Telegram
    </ecl-social-media-follow-item>
    <ecl-social-media-follow-item
      icon="chain"
      color="inverted"
      hide-label
      share-path="http://example.html"
    >
      Other
    </ecl-social-media-follow-item>
  </ecl-social-media-follow>
</ecl-footer-ec>


</template>
