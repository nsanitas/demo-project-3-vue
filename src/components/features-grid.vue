<template>
  <div class="features-grid-grid-section">
    <span class="features-grid-text">What can you do with components</span>
    <div class="features-grid-cardsgrid">
      <div class="features-grid-whitecard">
        <img
          src="https://image.flaticon.com/icons/svg/201/201572.svg"
          class="thqImage features-grid-image"
        />
        <span class="features-grid-text1">Easy to use</span>
        <span class="features-grid-text2">
          I&apos;m not a component since I&apos;m used just once. But you can right-click me, select
          &quot;Create Component&quot; and reuse me if you want.
        </span>
      </div>
      <info-card
        loremipsumdolo="This is an instance of a component. As you can see below, we reuse it."
        unlimitedorders="Analytics"
      ></info-card>
      <info-card
        loremipsumdolo="This is the same one, we just changed the text and image using overrides."
        unlimitedorders="Payments"
      ></info-card>
      <info-card
        loremipsumdolo="You can go ahead and duplicate these and use them as you see fit."
        unlimitedorders="How to use"
      ></info-card>
    </div>
  </div>
</template>

<script>
import InfoCard from './info-card'
import '../index.css'

export default {
  name: 'FeaturesGrid',
  props: {},
  components: {
    InfoCard,
  },
}
</script>

<style scoped>
.features-grid-grid-section {
  color: #fff;
  width: 100%;
  display: flex;
  padding: 100px;
  overflow: auto;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #00bcd4;
}
.features-grid-text {
  color: #ffffff;
  font-size: 32px;
}
.features-grid-cardsgrid {
  display: grid;
  grid-gap: 30px;
  align-items: start;
  padding-top: 50px;
  align-content: stretch;
  justify-items: center;
  flex-direction: column;
  justify-content: stretch;
  background-color: transparent;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
}
.features-grid-whitecard {
  display: flex;
  padding: 30px;
  max-width: 400px;
  box-sizing: border-box;
  min-height: 250px;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
}
.features-grid-image {
  width: 50px;
  height: 50px;
}
.features-grid-text1 {
  color: #000000;
  display: inline-block;
  font-size: 24px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
}
.features-grid-text2 {
  color: #000000;
  display: inline-flex;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
}
@media(max-width: 991px) {
  .features-grid-grid-section {
    padding: 50px;
  }
  .features-grid-whitecard {
    max-width: none;
    min-height: 250px;
  }
}
@media(max-width: 767px) {
  .features-grid-grid-section {
    padding: 30px;
  }
  .features-grid-cardsgrid {
    padding-top: 20px;
    grid-template-columns: 1fr;
  }
  .features-grid-whitecard {
    width: 80%;
    min-height: 250px;
    align-items: stretch;
  }
}
@media(max-width: 479px) {
  .features-grid-text {
    text-align: center;
  }
}
</style>
