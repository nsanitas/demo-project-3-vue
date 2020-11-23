<template>
  <div class="footer-footer">
    <div class="footer-container">
      <div class="footer-about">
        <span class="footer-text">About us</span>
        <span class="footer-text1">{{ utpharetrapuru }}</span>
      </div>
      <div class="footer-container1">
        <footer-menu title="Title"></footer-menu>
        <footer-menu title="Title"></footer-menu>
        <footer-menu title="Title"></footer-menu>
      </div>
    </div>
    <div class="footer-rights-section">
      <span class="footer-text2">Â© 2020 Company Name. All rights reserved.</span>
    </div>
  </div>
</template>

<script>
import FooterMenu from './footer-menu'

export default {
  name: 'Footer',
  props: {
    utpharetrapuru: {
      type: String,
      default: 'Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.',
    },
  },
  components: {
    FooterMenu,
  },
}
</script>

<style scoped>
.footer-footer {
  width: 100%;
  display: flex;
  padding: 0;
  overflow: auto;
  box-sizing: border-box;
  flex-direction: column;
  background-color: #d0ece8;
}
.footer-container {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 50px;
  justify-content: space-between;
  background-color: transparent;
}
.footer-about {
  width: 350px;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  flex-direction: column;
  background-color: transparent;
}
.footer-text {
  font-size: 1.5em;
}
.footer-text1 {
  color: #000000;
  display: inline-flex;
  font-size: 14px;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
}
.footer-container1 {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  background-color: transparent;
}
.footer-rights-section {
  width: 100%;
  height: 100px;
  display: flex;
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  border-color: rgba(143, 143, 143, 0.36);
  border-style: solid;
  border-width: 0;
  justify-content: center;
  background-color: transparent;
  border-top-width: 1px;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 0;
}
.footer-text2 {
  font-size: 14px;
  text-align: center;
}
@media(max-width: 991px) {
  .footer-container {
    padding-left: 50px;
    padding-right: 50px;
    justify-content: space-between;
  }
  .footer-text {
    font-size: 1em;
  }
  .footer-text1 {
    font-size: 12px;
  }
}
@media(max-width: 767px) {
  .footer-container {
    padding-top: 30px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
  }
  .footer-about {
    width: 150px;
  }
}
@media(max-width: 479px) {
  .footer-container {
    flex-direction: column;
  }
  .footer-about {
    width: 100%;
    align-items: center;
    margin-bottom: 20px;
    justify-content: flex-start;
  }
  .footer-text1 {
    text-align: center;
  }
  .footer-container1 {
    background-color: transparent;
  }
}
</style>
