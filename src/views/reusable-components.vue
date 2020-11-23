<template>
  <div class="reusable-components-container">
    <span class="reusable-components-text">Reusable Components</span>
    <div class="reusable-components-container01">
      <span class="reusable-components-text1">Section Heading</span>
      <div></div>
      <section-heading></section-heading>
    </div>
    <div class="reusable-components-container03">
      <span class="reusable-components-text2">FooterSection</span>
      <div><footer-menu></footer-menu></div>
    </div>
    <div class="reusable-components-container05">
      <span class="reusable-components-text3">Button</span>
      <app-button></app-button>
    </div>
    <div class="reusable-components-container06">
      <span class="reusable-components-text4">Pricing Card</span>
      <pricing-card></pricing-card>
    </div>
    <div class="reusable-components-container07">
      <span class="reusable-components-text5">InfoCard</span>
      <div class="reusable-components-container08"><info-card></info-card></div>
    </div>
    <div class="reusable-components-container09">
      <span class="reusable-components-text6">Review Card</span>
      <review-card></review-card>
    </div>
  </div>
</template>

<script>
import SectionHeading from '../components/section-heading'
import FooterMenu from '../components/footer-menu'
import AppButton from '../components/button'
import PricingCard from '../components/pricing-card'
import InfoCard from '../components/info-card'
import ReviewCard from '../components/review-card'

export default {
  name: 'ReusableComponents',
  components: {
    SectionHeading,
    FooterMenu,
    AppButton,
    PricingCard,
    InfoCard,
    ReviewCard,
  },
  metaInfo: {
    title: 'ReusableComponents - Demo Project 3',
    meta: [
      {
        name: 'description',
        content:
          "In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations.",
      },
      {
        property: 'og:title',
        content: 'ReusableComponents - Demo Project 3',
      },
      {
        property: 'og:description',
        content:
          "In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations.",
      },
      {
        property: 'og:image',
        content:
          'https://storage.googleapis.com/playground-bucket.teleporthq.io/aea505021c3337abe2c72fce4ca172f1',
      },
    ],
  },
}
</script>

<style scoped>
.reusable-components-container {
  width: 100%;
  display: block;
  padding: 100px;
  overflow: auto;
  font-size: 16px;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: #fff;
}
.reusable-components-text {
  display: flex;
  font-size: 2em;
  margin-bottom: 30px;
  justify-content: center;
}
.reusable-components-container01 {
  width: 100%;
  display: flex;
  align-items: center;
}
.reusable-components-text1 {
  width: 200px;
  display: inline-block;
}
.reusable-components-container03 {
  width: 100%;
  display: flex;
  margin-top: 100px;
  align-items: center;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
}
.reusable-components-text2 {
  margin-right: 100px;
}
.reusable-components-container05 {
  width: 100%;
  height: 148px;
  display: flex;
  align-items: center;
  background-color: transparent;
}
.reusable-components-text3 {
  width: 200px;
  display: inline-block;
}
.reusable-components-container06 {
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
}
.reusable-components-text4 {
  margin-right: 100px;
}
.reusable-components-container07 {
  width: 100%;
  display: flex;
  margin-top: 100px;
  align-items: center;
  padding-top: 20px;
  padding-left: 20px;
  padding-bottom: 20px;
}
.reusable-components-text5 {
  margin-right: 100px;
}
.reusable-components-container08 {
  background-color: #00bcd4;
}
.reusable-components-container09 {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 100px;
  background-color: transparent;
}
.reusable-components-text6 {
  margin-right: 100px;
}
</style>
