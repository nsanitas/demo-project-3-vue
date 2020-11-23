<template>
  <div class="page-page">
    <div class="page-top-section">
      <nav-bar></nav-bar>
      <app-hero
        src="https://images.unsplash.com/photo-1584598147703-b4769ffb2c89?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1000"
        heading="This is a Demo Project"
        tagline="In the right panel you can change all the text."
        paragraph='You"ll find out more about components, overrides and responsiveness.'
      ></app-hero>
    </div>
    <product-section></product-section>
    <features-grid></features-grid>
    <connection-section></connection-section>
    <review-section></review-section>
    <info-section
      loremipsumdolo="If you want to customise this paragraph, try deleting this text from the inputs on the right and then add your own."
      utpharetrapuru="You can do the same for this one."
    ></info-section>
    <div class="page-pricing-section">
      <div class="page-container">
        <pricing-card
          fullautoma="For this card."
          dayfreetria="To see what we were thinking of"
          then10month="Look on the right"
          getstartednow="And customise it as you wish"
          licensekeyread="Just start editing the text"
          sellyourautoma="On your right"
          quizchecksmonth="Use this card"
          unlimitedquizze="And have a sample"
          unlimitedwebsit="In order to change the teext"
        ></pricing-card>
        <pricing-card
          then10month="$40 / year"
          licensekeyread="Automatic Deploy"
          quizchecksmonth="Anual payment"
          unlimitedquizze="Unlimited Projects"
          unlimitedwebsit="Unlimited Templates"
        ></pricing-card>
      </div>
    </div>
    <app-founders
      founders="This one can"
      loremipsumdolo="Like before, this is a simple use of the right side input fields."
      utpharetrapuru="You can add as much content as you like."
      utpharetrapuru1="Just remember to keep it short, punchy and to the point."
    ></app-founders>
    <app-footer
      utpharetrapuru="Add a short sentence describing your company. We this one could be around 3 or less rows."
    ></app-footer>
  </div>
</template>

<script>
import NavBar from '../components/nav-bar'
import AppHero from '../components/hero'
import ProductSection from '../components/product-section'
import FeaturesGrid from '../components/features-grid'
import ConnectionSection from '../components/connection-section'
import ReviewSection from '../components/review-section'
import InfoSection from '../components/info-section'
import PricingCard from '../components/pricing-card'
import AppFounders from '../components/founders'
import AppFooter from '../components/footer'

export default {
  name: 'Page',
  components: {
    NavBar,
    AppHero,
    ProductSection,
    FeaturesGrid,
    ConnectionSection,
    ReviewSection,
    InfoSection,
    PricingCard,
    AppFounders,
    AppFooter,
  },
  metaInfo: {
    title: 'Demo Project 3',
    meta: [
      {
        name: 'description',
        content:
          "In this project you'll learn to work more with components, overrides and responsiveness. Please have a look at our Tutorials section for more explanations.",
      },
      {
        property: 'og:title',
        content: 'Demo Project 3',
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
.page-page {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  font-family: Roboto;
  flex-direction: column;
  background-color: #fcfcfc;
}
.page-top-section {
  color: #fff;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  background-color: #1b1b1b;
}
.page-pricing-section {
  width: 100%;
  display: flex;
  padding: 100px;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-evenly;
  background-color: #d0ece8;
}
.page-container {
  width: 100%;
  display: flex;
  max-width: 800px;
  justify-content: space-between;
  background-color: transparent;
}
@media(max-width: 991px) {
  .page-pricing-section {
    padding: 50px;
  }
}
@media(max-width: 767px) {
  .page-pricing-section {
    padding: 30px;
    flex-direction: column;
  }
  .page-container {
    align-items: center;
    flex-direction: column;
  }
}
</style>
