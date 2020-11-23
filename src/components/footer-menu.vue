<template>
  <div class="footer-menu-community">
    <span class="footer-menu-text">{{ title }}</span>
    <div class="footer-menu-container">
      <span class="footer-menu-text1">Subtitle</span>
      <span class="footer-menu-text2">Subtitle</span>
      <span class="footer-menu-text3">Subtitle</span>
      <span class="footer-menu-text4">Subtitle</span>
      <span class="footer-menu-text5">Subtitle</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
  },
}
</script>

<style scoped>
.footer-menu-community {
  display: flex;
  overflow: auto;
  box-sizing: border-box;
  align-items: flex-start;
  flex-direction: column;
  background-color: transparent;
}
.footer-menu-text {
  font-size: 1.5em;
}
.footer-menu-container {
  color: #413d3d;
  display: flex;
  margin-top: 10px;
  font-weight: lighter;
  flex-direction: column;
  background-color: transparent;
}
.footer-menu-text1 {
  display: inline-flex;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.footer-menu-text2 {
  display: inline-flex;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.footer-menu-text3 {
  display: inline-flex;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.footer-menu-text4 {
  display: inline-flex;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.footer-menu-text5 {
  display: inline-flex;
  font-size: 14px;
  padding-top: 5px;
  padding-bottom: 5px;
}
@media(max-width: 991px) {
  .footer-menu-text {
    font-size: 1em;
  }
}
@media(max-width: 767px) {
  .footer-menu-text1 {
    font-size: 12px;
  }
  .footer-menu-text2 {
    font-size: 12px;
  }
  .footer-menu-text3 {
    font-size: 12px;
  }
  .footer-menu-text4 {
    font-size: 12px;
  }
  .footer-menu-text5 {
    font-size: 12px;
  }
}
</style>
