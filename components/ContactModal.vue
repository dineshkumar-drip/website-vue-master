<template>
  <b-modal
    id="contact-modal"
    class="fixed-bottom text-center"
    transparent
    modal-class="contact-ae-modal"
    :title="$t('pages.contact.modalTitle')"
    hide-footer
  >
    <b-button
      v-if="!isUs"
      block
      class="contact-button"
      v-track-click
      id="landing-footer-phone"
      :href="'tel:' + $t('region.phone')"
    >
      <b-img
        class="phone-icon"
        :src="require(`~/assets/images/call-icon.svg`)"
        :alt="$t('pages.contact.title')"
      />
      {{ $t('region.contactModal', { phoneNumber: $t('region.phone') }) }}
    </b-button>
    <b-button
      v-if="isUs"
      block
      class="contact-button"
      v-track-click
      id="landing-footer-phone"
      :href="'tel:' + $t('us.phone')"
    >
      <b-img
        class="phone-icon"
        :src="require(`~/assets/images/call-icon.svg`)"
        :alt="$t('pages.contact.title')"
      />
      <span>{{
        $t('region.contactModal', { phoneNumber: $t('us.phone') })
      }}</span>
    </b-button>
    <b-button
      block
      class="button-2 contact-button"
      v-track-click
      v-if="!isUs"
      id="landing-footer-phone-india"
      :href="'tel:' + $t('region.phoneIndia')"
    >
      <b-img
        class="phone-icon"
        :src="require(`~/assets/images/call-icon.svg`)"
        :alt="$t('pages.contact.title')"
      />
      {{
        $t('region.contactIndiaModal', { phoneNumber: $t('region.phoneIndia') })
      }}
    </b-button>
  </b-modal>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
export default {
  computed: {
    isUs() {
      return this.$i18n.locale.indexOf('us') > -1
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>
<style lang="scss">
.contact-ae-modal {
  .modal-dialog {
    margin: 30% auto;
    .modal-content {
      border: none;
      border-radius: 0;
      font-size: 1em;
      padding-bottom: 10px;
    }
  }
  .call-header {
    font-size: 1em;
  }
  .contact-button {
    text-align: left;
    font-size: 14px;
    font-weight: 600;
    padding: 0.9em;
    border-radius: 0.35rem;
    margin-top: 1em;
  }
  .phone-icon {
    margin-right: 0.5rem;
  }
  .button-2 {
    background-color: #86a5d6;
    border-color: #86a5d6;
  }
}
.modal.fade {
  .modal-dialog {
    @media (max-width: 576px) {
      margin: 0;
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }
}
</style>
