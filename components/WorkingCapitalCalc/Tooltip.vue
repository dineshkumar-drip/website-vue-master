<template>
  <span class="tooltip-x">
    <font-awesome-icon
      icon="info"
      :class="[
        'ml-1 color-sky-blue-500 fa-xs',
        size === 'medium' ? 'fa-icon-info' : 'fa-icon-info fa-sm'
      ]"
    />
    <div class="tooltiptext">
      {{ tooltiptext }}
    </div>
  </span>
</template>
<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    size: {
      type: String,
      default: 'medium'
    },
    tooltiptext: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
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

.fa-icon-info {
  border: 2px solid #459ed9;
  border-radius: 50%;
  width: 14px;
  height: 14px;
  padding: 2px;
  &.fa-sm {
    border: 1px solid #459ed9;
    width: 12px;
    height: 12px;
  }
}
</style>
