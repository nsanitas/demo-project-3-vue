<template>
  <div class="product-section-product-section">
    <div class="product-section-imagecontainer"></div>
    <div class="product-section-textcontainer">
      <section-heading
        largeheading="Right Click and Select 'Duplicate' to reuse me"
        smallheading="About components"
      ></section-heading>
      <span class="product-section-text">
        Reusing components is a sure way of saving time when developing your website.
      </span>
      <span class="product-section-text1">
        Open the component, Right-click on an element (text or picture) and select Create Override.
        Doing this will allow you to add different text for the component in different instances.
      </span>
      <span class="product-section-text2">Link &gt;&gt;</span>
    </div>
  </div>
</template>

<script>
import SectionHeading from './section-heading'

export default {
  name: 'ProductSection',
  props: {},
  components: {
    SectionHeading,
  },
}
</script>

<style scoped>
.product-section-product-section {
  width: 100%;
  display: flex;
  padding: 100px;
  overflow: auto;
  max-width: 1200px;
  box-sizing: border-box;
  max-height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: transparent;
}
.product-section-imagecontainer {
  width: 50%;
  height: 380px;
  max-width: 700px;
  box-sizing: border-box;
  margin-right: 50px;
  border-radius: 20px;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1528642474498-1af0c17fd8c3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000");
  background-repeat: no-repeat;
  background-position: center;
}
.product-section-textcontainer {
  width: 400px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}
.product-section-text {
  color: #000000;
  display: inline-flex;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
}
.product-section-text1 {
  color: #000000;
  display: inline-flex;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
}
.product-section-text2 {
  color: #03a9f4;
  font-style: italic;
  padding-top: 10px;
  padding-bottom: 10px;
}
@media(max-width: 991px) {
  .product-section-product-section {
    padding: 50px;
  }
}
@media(max-width: 767px) {
  .product-section-product-section {
    padding: 30px;
    flex-direction: column;
    padding-bottom: 10px;
  }
  .product-section-imagecontainer {
    width: 80%;
    margin-right: 0;
    margin-bottom: 30px;
  }
  .product-section-text {
    font-size: 14px;
  }
  .product-section-text1 {
    font-size: 14px;
  }
}
@media(max-width: 479px) {
  .product-section-imagecontainer {
    width: 100%;
    height: 250px;
  }
  .product-section-textcontainer {
    width: 100%;
  }
}
</style>
