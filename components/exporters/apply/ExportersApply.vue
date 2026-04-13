<template>
  <page-section section-class="exporters-apply">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col :cols="12" :md="7" :lg="4" class="flex-center">
          <apply-form page="exporters" border="none">
            <template slot="form-title">
              <h4 class="text-secondary card-title">
                {{ $t('pages.exporters.apply.form.title') }}
              </h4>
            </template>
          </apply-form>
        </b-col>
        <b-col
          :cols="12"
          :offset="1"
          :md="5"
          :lg="4"
          class="d-none d-md-block"
          :offset-md="0"
          :offset-lg="1"
        >
          <div class="application-img">
            <b-img-lazy
              :src="
                require(`~/assets/images/exporters/apply/eligibility-3.svg`)
              "
              :alt="$t('pages.exporters.apply.alt1')"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </page-section>
</template>

<script>
import ApplyForm from '~/components/forms/ApplyForm'
import PageSection from '~/components/PageSection'

export default {
  components: {
    ApplyForm,
    PageSection
  }
}
</script>
