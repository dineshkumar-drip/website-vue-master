<template>
  <page-section
    section-class="section-growth text-white"
    id="page-form"
    :class="page === 'newsroom' ? 'section-newsroom' : page"
  >
    <heading :text="dictionary.text" center v-if="dictionary.text" />
    <div class="inner-section">
      <b-container fluid>
        <b-row class="justify-content-between align-items-center">
          <b-col
            class="text-center text-md-left d-none d-lg-block"
            :lg="6"
            :cols="12"
          >
            <heading :text="dictionary.title" color="white" />
            <template v-if="page !== 'newsroom'">
              <p v-if="dictionary.desc">
                {{ dictionary.desc }}
                <a
                  v-if="dictionary.desc2"
                  id="contact-home-importer"
                  :href="'tel:' + $t('us.phone')"
                  >{{ $t('us.phone') }}</a
                >
                <span v-if="dictionary.desc2">{{ dictionary.desc2 }}</span>
              </p>
            </template>
            <template v-else>
              <p>{{ dictionary.desc }}</p>
              <br />
              <p>{{ dictionary.desc2 }}</p>
            </template>
          </b-col>
          <b-col class="text-left mt-4 mt-md-0 mx-auto" :lg="6" :cols="12">
            <investor-form v-if="page === 'investors'" />
            <contact-form v-else-if="page === 'importers'" />
            <partner-form v-else-if="page === 'channelPartner'" />
            <subscribe-form v-else-if="page === 'newsroom'" />
            <apply-form v-else />
          </b-col>
        </b-row>
      </b-container>
    </div>
  </page-section>
</template>

<script>
import PageSection from '~/components/PageSection'
import Heading from '~/components/common/ImpoExpo/Heading'
import ApplyForm from '~/components/common/ImpoExpo/ApplyForm'
import SubscribeForm from '~/components/newsroom/SubscribeForm'
import InvestorForm from '~/components/investors/2021/InvestorForm'
import ContactForm from '~/components/importers/2021/ContactForm'
import PartnerForm from '~/components/forms/PartnerForm'

export default {
  props: {
    page: {
      type: String,
      default: 'exporters'
    }
  },
  computed: {
    dictionary() {
      return this.$t(`pages.${this.page}.growth`)
    }
  },
  components: {
    PageSection,
    Heading,
    ApplyForm,
    InvestorForm,
    ContactForm,
    PartnerForm,
    SubscribeForm
  }
}
</script>

<style lang="scss" scoped>
@import '~assets/scss/variables';
@import '~bootstrap/scss/mixins';

.section-growth {
  position: relative;
  padding-bottom: 5rem;
  background: $dark-blue;

  &.exporters {
    .inner-section {
      padding-top: 10rem;
    }
  }
  &.investors {
    .inner-section {
      padding-bottom: 10rem;
      padding-top: 14rem;
    }
  }

  &.channelPartner {
    .inner-section {
      padding-bottom: 6rem;
      padding-top: 11rem;
    }
  }

  .inner-section {
    padding-top: 6rem;
    padding-bottom: 8rem;
  }
}

.section-newsroom {
  .inner-section {
    background: $primary;
  }
}

@include media-breakpoint-down(md) {
  .section-growth .inner-section {
    padding-top: 0;
    padding-bottom: 0;
  }
  .section-growth {
    &.exporters {
      padding-bottom: 0;
      .inner-section {
        padding-top: 0;
      }
    }
    &.investors,
    &.channelPartner {
      padding: 0;
      .inner-section {
        padding-top: 2rem;
        padding-bottom: 0;
      }
    }
  }
}
</style>
