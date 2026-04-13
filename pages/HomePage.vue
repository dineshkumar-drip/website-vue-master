<template>
  <section class="impo-expo exporters-container">
    <main-header />
    <main-hero page="homePage" />

    <finance-options class="mt-md-8 mt-0" />

    <advantage class="mt-8 mt-lg-10 mx-0 mx-md-5 mx-xl-0" />
    <capital class="mt-8 mt-lg-9" page="exporters" />

    <no-ssr>
      <success-stories class="mt-5 mt-lg-8" />
    </no-ssr>
    <leaders class="mt-9" />
    <awards class="mt-9" />
    <news class="mt-9" />

    <growth class="mt-9 mt-lg-10" />
    <main-footer :isNewBranding="true" />
  </section>
</template>

<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainHero from '~/components/common/ImpoExpo/MainHero'
import Solution from '~/components/common/ImpoExpo/Solution'
import MainFooter from '~/components/footer/MainFooter'
import Advantage from '~/components/common/ImpoExpo/Advantage'
import Capital from '~/components/common/ImpoExpo/Capital'
import News from '~/components/common/ImpoExpo/News'
import Leaders from '~/components/common/ImpoExpo/Leaders'
import Growth from '~/components/common/ImpoExpo/Growth'
import Conclusion from '~/components/common/ImpoExpo/Conclusion'
import Awards from '~/components/common/Awards'
import FinanceOptions from '~/components/common/FinanceOptions.vue'

export default {
  name: 'HomePage',
  props: {
    isExporters: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SuccessStories: () => import('~/components/common/ImpoExpo/SuccessStories'),
    MainHeader,
    MainHero,
    Solution,
    MainFooter,
    Capital,
    News,
    Advantage,
    Leaders,
    Growth,
    Conclusion,
    Awards,
    FinanceOptions // ✅ Registering the new component
  }
}
</script>
