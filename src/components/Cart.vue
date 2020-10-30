<template>
  <div class="cartContainer" v-if="getCart.products.length > 0">
    <h3>Shopping Cart</h3>
    <div class="row">
    <div class="col-9 mt-20" v-for="(product, index) in getCart.products" :key="index">
     <div class="row">
       <div class="col-2">
         <div class="cart__img">
           <img :src="require(`../assets/images/${product.image}`)" alt="">
         </div>
       </div>
       <div class="col-8">
         <div class="productName">
          <p>{{product.name}}</p>
          <div class="row mt-20">
            <div class="col-6">
           
              <select v-model="product.quantity" @change="hello" class="select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div class="col-6">
              <button class="cartButton">Delete</button>
            </div>
          </div>
         </div>
       </div>
       <div class="col-2">
         <div class="productPrice">
           <span>$</span><strong>{{product.price}}</strong>
         </div>
       </div>
     </div>
    </div>
    <div class="col-3">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos in eligendi dolore debitis eos, impedit laboriosam modi dolor cumque beatae, dolorem suscipit. Repellendus, voluptatum ab maiores error ipsum earum neque?
    </div>
    </div>
  </div>
  <div v-else>
    <div class="cartContainer">
      Your cart is empty!
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
   name: 'Cart',
   data(){
     return {
      quantity: [1,2,3,4,5,6,7,8,9],
     }
   },
   methods: {
   hello: (e) => {
     console.log(e.target.value);
   }
   },
   computed: {
     ...mapGetters(['getCart'])
   }
}
</script>

<style scoped>
.cartContainer {
  width: 1300px;
  margin: 30px auto;
  background: #fff;
  padding: 20px;
}
.cart__img img {
  width: 120px;
  height: auto;
  object-fit: cover;
}
.productName p {
  font-size: 18px;
  color: #0066c0;
  font-weight: bold;
}
.cartButton {
  background:transparent;
  border:none;
}
.mt-20 {
  margin-top: 10px;
}
.productPrice {
  font-size: 24px;
}
/* .select {
  background: linear-gradient(to bottom,#f7f8fa,#e7e9ec);
  height: 29px;
  border-radius: 2px;
  border: 1px solid #8D9096;
  padding: 5px 10px;
} */
</style>