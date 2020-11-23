<template>
  <div class="connection-section-connection-section">
    <div class="connection-section-textcontainer">
      <section-heading
        largeheading="Customize your content"
        smallheading="Add Your Titles"
      ></section-heading>
      <span class="connection-section-text">
        One or two lines of text have enough visual punch to communicate your message. And of course,
        you can add logo&apos;s in the page.
      </span>
    </div>
    <logos-bar></logos-bar>
    <div class="connection-section-setup-section">
      <div class="connection-section-imagecontainer"></div>
      <div class="connection-section-textcontainer1">
        <section-heading
          largeheading="This one is a large heading"
          smallheading="Simple, right?"
        ></section-heading>
        <span class="connection-section-text1">{{ loremipsumdolo }}</span>
        <app-button></app-button>
      </div>
    </div>
  </div>
</template>

<script>
import SectionHeading from './section-heading'
import LogosBar from './logos-bar'
import AppButton from './button'

export default {
  name: 'ConnectionSection',
  props: {
    loremipsumdolo: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpis, ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.',
    },
  },
  components: {
    SectionHeading,
    LogosBar,
    AppButton,
  },
}
</script>

<style scoped>
.connection-section-connection-section {
  width: 100%;
  display: flex;
  padding: 100px;
  overflow: auto;
  box-sizing: border-box;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}
.connection-section-textcontainer {
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}
.connection-section-text {
  color: #000000;
  width: 70%;
  display: inline-flex;
  line-height: 1.5;
  padding-top: 10px;
}
.connection-section-setup-section {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 40px;
  border-color: #03a9f4;
  border-style: solid;
  border-width: 0px;
  justify-content: center;
  background-color: transparent;
  border-top-width: 1.5px;
}
.connection-section-imagecontainer {
  width: 50%;
  height: 380px;
  box-sizing: border-box;
  background-size: cover;
  background-image: url("https://images.unsplash.com/photo-1513682121497-80211f36a7d3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000");
  background-repeat: no-repeat;
  background-position: center;
}
.connection-section-textcontainer1 {
  width: 400px;
  display: flex;
  box-sizing: border-box;
  align-items: flex-start;
  margin-left: 50px;
  flex-direction: column;
  background-color: transparent;
}
.connection-section-text1 {
  color: #000000;
  display: inline-flex;
  text-align: left;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 20px;
}
@media(max-width: 991px) {
  .connection-section-connection-section {
    padding: 50px;
  }
  .connection-section-setup-section {
    padding-top: 20px;
  }
  .connection-section-textcontainer1 {
    margin-left: 20px;
  }
  .connection-section-text1 {
    font-size: 14px;
  }
}
@media(max-width: 767px) {
  .connection-section-connection-section {
    padding: 30px;
  }
  .connection-section-setup-section {
    flex-direction: column;
  }
  .connection-section-imagecontainer {
    width: 80%;
    height: 300px;
    margin-bottom: 20px;
  }
}
@media(max-width: 479px) {
  .connection-section-text {
    width: 90%;
  }
  .connection-section-imagecontainer {
    width: 90%;
  }
  .connection-section-textcontainer1 {
    width: 100%;
  }
}
</style>
