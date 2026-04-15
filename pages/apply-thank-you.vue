<template>
  <div class="dc-new">
    <RedesignAppTopBar />
    <RedesignAppNav />
    <section class="page-hero" style="min-height: 60vh; display: flex; align-items: center;">
      <div class="dc-container" style="text-align: center;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(0,194,124,0.12); display: flex; align-items: center; justify-content: center; margin: 0 auto 24px;">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h1 style="font-size: 36px; font-weight: 800; color: var(--navy); margin-bottom: 16px;">Application Received!</h1>
        <p style="font-size: 17px; color: var(--body); max-width: 480px; margin: 0 auto 32px; line-height: 1.7;">Thank you for applying. Our team will review your application and get back to you within 24 hours.</p>
        <NuxtLink to="/en-us/" class="dc-btn btn-primary btn-lg">Back to Home</NuxtLink>
      </div>
    </section>
    <RedesignAppFooter />
  </div>
</template>

<script>
export default {
  nuxtI18n: { locales: ['en-us'] },
  head() {
    return { title: 'Application Received | Drip Capital' }
  }
}
</script>
