<template>
  <div class="pricing-card-container">
    <div class="pricing-card-top">
      <span class="pricing-card-text">{{ quizchecksmonth }}</span>
      <span class="pricing-card-text1">{{ getstartednow }}</span>
      <span class="pricing-card-text2">{{ then10month }}</span>
    </div>
    <div class="pricing-card-container1">
      <span class="pricing-card-text3">{{ dayfreetria }}</span>
      <span class="pricing-card-text4">{{ unlimitedquizze }}</span>
      <span class="pricing-card-text5">{{ fullautoma }}</span>
      <span class="pricing-card-text6">{{ unlimitedwebsit }}</span>
      <span class="pricing-card-text7">{{ licensekeyread }}</span>
      <span class="pricing-card-text8">{{ sellyourautoma }}</span>
      <app-button button="TRY NOW"></app-button>
    </div>
  </div>
</template>

<script>
import AppButton from './button'

export default {
  name: 'PricingCard',
  props: {
    fullautoma: {
      type: String,
      default: '100% full automatic e-mail replies',
    },
    dayfreetria: {
      type: String,
      default: '14 day free trial',
    },
    then10month: {
      type: String,
      default: 'then $10 / month',
    },
    getstartednow: {
      type: String,
      default: 'Get started now with our free 14 day trial',
    },
    licensekeyread: {
      type: String,
      default: 'License Key ready with Digistore',
    },
    sellyourautoma: {
      type: String,
      default: 'Sell your automatic answers',
    },
    quizchecksmonth: {
      type: String,
      default: 'quizchecks Monthly payment',
    },
    unlimitedquizze: {
      type: String,
      default: 'Unlimited quizzes',
    },
    unlimitedwebsit: {
      type: String,
      default: 'Unlimited websites',
    },
  },
  components: {
    AppButton,
  },
}
</script>

<style scoped>
.pricing-card-container {
  width: 350px;
  display: flex;
  z-index: 2;
  overflow: auto;
  box-sizing: border-box;
  align-items: center;
  border-radius: 20px;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}
.pricing-card-top {
  color: #ffffff;
  width: 100%;
  display: flex;
  align-self: center;
  box-sizing: border-box;
  align-items: center;
  padding-top: 30px;
  flex-direction: column;
  padding-bottom: 30px;
  justify-content: center;
  background-color: #00bcd4;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
.pricing-card-text {
  display: flex;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.pricing-card-text1 {
  padding: 10px;
  font-size: 12px;
}
.pricing-card-text2 {
  font-size: 2em;
}
.pricing-card-container1 {
  width: 100%;
  display: flex;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5),0px 0px 0px 0px undefined,0px 0px 0px 0px undefined,0px 0px 0px 0px undefined;
  align-items: center;
  padding-top: 30px;
  flex-direction: column;
  padding-bottom: 50px;
  justify-content: center;
  background-color: #fff;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
}
.pricing-card-text3 {
  padding: 10px;
  font-size: 12px;
}
.pricing-card-text4 {
  padding: 10px;
  font-size: 12px;
}
.pricing-card-text5 {
  padding: 10px;
  font-size: 12px;
}
.pricing-card-text6 {
  padding: 10px;
  font-size: 12px;
}
.pricing-card-text7 {
  padding: 10px;
  font-size: 12px;
}
.pricing-card-text8 {
  padding: 10px;
  font-size: 12px;
  margin-bottom: 20px;
}
@media(max-width: 991px) {
  .pricing-card-container {
    margin-right: 20px;
  }
  .pricing-card-text {
    text-align: center;
  }
  .pricing-card-text1 {
    text-align: center;
  }
  .pricing-card-text2 {
    font-size: 1.5em;
  }
}
@media(max-width: 767px) {
  .pricing-card-container {
    margin-top: 20px;
    margin-right: 0px;
    margin-bottom: 20px;
  }
  .pricing-card-top {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .pricing-card-text2 {
    font-size: 1em;
  }
}
@media(max-width: 479px) {
  .pricing-card-container {
    width: 90%;
  }
}
</style>
