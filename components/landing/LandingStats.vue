<template>
  <section class="section-stats bg-secondary text-white">
    <h3 class="text-center mb-4">
      {{ $t('pages.landing.tradeFinance.statsTitle') }}
    </h3>
    <b-container fluid>
      <b-row>
        <b-col
          :sm="6"
          :md="3"
          class="text-center"
          v-for="(stat, index) in $t('pages.landing.tradeFinance.stats')"
          :key="`stat-${index}`"
        >
          <span class="display-3 stat-number">
            {{ $t(`pages.landing.tradeFinance.stats[${index}].number`) }}
          </span>
          <p>
            {{ $t(`pages.landing.tradeFinance.stats[${index}].text`) }}
          </p>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
