<template>
  <div>
    <div class="bank-details-row d-flex">
      <div
        :class="start ? 'first-row-key' : end ? 'last-row-key' : ''"
        class="bank-details-key"
      >
        <span>{{ entry.key }}</span>
      </div>
      <div
        :class="start ? 'first-row-value' : end ? 'last-row-value' : ''"
        class="bank-details-value"
      >
        <p>{{ entry.value }}</p>
        <b-button
          variant="outline"
          class="copy-btn"
          @click="copyToClip(entry.value)"
        >
          <b-img
            class="copy-to-clip"
            :src="require('~/assets/images/common/copy_to_clipboard.svg')"
          />
        </b-button>
      </div>
    </div>
    <div v-if="isToastVisible" class="custom-toast">
      <b-img :src="require('~/assets/images/common/green-check.svg')" />
      <div style="font-size: 16px; margin-left: 8px">Copied to clipboard</div>
    </div>
  </div>
</template>
<script>
import { BToast } from 'bootstrap-vue'
export default {
  props: ['entry', 'start', 'end'],
  data() {
    return {
      isToastVisible: false
    }
  },
  methods: {
    copyToClip(val) {
      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(val)
          .then(() => {
            // Successful copy
            this.isToastVisible = true
            setTimeout(() => {
              this.isToastVisible = false
            }, 5000)
          })
          .catch((err) => {
            // Clipboard write failed
            console.error('Failed to copy text:', err)
          })
      }
    }
  },
  components: {
    BToast
  }
}
</script>
<style lang="scss" scoped>
.custom-toast {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 100;
  padding: 10px;
  border: 1px solid #14b266;
  background-color: #d0fae6;
  color: #0a2e57;
  border-radius: 8px;
  display: flex;
  align-items: center;
}
.bank-details-row {
  font-size: 16px;
  width: 100%;
  align-items: stretch;
  line-height: 21px;
  margin-bottom: 4px;
  color: #0a2e57;
  .first-row-key {
    border-top-left-radius: 8px;
  }
  .first-row-value {
    border-top-right-radius: 8px;
  }
  .last-row-key {
    border-bottom-left-radius: 8px;
  }
  .last-row-value {
    border-bottom-right-radius: 8px;
  }
  .bank-details-key {
    min-height: 100%;
    padding: 12px 0;
    width: 364px;
    display: flex;
    align-items: center;
    font-weight: 700;
    border: 1px solid #6ab1e1;
    background-color: #ecf5fb;

    span {
      margin-left: 16px;
    }
  }
  .bank-details-value {
    min-height: 100%;
    padding: 12px 0;
    width: 444px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #6ab1e1;

    p {
      width: 70%;
      margin: 0;
      margin-left: 16px;
    }
    .copy-btn {
      background-color: white;
      border: none;
      padding: 0 !important;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 16px;
      width: 40px;
      height: 40px;
      .copy-to-clip {
        &:hover {
          cursor: pointer;
        }
      }
      &:focus {
        outline: none;
      }
      &:hover {
        background-color: #e7faf2;
      }
    }
  }
}
</style>
