<template>
  <section class="impo-expo investors-container">
    <main-header />
    <main-hero page="investors" />
    <advantage class="mt-8 mt-lg-10" page="investors" />
    <benefits class="mt-0 mt-lg-5" />
    <banner />
    <who-we-are class="mt-8 mt-lg-9" />
    <investors class="mt-8 mt-lg-9" page="investors" />
    <growth class="mt-9 mt-lg-10" page="investors" />
    <!-- <get-in-touch /> -->
    <!-- <investors-footer /> -->
    <main-footer :isNewBranding="true" />
  </section>
</template>

<script>
import MainHeader from '~/components/common/ImpoExpo/MainHeader'
import MainHero from '~/components/common/ImpoExpo/MainHero'
import MainFooter from '~/components/footer/MainFooter'
import Advantage from '~/components/common/ImpoExpo/Advantage'
import Growth from '~/components/common/ImpoExpo/Growth'
import Investors from '~/components/about/2021/Investors'
import Benefits from '~/components/investors/2021/Benefits'
import Banner from '~/components/investors/2021/Banner'
import WhoWeAre from '~/components/investors/2021/WhoWeAre'
import GetInTouch from '~/components/investors/2021/GetInTouch'
import InvestorsFooter from '~/components/investors/2021/InvestorsFooter'

export default {
  components: {
    MainHeader,
    MainHero,
    Advantage,
    Benefits,
    Banner,
    Investors,
    WhoWeAre,
    Growth,
    GetInTouch,
    InvestorsFooter,
    MainFooter
  }
}
</script>
