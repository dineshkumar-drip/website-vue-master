<template>
  <section class="section-stats bg-secondary">
    <h3 class="text-white text-center stats-title">
      {{ $t('landing.peloton.stats.title') }}
    </h3>
    <b-container fluid>
      <b-row>
        <b-col :sm="4" class="text-center text-white">
          <div class="stat-title">
            {{ $t('landing.peloton.stats.items[0].header') }}
          </div>
          <span class="display-3 stat-number">{{
            $t('landing.peloton.stats.items[0].figure')
          }}</span>
          <p>{{ $t('landing.peloton.stats.items[0].footer') }}</p>
        </b-col>
        <b-col :sm="4" class="text-center text-white">
          <div class="stat-title">
            {{ $t('landing.peloton.stats.items[1].header') }}
          </div>
          <span class="display-3 stat-number">{{
            $t('landing.peloton.stats.items[1].figure')
          }}</span>
          <p>{{ $t('landing.peloton.stats.items[1].footer') }}</p>
        </b-col>
        <b-col :sm="4" class="text-center text-white">
          <div class="stat-title">
            {{ $t('landing.peloton.stats.items[2].header') }}
          </div>
          <span class="display-3 stat-number">{{
            $t('landing.peloton.stats.items[2].figure')
          }}</span>
          <p>{{ $t('landing.peloton.stats.items[2].footer') }}</p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
export default {}
</script>
