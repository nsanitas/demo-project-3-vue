<template>
  <div class="nav-bar-menu">
    <div class="nav-bar-container">
      <svg fill="#ffffff" width="24" height="24" viewBox="0 0 1024 1024" class="thqIcon">
        <path
          d="M598 362q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM598 534q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM426 726q18 0 31 12t13 30-13 30-31 12-30-12-12-30 12-30 30-12zM426 362q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM598 874q20 0 20 22t-20 22q-22 0-22-22t22-22zM598 726q18 0 30 12t12 30-12 30-30 12-31-12-13-30 13-30 31-12zM896 576q22 0 22 22 0 20-22 20t-22-20q0-22 22-22zM768 214q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM768 384q18 0 30 12t12 30-12 31-30 13-30-13-12-31 12-30 30-12zM768 726q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM768 554q18 0 30 13t12 31-12 30-30 12-30-12-12-30 12-31 30-13zM426 534q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zM426 298q-18 0-30-12t-12-30 12-30 30-12 31 12 13 30-13 30-31 12zM426 150q-20 0-20-22t20-22q22 0 22 22t-22 22zM426 874q22 0 22 22t-22 22q-20 0-20-22t20-22zM128 576q22 0 22 22 0 20-22 20t-22-20q0-22 22-22zM598 150q-22 0-22-22t22-22q20 0 20 22t-20 22zM598 298q-18 0-31-12t-13-30 13-30 31-12 30 12 12 30-12 30-30 12zM896 448q-22 0-22-22 0-20 22-20t22 20q0 22-22 22zM256 214q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM128 406q22 0 22 20 0 22-22 22t-22-22q0-20 22-20zM256 384q18 0 30 12t12 30-12 31-30 13-30-13-12-31 12-30 30-12zM256 726q18 0 30 12t12 30-12 30-30 12-30-12-12-30 12-30 30-12zM256 554q18 0 30 13t12 31-12 30-30 12-30-12-12-30 12-31 30-13z"
        ></path>
      </svg>
      <span class="nav-bar-text">Your Company</span>
    </div>
    <div class="nav-bar-links">
      <span class="nav-bar-text1">HOME</span>
      <span class="nav-bar-text2">PRICING</span>
      <span class="nav-bar-text3">SERVICES</span>
      <app-button button="GET STARTED"></app-button>
    </div>
    <div class="nav-bar-container1">
      <svg fill="#fff" width="30" height="30" viewBox="0 0 1024 1024" class="thqIcon">
        <path d="M64 192h896v192h-896zM64 448h896v192h-896zM64 704h896v192h-896z"></path>
      </svg>
    </div>
  </div>
</template>

<script>
import AppButton from './button'
import '../index.css'

export default {
  name: 'NavBar',
  props: {},
  components: {
    AppButton,
  },
}
</script>

<style scoped>
.nav-bar-menu {
  width: 100%;
  height: 100px;
  display: flex;
  overflow: auto;
  max-width: 1200px;
  align-self: center;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  justify-content: space-between;
}
.nav-bar-container {
  display: flex;
  align-items: center;
}
.nav-bar-text {
  margin-left: 10px;
}
.nav-bar-links {
  display: flex;
  align-items: center;
  background-color: transparent;
}
.nav-bar-text1 {
  position: static;
  font-size: 14px;
  text-align: left;
  border-color: #ffffff;
  border-style: solid;
  border-width: 0;
  padding-left: 30px;
  padding-right: 30px;
  letter-spacing: 1.2;
  border-right-width: 2px;
}
.nav-bar-text2 {
  position: static;
  font-size: 14px;
  text-align: left;
  border-color: #ffffff;
  border-style: solid;
  border-width: 0;
  padding-left: 30px;
  padding-right: 30px;
  letter-spacing: 1.2;
  border-right-width: 2px;
}
.nav-bar-text3 {
  position: static;
  font-size: 14px;
  text-align: left;
  border-color: #ffffff;
  border-style: solid;
  border-width: 0;
  margin-right: 30px;
  padding-left: 30px;
  padding-right: 30px;
  letter-spacing: 1.2;
  border-right-width: 2px;
}
.nav-bar-container1 {
  display: none;
  align-items: center;
  justify-content: center;
}
@media(max-width: 991px) {
  .nav-bar-menu {
    padding-left: 50px;
    padding-right: 50px;
  }
}
@media(max-width: 767px) {
  .nav-bar-menu {
    padding-left: 30px;
    padding-right: 30px;
  }
  .nav-bar-links {
    display: none;
  }
  .nav-bar-container1 {
    display: flex;
  }
}
</style>
