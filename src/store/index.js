import { createStore } from "vuex";
import products from "./products";
import cart from "./Cart"

export default createStore({
  modules: {
    products,
    cart
  }
});
