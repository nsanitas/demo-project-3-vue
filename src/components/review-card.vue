<template>
  <div class="review-card-review">
    <svg fill="#2b2b2b" height="40" viewBox="0 0 1024 1024" class="thqIcon">
      <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
    </svg>
    <div class="review-card-container">
      <div class="review-card-container1"></div>
      <span class="review-card-text">Your Name</span>
      <span class="review-card-text1">CEO at A good company</span>
      <span class="review-card-text2">
        &quot;Best company (apart from ours, of course) I&apos;ve ever seen in the whole wide
        world!&quot;
      </span>
    </div>
    <svg fill="#2b2b2b" height="40" viewBox="0 0 1024 1024" class="thqIcon">
      <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
    </svg>
  </div>
</template>

<script>
import '../index.css'

export default {
  name: 'ReviewCard',
  props: {},
}
</script>

<style scoped>
.review-card-review {
  width: 700px;
  display: flex;
  z-index: 2;
  overflow: auto;
  position: static;
  box-sizing: border-box;
  margin-top: 50px;
  align-items: center;
  padding-top: 50px;
  border-style: solid;
  border-width: 0;
  padding-left: 20px;
  border-radius: 8px;
  padding-right: 20px;
  padding-bottom: 50px;
  background-size: cover;
  justify-content: center;
  background-color: #ffffff;
}
.review-card-container {
  display: flex;
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}
.review-card-container1 {
  width: 80px;
  height: 80px;
  box-sizing: border-box;
  margin-left: 15px;
  border-width: 1px;
  margin-right: 15px;
  border-radius: 80px;
  margin-bottom: 15px;
  background-size: cover;
  background-color: transparent;
  background-image: url("https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=80");
  background-repeat: no-repeat;
  background-position: center;
}
.review-card-text {
  color: #000000;
  display: inline-flex;
  align-self: center;
  text-align: center;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
}
.review-card-text1 {
  color: #000000;
  display: inline-flex;
  font-size: 14px;
  text-align: center;
  border-color: #00bcd4;
  border-style: solid;
  padding-bottom: 10px;
  border-top-width: 0;
  border-left-width: 0;
  border-right-width: 0;
  border-bottom-width: 3px;
}
.review-card-text2 {
  color: #4b4b4b;
  display: inline-flex;
  font-size: 14px;
  text-align: center;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
  text-decoration: none;
}
@media(max-width: 767px) {
  .review-card-review {
    width: 400px;
    margin-top: 20px;
  }
}
@media(max-width: 479px) {
  .review-card-review {
    width: 300px;
  }
}
</style>
