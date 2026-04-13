<template>
  <section class="section-what-we-do">
    <b-container>
      <b-row>
        <b-col :cols="12" :lg="7">
          <h3 class="about-section-title text-center text-lg-left">
            {{ $t('pages.about.whatWeDo.question') }}
          </h3>
          <div class="answer-text">
            {{ $t('pages.about.whatWeDo.answer.line1') }}
          </div>
          <div class="answer-text">
            {{ $t('pages.about.whatWeDo.answer.line2') }}
          </div>
          <div class="answer-text">
            {{ $t('pages.about.whatWeDo.answer.line3') }}
          </div>
        </b-col>
        <b-col :cols="5" class="d-none d-lg-flex align-items-center">
          <div class="what-we-do-background-wrapper">
            <b-img-lazy
              class="what-we-do-background"
              :src="$t('pages.about.whatWeDo.img')"
            />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {}
</script>
