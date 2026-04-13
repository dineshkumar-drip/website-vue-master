<template>
  <div :class="`${!isMobile ? 'w-fit' : ''} ${classes}`">
    <a
      v-for="(platform, i) in links"
      :id="platform.id"
      :key="i"
      :href="platform.href"
      target="_blank"
      :title="platform.title"
      :data-action="platform.action"
      class="rounded-circle d-flex align-items-center justify-content-center border bg-white"
      :class="isMobile ? 'm-0 p-3' : 'm-0 mb-3 p-2'"
    >
      <b-img
        :src="require(`@/assets/images/newsroom/${platform.icon}.svg`)"
        :alt="platform.altKey"
        :width="isMobile ? 24 : 14"
        :height="isMobile ? 24 : 14"
      />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: false,
      default: () => ({})
    },
    isMobile: {
      type: Boolean,
      default: false
    },
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    links() {
      return [
        {
          href: `http://www.facebook.com/share.php?title=${this.data.title}&u=${this.data.url}`,
          id: 'blog-facebook',
          altKey: 'Facebook',
          title: 'Facebook',
          icon: 'facebook-icon'
        },
        {
          href: `http://www.linkedin.com/shareArticle?mini=true&url=${this.data.url}&title=${this.data.title}&source=blog`,
          id: 'blog-linkedin',
          altKey: 'Linkedin',
          title: 'Linkedin',
          icon: 'linkedin-icon'
        },
        {
          href: `https://twitter.com/intent/tweet?text=${this.data.title}&url=${this.data.url}`,
          id: 'blog-twitter',
          altKey: 'Twitter',
          title: 'Twitter',
          icon: 'twitter-icon'
        },
        {
          href: `https://web.whatsapp.com/send?text=${this.data.url}`,
          id: 'blog-whatsapp',
          altKey: 'Whatsapp',
          title: 'Whatsapp',
          icon: 'whatsapp-icon',
          action: 'share/whatsapp/share'
        }
      ]
    }
  }
}
</script>
<style>
.w-fit {
  width: fit-content;
}
</style>
