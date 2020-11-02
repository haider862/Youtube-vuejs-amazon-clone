<template>
  <div class="cartContainer" v-if="getCart.products.length > 0">
    <h3>Shopping Cart</h3>
    <div class="row">
      <div class="col-9">
    <div class="mt-20 borderBottom" v-for="(product, index) in getCart.products" :key="index">
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
           
              <select class="select" v-model="product.quantity" @change="updateQty($event, product.id)">
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
              <button class="cartButton" @click="deleteProduct(product.id)">Delete</button>
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
    </div>
    <div class="col-3">
      <div class="summary">
       <div class="summary-child">
         <h4> ({{getQuantities}} Items )</h4>
       <h3>${{getPrice}}</h3><br><br>
       <button class="checkout">Procced to checkout</button>
       </div>
      </div>
     
      
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
import { mapGetters, mapActions } from "vuex";
export default {
   name: 'Cart',
   methods: {
     ...mapActions(['updateQuantity','deleteProduct']),
     updateQty(e, id) {
       this.updateQuantity({qty: e.target.value, id});
     },
   },
   computed: {
     ...mapGetters(['getCart','getPrice','getQuantities']),
     
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
  outline: none;
}
.mt-20 {
  margin-top: 10px;
}
.productPrice {
  font-size: 24px;
}
.select {
  background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
  height: 29px;
  border-radius: 2px;
  border: 1px solid #8D9096;
  padding: 5px 10px;
}
.borderBottom {
  border-bottom: 1px solid #DDD;
  padding-bottom: 20px;
}
.summary {
  padding :20px;
}
.summary-child {
   background: #f3f3f3!important;
   padding: 15px;
}
.summary h3 {
  margin-top: 15px;
  font-size: 30px;
}

.checkout {
  background: #f0c14b;
  border: 1px solid;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111;
  outline: none;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  padding: 8px 10px;
  font-size: 12px;
}

</style>