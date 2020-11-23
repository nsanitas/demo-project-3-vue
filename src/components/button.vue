<template>
  <div class="button-container"><button class="thqButton button-button">{{ button }}</button></div>
</template>

<script>
import '../index.css'

export default {
  name: 'Button',
  props: {
    button: {
      type: String,
      default: 'BUTTON',
    },
  },
}
</script>

<style scoped>
.button-container {
  overflow: auto;
}
.button-button {
  color: #fff;
  display: inline-block;
  font-size: 14px;
  text-align: center;
  padding-top: 10px;
  border-color: #00bcd4;
  border-style: solid;
  border-width: 1px;
  padding-left: 15px;
  border-radius: 6px;
  padding-right: 15px;
  padding-bottom: 10px;
  background-color: #00bcd4;
}
</style>
