const cart = {
    state: {
     cartData: {
     products: [],
     totalPrice: 0,
     Quantities:0
     }
    },
    getters: {
     getCart: (state) => {
      return state.cartData;
     }
    },
    mutations: {
     addToCart: (state, payload) => {
       const product = state.cartData.products.find(pro => pro.id === payload.id);
       if(product) {
           return state;
       } else {
           state.cartData = {...state.cartData, products: [...state.cartData.products, payload],totalPrice: state.cartData.totalPrice + payload.price, Quantities: state.cartData.Quantities + 1 };
       }
     }
    },
    actions: {
     addToCart: (obj, payload) => {
         obj.commit("addToCart", payload);
     }
    }
}

export default cart;