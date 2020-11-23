<template>
  <div class="info-section-card-2">
    <div class="info-section-textcontainer">
      <section-heading></section-heading>
      <span class="info-section-text">{{ loremipsumdolo }}</span>
      <span class="info-section-text1">{{ utpharetrapuru }}</span>
      <app-button button="START NOW"></app-button>
    </div>
    <div class="info-section-imagecontainer"></div>
  </div>
</template>

<script>
import SectionHeading from './section-heading'
import AppButton from './button'

export default {
  name: 'InfoSection',
  props: {
    loremipsumdolo: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpis, ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies. ',
    },
    utpharetrapuru: {
      type: String,
      default:
        'Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies. ',
    },
  },
  components: {
    SectionHeading,
    AppButton,
  },
}
</script>

<style scoped>
.info-section-card-2 {
  width: 100%;
  display: flex;
  overflow: auto;
  max-width: 1200px;
  box-sizing: border-box;
  max-height: 100vh;
  align-items: center;
  padding-top: 100px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 100px;
  justify-content: center;
  background-color: transparent;
}
.info-section-textcontainer {
  width: 400px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}
.info-section-text {
  color: #000000;
  display: inline-flex;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
}
.info-section-text1 {
  color: #353535;
  display: inline-flex;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 20px;
}
.info-section-imagecontainer {
  width: 50%;
  height: 380px;
  max-width: 600px;
  box-sizing: border-box;
  margin-left: 50px;
  border-radius: 20px;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000");
  background-repeat: no-repeat;
  background-position: center;
}
@media(max-width: 991px) {
  .info-section-card-2 {
    padding: 50px;
  }
  .info-section-imagecontainer {
    width: 60%;
  }
}
@media(max-width: 767px) {
  .info-section-card-2 {
    padding-left: 30px;
    padding-right: 30px;
    flex-direction: column;
  }
  .info-section-text {
    font-size: 14px;
  }
  .info-section-text1 {
    font-size: 14PX;
  }
  .info-section-imagecontainer {
    width: 70%;
    margin-left: 20px;
    background-size: contain;
  }
}
@media(max-width: 479px) {
  .info-section-card-2 {
    padding: 30px;
  }
  .info-section-textcontainer {
    width: 100%;
  }
  .info-section-imagecontainer {
    width: 100%;
    height: 250px;
    margin-top: 20px;
    margin-left: 0;
  }
}
</style>
