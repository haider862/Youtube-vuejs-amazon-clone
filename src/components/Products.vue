<template>
<div class="container">
  <div class="row allProducts">
      <div class="col-4 product" v-for="(product, key) in getProducts" :key="key">
        <div class="product__container">
        <div class="product__img">
          <img :src="require(`../assets/images/${product.image}`)" alt="">
        </div>
        <div class="product__name">
          <p>{{product.name.slice(0, 60)}}...</p>
        </div>
        <div class="product__price">
          <span>$</span>{{product.price}}
        </div>
        <div class="product__button">
          <button class="btn btn-cart" @click="addToCart(product)">Add to card</button>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Products",
  methods: {
   ...mapActions(['addToCart'])
  },
  computed: {
    ...mapGetters(['getProducts'])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allProducts {
  margin-top: -200px;
}
.product {
  margin-top: 25px;
}
.product__container {
  margin-left: 20px;
  background: #fff;
  padding: 15px;
}
.product__img {
  text-align: center;
  margin: 0 auto;
}
.product__img img{
   width: 160px;
   height: 160px;
}
.product__name p{
  font-size: 15px;
  font-weight: 400;
  text-decoration: none;
  color:#0066c0;
  height: 50px;
  margin: 10px 0;
}
.product__price {
  font-size: 20px;
}
.product__price span {
  font-size: 13px;
}
.btn-cart {
  border: 1px solid #bbb;
  padding: 8px 13px;
  background: linear-gradient(to right, #f8e3ad,#EEBA37);
  color: #111;
  border-radius: 3px;
  cursor: pointer;
  font-size: 13px;
  outline: none;
}
.product__button {
  margin-top: 10px;
}
</style>
