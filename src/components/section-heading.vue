<template>
  <div class="section-heading-container">
    <span class="section-heading-text">{{ smallheading }}</span>
    <span class="section-heading-text1">{{ largeheading }}</span>
  </div>
</template>

<script>
export default {
  name: 'SectionHeading',
  props: {
    largeheading: {
      type: String,
      default: 'Large Heading',
    },
    smallheading: {
      type: String,
      default: 'Small Heading',
    },
  },
}
</script>

<style scoped>
.section-heading-container {
  display: flex;
  overflow: auto;
  flex-direction: column;
}
.section-heading-text {
  color: #03a9f4;
  font-size: 20px;
  padding-bottom: 10px;
}
.section-heading-text1 {
  color: #000000;
  display: inline-block;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
}
@media(max-width: 991px) {
  .section-heading-text1 {
    font-size: 1.5em;
  }
}
@media(max-width: 767px) {
  .section-heading-text {
    font-size: 16px;
  }
  .section-heading-text1 {
    font-size: 1em;
  }
}
</style>
