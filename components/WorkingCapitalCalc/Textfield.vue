<template>
  <div class="input-container">
    <div>
      <div class="drip-caption color-noble-blue-500 font-weight-700 pr-2">
        {{ label }}
        <tooltip :tooltiptext="tooltiptext"></tooltip>
      </div>
    </div>
    <div class="position-relative">
      <input
        :id="id"
        :name="name"
        :type="type"
        :class="['drip-input-field', leftIcon ? 'has-left-icon' : '']"
        :placeholder="placeholder"
        v-model="inputValue"
      />
      <div v-if="leftIcon" class="leftIcon">
        {{ leftIcon }}
      </div>
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
    type: {
      type: String,
      required: true,
      default: 'text'
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
    leftIcon: {
      type: String,
      default: ''
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
  .input-label {
    width: max-content;
  }
  div:first-child {
    flex: 1;
    font-weight: 500;
  }
  div:last-child {
    flex: 1;
  }
  .drip-input-field {
    width: 100%;
    min-width: 120px;
    padding: 0.5rem;
    margin-left: auto;
    border: 1px solid #217de5;
    color: #0a2e57;
    border-radius: 4px;
    font-size: 1rem;
    &.has-left-icon {
      padding-left: 26px;
    }
  }
  .leftIcon {
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    color: #0a2e57;
    font-weight: 700;
  }
}

// custom tooltip
.tooltip-x {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* Tooltip text */
.tooltiptext {
  visibility: hidden;
  width: 250px;
  background-color: #555;
  color: #fff;
  box-shadow: 0px 2px 12px -10px #000000a3;
  text-align: center;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  top: 114%;
  left: -12px;
  font-size: 12px;
  padding: 8px;
}

.tooltiptext::after {
  content: ' ';
  position: absolute;
  bottom: 100%; /* At the top of the tooltip */
  left: 9%;
  margin-left: -8px;
  border-width: 8px;
  border-style: solid;
  border-color: transparent transparent #555 transparent;
}
/* Show the tooltip text on hover */
.tooltip-x:hover .tooltiptext {
  visibility: visible;
}
</style>
