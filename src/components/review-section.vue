<template>
  <div class="review-section-customers-review">
    <span class="review-section-text">What your</span>
    <span class="review-section-text1">Customers are saying</span>
    <span class="review-section-text2">
      Add your customers&apos; testimonials and feedback here. Let your other customers know what
      you&apos;re about.
    </span>
    <review-card></review-card>
    <div class="review-section-overlay"></div>
  </div>
</template>

<script>
import ReviewCard from './review-card'

export default {
  name: 'ReviewSection',
  props: {},
  components: {
    ReviewCard,
  },
}
</script>

<style scoped>
.review-section-customers-review {
  width: 100%;
  display: flex;
  padding: 100px;
  z-index: 0;
  overflow: auto;
  position: relative;
  box-sizing: border-box;
  max-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  justify-content: center;
  background-image: url("https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200");
}
.review-section-text {
  color: #ffffff;
  z-index: 3;
  font-size: 20px;
  font-weight: bold;
}
.review-section-text1 {
  color: #ffffff;
  display: inline-block;
  z-index: 3;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
}
.review-section-text2 {
  color: #ffffff;
  width: 70%;
  display: inline-flex;
  z-index: 3;
  max-width: 800px;
  text-align: center;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
  justify-content: center;
}
.review-section-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  position: absolute;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
}
@media(max-width: 991px) {
  .review-section-customers-review {
    padding: 50px;
  }
  .review-section-text {
    font-size: 16px;
  }
  .review-section-text1 {
    font-size: 1.5em;
  }
  .review-section-text2 {
    font-size: 14px;
  }
}
@media(max-width: 767px) {
  .review-section-customers-review {
    padding: 30px;
  }
  .review-section-text2 {
    width: 80%;
  }
}
</style>
