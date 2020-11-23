<template>
  <div class="layout-components1-container">
    <span class="layout-components1-text">Layout Components</span>
    <div class="layout-components1-container01">
      <span class="layout-components1-text1">NavBar</span>
      <div class="layout-components1-container02"><nav-bar></nav-bar></div>
    </div>
    <div class="layout-components1-container03">
      <span class="layout-components1-text2">Hero</span>
      <div class="layout-components1-container04"><app-hero></app-hero></div>
    </div>
    <div class="layout-components1-container05">
      <span class="layout-components1-text3">Info Section</span>
      <div class="layout-components1-container06"><info-section></info-section></div>
    </div>
    <div class="layout-components1-container07">
      <span class="layout-components1-text4">Grid Section</span>
      <div class="layout-components1-container08"><features-grid></features-grid></div>
    </div>
    <div class="layout-components1-container09">
      <span class="layout-components1-text5">Logos Section</span>
      <div class="layout-components1-container10"><logos-bar></logos-bar></div>
    </div>
    <div class="layout-components1-container11">
      <span class="layout-components1-text6">FooterSection</span>
      <div class="layout-components1-container12"><app-footer></app-footer></div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/nav-bar'
import AppHero from '../components/hero'
import InfoSection from '../components/info-section'
import FeaturesGrid from '../components/features-grid'
import LogosBar from '../components/logos-bar'
import AppFooter from '../components/footer'

export default {
  name: 'LayoutComponents1',
  components: {
    NavBar,
    AppHero,
    InfoSection,
    FeaturesGrid,
    LogosBar,
    AppFooter,
  },
  metaInfo: {
    title: 'LayoutComponents1 - Demo Project 3',
    meta: [
      {
        name: 'description',
        content:
          "In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations.",
      },
      {
        property: 'og:title',
        content: 'LayoutComponents1 - Demo Project 3',
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
.layout-components1-container {
  width: 100%;
  display: block;
  padding: 100px;
  overflow: auto;
  font-size: 16px;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: #fff;
}
.layout-components1-text {
  display: flex;
  font-size: 2em;
  text-align: center;
  margin-bottom: 100px;
  justify-content: center;
}
.layout-components1-container01 {
  width: 100%;
  height: 100px;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components1-text1 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components1-container02 {
  width: 100%;
  background-color: #cccccc;
}
.layout-components1-container03 {
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components1-text2 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components1-container04 {
  width: 100%;
  height: 600px;
  background-color: transparent;
}
.layout-components1-container05 {
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components1-text3 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components1-container06 {
  width: 100%;
  height: 600px;
}
.layout-components1-container07 {
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components1-text4 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components1-container08 {
  width: 100%;
}
.layout-components1-container09 {
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components1-text5 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components1-container10 {
  width: 100%;
}
.layout-components1-container11 {
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components1-text6 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components1-container12 {
  width: 100%;
}
</style>
