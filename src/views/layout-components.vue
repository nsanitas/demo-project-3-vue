<template>
  <div class="layout-components-container">
    <span class="layout-components-text">Layout Components</span>
    <div class="layout-components-container01">
      <span class="layout-components-text1">NavBar</span>
      <div class="layout-components-container02"><nav-bar></nav-bar></div>
    </div>
    <div class="layout-components-container03">
      <span class="layout-components-text2">Hero</span>
      <div class="layout-components-container04"><app-hero></app-hero></div>
    </div>
    <div class="layout-components-container05">
      <span class="layout-components-text3">Info Section</span>
      <div class="layout-components-container06"><info-section></info-section></div>
    </div>
    <div class="layout-components-container07">
      <span class="layout-components-text4">Grid Section</span>
      <div class="layout-components-container08"><features-grid></features-grid></div>
    </div>
    <div class="layout-components-container09">
      <span class="layout-components-text5">Logos Section</span>
      <div class="layout-components-container10"><logos-bar></logos-bar></div>
    </div>
    <div class="layout-components-container11">
      <span class="layout-components-text6">FooterSection</span>
      <div class="layout-components-container12"><app-footer></app-footer></div>
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
  name: 'LayoutComponents',
  components: {
    NavBar,
    AppHero,
    InfoSection,
    FeaturesGrid,
    LogosBar,
    AppFooter,
  },
  metaInfo: {
    title: 'LayoutComponents - Demo Project 3',
    meta: [
      {
        name: 'description',
        content:
          "In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations.",
      },
      {
        property: 'og:title',
        content: 'LayoutComponents - Demo Project 3',
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
.layout-components-container {
  width: 100%;
  display: block;
  padding: 100px;
  overflow: auto;
  font-size: 16px;
  min-height: 100vh;
  font-family: 'Roboto';
  background-color: #fff;
}
.layout-components-text {
  display: flex;
  font-size: 2em;
  text-align: center;
  margin-bottom: 100px;
  justify-content: center;
}
.layout-components-container01 {
  width: 100%;
  height: 100px;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components-text1 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components-container02 {
  width: 100%;
  background-color: #cccccc;
}
.layout-components-container03 {
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components-text2 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components-container04 {
  width: 100%;
  height: 600px;
  background-color: transparent;
}
.layout-components-container05 {
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components-text3 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components-container06 {
  width: 100%;
  height: 600px;
}
.layout-components-container07 {
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components-text4 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components-container08 {
  width: 100%;
}
.layout-components-container09 {
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components-text5 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components-container10 {
  width: 100%;
}
.layout-components-container11 {
  width: 100%;
  display: flex;
  padding: 20px;
  align-items: center;
  margin-bottom: 100px;
  justify-content: flex-start;
  background-color: transparent;
}
.layout-components-text6 {
  font-size: 20px;
  margin-right: 40px;
}
.layout-components-container12 {
  width: 100%;
}
</style>
