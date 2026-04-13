<template>
  <section class="impo-expo exporters-container">
    <main-header />
    <main-hero page="advanceAgainstPO" class="px-4" />
    <early-access :page="'advanceAgainstPO'" class="mt-lg-10 mt-4" />
    <capital class="mt-5 mt-lg-9" page="advanceAgainstPO" />
    <who-is-this-for :page="'advanceAgainstPO'" class="mt-8 px-4" />

    <no-ssr>
      <success-stories class="mt-5 mt-lg-8" />
    </no-ssr>
    <awards class="mt-9" />
    <growth class="mt-9 mt-lg-10" />

    <main-footer :isNewBranding="true" />
  </section>
</template>

<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainHero from '~/components/common/ImpoExpo/MainHero'

import MainFooter from '~/components/footer/MainFooter'

import Growth from '~/components/common/ImpoExpo/Growth'
import EarlyAccess from '~/components/advanceAgainstPO/EarlyAccess'
import Conclusion from '~/components/common/ImpoExpo/Conclusion'
import Awards from '~/components/common/Awards'
import Capital from '~/components/common/ImpoExpo/Capital'
import WhoIsThisFor from '~/components/advanceAgainstPO/WhoIsThisFor'

export default {
  components: {
    SuccessStories: () => import('~/components/common/ImpoExpo/SuccessStories'),
    MainHeader,
    MainHero,
    MainFooter,
    Growth,
    EarlyAccess,
    Capital,
    WhoIsThisFor,
    Conclusion,
    Awards
  },
  asyncData({ app, route, redirect }) {
    if (app.i18n.locale === 'en-us') {
      return redirect(301, '/en-us/importers')
    }
  }
}
</script>
