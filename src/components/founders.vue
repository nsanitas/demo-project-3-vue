<template>
  <div class="founders-founder-section">
    <div class="founders-imagecontainer"></div>
    <div class="founders-textcontainer">
      <span class="founders-text">{{ largeheading }}</span>
      <span class="founders-text1">{{ loremipsumdolo }}</span>
      <span class="founders-text2">{{ loremipsum2p }}</span>
      <span class="founders-text3">{{ loremipsum3p }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Founders',
  props: {
    largeheading: {
      type: String,
      default: 'Large heading',
    },
    loremipsum2p: {
      type: String,
      default:
        'Lorem ipsum 2. Pharetra purus justo vitae purus. Cras mollis risus ac Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.  magna sodales ultricies. ',
    },
    loremipsum3p: {
      type: String,
      default:
        'Lorem ipsum 3. Pharetra purus justo vitae purus. Cras mollis risus ac Ut pharetra purus justo vitae purus. Cras mollis risus ac magna sodales ultricies.  magna sodales ultricies. ',
    },
    loremipsumdolo: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus placerat, erat at commodo egestas, felis sapien efficitur turpis erat at commodo egestas, felis sapien efficitur turpis, ut pharetra purus justo vitae purus.',
    },
  },
}
</script>

<style scoped>
.founders-founder-section {
  width: 100%;
  display: flex;
  padding: 100px;
  overflow: auto;
  box-sizing: border-box;
  justify-content: center;
  background-color: transparent;
}
.founders-imagecontainer {
  width: 50%;
  height: 500px;
  display: flex;
  max-width: 500px;
  box-sizing: border-box;
  margin-right: 50px;
  border-radius: 500px;
  background-size: cover;
  background-color: rgba(20, 20, 20, 0.2);
  background-image: url("https://images.unsplash.com/photo-1517586979036-b7d1e86b3345?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=1000");
  background-repeat: no-repeat;
  background-position: center;
}
.founders-textcontainer {
  width: 50%;
  display: flex;
  max-width: 600px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background-color: transparent;
}
.founders-text {
  color: #000000;
  display: inline-block;
  font-size: 2em;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
}
.founders-text1 {
  color: #000000;
  display: inline-flex;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
}
.founders-text2 {
  color: #353535;
  display: inline-flex;
  line-height: 1.5;
  padding-top: 10px;
  padding-bottom: 10px;
}
.founders-text3 {
  color: #353535;
  display: inline-flex;
  padding-top: 10px;
  padding-bottom: 10px;
}
@media(max-width: 991px) {
  .founders-founder-section {
    padding: 50px;
  }
  .founders-text {
    font-size: 1.5em;
  }
  .founders-text1 {
    font-size: 14px;
  }
  .founders-text2 {
    font-size: 14px;
  }
  .founders-text3 {
    font-size: 14px;
  }
}
@media(max-width: 767px) {
  .founders-founder-section {
    padding: 30px;
    align-items: center;
  }
  .founders-imagecontainer {
    height: 300px;
    margin-right: 30px;
  }
}
@media(max-width: 479px) {
  .founders-founder-section {
    flex-direction: column;
  }
  .founders-imagecontainer {
    width: 80%;
    margin-right: 0px;
    margin-bottom: 20px;
  }
  .founders-textcontainer {
    width: 80%;
  }
}
</style>
