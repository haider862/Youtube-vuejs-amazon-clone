<template>
  <nav class="nav">
      <div class="container">
          <div class="nav__container">
          <div class="nav__left">
              <router-link :to="{name: 'Home'}">
                   <img src="../assets/images/log.png" alt="">
              </router-link>
          </div>
          <div class="nav__right">
              <li><router-link :to="{name: 'Cart'}">
                  <svg width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-cart-check" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
  <path fill-rule="evenodd" d="M11.354 5.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708 0z"/>
</svg>
                  <span class="cartItems">{{getQuantities}}</span></router-link></li>
          </div>
          </div>
      </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: 'Nav',
  computed: {
      ...mapGetters(['getCart','getQuantities'])
  }
}
</script>

<style scoped>
.nav {
    width :100%;
    height: 70px;
    background: #131921;
}
.nav__container {
     display: flex;
    align-items: center;
    height: 70px;
    width: 100%;
    justify-content: space-between;
}
.nav__left img {
    width: 110px;
}
.nav__right li {
    list-style: none;
}
.nav__right li a {
    text-decoration: none;
    color: #fff;
    position: relative;
}
.cartItems {
    position: absolute;
    top: -25px;
    right: -15px;
    width: 25px;
    height: 25px;
    border: none;
    background:#f08804;
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
}
</style>