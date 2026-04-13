<template>
  <div class="custom-dropdown-container">
    <h4 class="dropdown-label">{{ label }}</h4>
    <div
      :class="
        !selectedValue.value
          ? 'custom-dropdown'
          : 'custom-dropdown custom-dropdown-active'
      "
      @click="toggleMenu"
    >
      <input
        class="custom-dropdown-input"
        type="text"
        :value="selectedValue.label"
        readonly
      />
      <b-img
        class="down-icon"
        :src="require(`~/assets/images/common/down-green.svg`)"
        alt="arrow"
      />
    </div>
    <ul class="custom-dropdown-menu" v-show="isOpen">
      <li
        class="custom-dropdown-item"
        :class="[
          item.value === selectedValue.value ? 'active-dropdown-item' : ''
        ]"
        v-for="item in items"
        :key="item.value"
        @click="selectItem(item)"
      >
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    selectedValue: {
      type: Object
    },
    onSelect: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    selectItem(item) {
      this.onSelect(item)
      this.isOpen = false // Close on selection
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~assets/scss/variables';
.custom-dropdown-container {
  position: relative;
  .dropdown-label {
    font-size: 14px;
    font-weight: 400;
    color: #0a2e57;
    margin-bottom: 8px;
    font-family: 'Nunito Sans';
  }
  .custom-dropdown-active {
    border: 1px solid black !important;
  }
  .custom-dropdown {
    width: 392px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    height: 56px;
    border: 1px solid #217de5;
    z-index: 1;
    background-color: transparent;
    &:hover {
      cursor: pointer;
    }
    .custom-dropdown-input {
      border: none;
      outline: none;
      width: 100%;
      height: 100%;
      font-weight: 700;
      color: #0a2e57;

      &:hover {
        cursor: pointer;
      }
    }
  }
  .custom-dropdown-menu {
    position: absolute;
    top: 100%; /* Positioned below the input */
    left: 0;
    background-color: #fff;
    list-style: none;
    padding: 0;
    /** transition: all 0.3s ease-in-out; */
    min-width: 392px;
    border: 1px solid #dae9fb;
    -webkit-box-shadow: 0px 6px 12px 0px rgba(10, 46, 87, 0.22);
    -moz-box-shadow: 0px 6px 12px 0px rgba(10, 46, 87, 0.22);
    box-shadow: 0px 6px 12px 0px rgba(10, 46, 87, 0.22);

    .custom-dropdown-item {
      width: 100%;
      height: 48px;
      font-size: 16px;
      font-weight: 400;
      padding: 0 24px;
      display: flex;
      align-items: center;

      &:hover {
        background-color: #ecf5fb;
        color: #1e9263;
      }
    }

    .active-dropdown-item {
      font-weight: 700;
    }
  }
}
</style>
