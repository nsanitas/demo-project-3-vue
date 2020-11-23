<template>
  <div class="info-card-container">
    <img :src="src" class="thqImage info-card-image" />
    <span class="info-card-text">{{ title }}</span>
    <span class="info-card-text1">{{ loremipsumdolo }}</span>
  </div>
</template>

<script>
import '../index.css'

export default {
  name: 'InfoCard',
  props: {
    src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
    },
    title: {
      type: String,
      default: 'Title',
    },
    loremipsumdolo: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpi.',
    },
  },
}
</script>

<style scoped>
.info-card-container {
  width: 400px;
  display: flex;
  padding: 30px;
  overflow: auto;
  box-sizing: border-box;
  min-height: 250px;
  border-color: #ffffff;
  border-style: solid;
  border-width: 2px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}
.info-card-image {
  width: 50px;
}
.info-card-text {
  color: #ffffff;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
}
.info-card-text1 {
  color: #ffffff;
  display: inline-flex;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
}
@media(max-width: 991px) {
  .info-card-container {
    width: 300px;
  }
}
@media(max-width: 767px) {
  .info-card-container {
    width: 80%;
  }
}
</style>
