<template>
  <div class="logos-bar-container">
    <company-logo
      src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
    ></company-logo>
    <company-logo
      src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
    ></company-logo>
    <company-logo
      src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
    ></company-logo>
    <company-logo
      src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
    ></company-logo>
    <company-logo
      src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
    ></company-logo>
  </div>
</template>

<script>
import CompanyLogo from './company-logo'

export default {
  name: 'LogosBar',
  props: {},
  components: {
    CompanyLogo,
  },
}
</script>

<style scoped>
.logos-bar-container {
  width: 100%;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  box-sizing: border-box;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  justify-content: center;
  background-color: transparent;
}
@media(max-width: 767px) {
  .logos-bar-container {
    padding-top: 20px;
    padding-bottom: 20px;
  }
}
@media(max-width: 479px) {
  .logos-bar-container {
    padding-bottom: 15px;
  }
}
</style>
