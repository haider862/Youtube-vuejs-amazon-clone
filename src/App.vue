<template>
<Nav />
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <router-view />
</template>
<script>
import Nav from "./views/Nav";
export default {
  name: 'App',
  components: {
    Nav
  }

}
</script>
<style>
* {
  margin: 0;
  padding:0;
  box-sizing: border-box;
}
body {
  font-family: sans-serif;
  background: #eaeded;
}
.container {
  width: 1300px;
  margin: 0 auto;
}
.row {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}
.col-4 {
  width: 33.33333333333333%;
}
.col-3 {
  width: 25%;
}
.col-6 {
  width: 50%;
}
.col-9 {
  width: 75%;
}
.col-2 {
  width: 16.66666666666667%;
}
.col-8 {
  width: 66.66666666666667%;
}
</style>
