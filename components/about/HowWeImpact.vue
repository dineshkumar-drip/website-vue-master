<template>
  <section class="section-how-we-impact">
    <b-container>
      <b-row>
        <b-col :cols="12" :lg="7">
          <h3 class="about-section-title text-center text-lg-left">
            {{ $t('pages.about.howWeImpact.question') }}
          </h3>
          <div class="answer-text">
            {{ $t('pages.about.howWeImpact.answer') }}
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col :cols="12" class="mt-5">
          <success :isNewSuccess="true" />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import Success from '~/components/common/Success'
export default {
  components: {
    Success
  }
}
</script>
