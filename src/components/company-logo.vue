<template>
  <div class="company-logo-container"><img :src="src" class="thqImage company-logo-image" /></div>
</template>

<script>
import '../index.css'

export default {
  name: 'CompanyLogo',
  props: {
    src: {
      type: String,
      default: 'https://play.teleporthq.io/static/svg/placeholders/no-image.svg',
    },
  },
}
</script>

<style scoped>
.company-logo-container {
  overflow: auto;
  box-sizing: border-box;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 15px;
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
}
.company-logo-image {
  width: 150px;
}
@media(max-width: 767px) {
  .company-logo-image {
    width: 150px;
  }
}
@media(max-width: 479px) {
  .company-logo-container {
    margin-left: 10px;
    margin-right: 10px;
  }
  .company-logo-image {
    width: 150px;
  }
}
</style>
