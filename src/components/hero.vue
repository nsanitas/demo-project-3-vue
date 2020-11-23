<template>
  <div class="hero-container">
    <div class="hero-container1">
      <div class="hero-container2">
        <span class="hero-text">{{ tagline }}</span>
        <h1 class="thqHeading1 hero-text1">{{ heading }}</h1>
        <span class="hero-text2">{{ paragraph }}</span>
        <app-button button="LET'S START"></app-button>
      </div>
      <div class="hero-container3"><img :src="src" class="thqImage hero-image" /></div>
    </div>
  </div>
</template>

<script>
import AppButton from './button'
import '../index.css'

export default {
  name: 'Hero',
  props: {
    src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
    },
    heading: {
      type: String,
      default: 'Heading',
    },
    tagline: {
      type: String,
      default: 'Tagline',
    },
    paragraph: {
      type: String,
      default: 'Paragraph',
    },
  },
  components: {
    AppButton,
  },
}
</script>

<style scoped>
.hero-container {
  width: 100%;
  display: flex;
  overflow: auto;
  font-size: 16px;
  max-width: 1200px;
  align-items: center;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif;
  justify-content: center;
  background-color: transparent;
}
.hero-container1 {
  width: 100%;
  display: flex;
  max-width: 1200px;
  padding-top: 100px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 100px;
  justify-content: space-between;
  background-color: transparent;
}
.hero-container2 {
  display: flex;
  margin-right: 30px;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}
.hero-text {
  color: #ffff;
  font-size: 14px;
}
.hero-text1 {
  color: #fff;
  font-size: 2.5em;
  margin-top: 0.67em;
  margin-bottom: 0.67em;
}
.hero-text2 {
  color: #fff;
  font-size: 18px;
  margin-bottom: 20px;
}
.hero-container3 {
  background-color: transparent;
}
.hero-image {
  width: 500px;
  border-radius: 25px;
}
@media(max-width: 991px) {
  .hero-container {
    justify-content: flex-start;
  }
  .hero-container1 {
    width: 100%;
    padding: 50px;
    max-width: 1200px;
    align-items: center;
    flex-direction: column;
  }
  .hero-container2 {
    align-items: center;
    margin-right: 0;
    padding-bottom: 50px;
    background-color: transparent;
  }
  .hero-text {
    color: #fff;
  }
  .hero-text1 {
    color: #fff;
  }
  .hero-text2 {
    color: #fff;
    max-width: 500;
    text-align: center;
    margin-bottom: 50;
  }
  .hero-container3 {
    background-color: transparent;
  }
  .hero-image {
    width: 250px;
    display: none;
  }
}
@media(max-width: 767px) {
  .hero-text1 {
    text-align: center;
  }
  .hero-text2 {
    text-align: center;
  }
}
@media(max-width: 479px) {
  .hero-container {
    justify-content: flex-start;
  }
  .hero-container1 {
    padding: 30px;
    padding-top: 100px;
    padding-left: 100px;
    padding-right: 100px;
    padding-bottom: 100px;
  }
  .hero-container2 {
    align-items: center;
  }
  .hero-text1 {
    font-size: 2em;
    margin-top: 0.6em;
    text-align: center;
    margin-bottom: 0.67em;
  }
  .hero-text2 {
    text-align: center;
  }
  .hero-image {
    display: none;
  }
}
</style>
