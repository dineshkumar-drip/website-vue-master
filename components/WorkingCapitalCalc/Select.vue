<template>
  <div class="input-container">
    <div>
      <div class="drip-caption color-noble-blue-500 font-weight-700">
        {{ label }}
        <tooltip :tooltiptext="tooltiptext"></tooltip>
      </div>
    </div>
    <div>
      <select
        :id="id"
        :name="name"
        type="text"
        class="drip-input-field"
        :placeholder="placeholder"
        v-model="inputValue"
      >
        <option disabled value="">{{ placeholder }}</option>
        <option v-for="option in options" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
import Tooltip from './Tooltip.vue'

export default {
  components: {
    Tooltip
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: ''
    },
    tooltiptext: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      inputValue: ''
    }
  },
  watch: {
    inputValue(val) {
      this.$emit('input', val)
    },
    value(val) {
      this.inputValue = val
    }
  }
}
</script>
<style lang="scss" scoped>
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
  div:first-child {
    flex: 1;
    font-weight: 500;
  }
  div:last-child {
    flex: 1;
  }
  .drip-input-field {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #217de5;
    color: #0a2e57;
    border-radius: 4px;
    font-size: 1rem;
  }
}
</style>
