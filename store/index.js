import products from '../data/products.js'


function updateLocalStorage(cart){
  localStorage.setItem('cart', JSON.stringify(cart))
}


export const state = () => ({
  productItems: products,
  cart:[],
  })
export const getters = {
  productQuantity: state => product =>{
    const item = state.cart.find(i => i.id === product.id)

    if(item) return item.quantity
    else return null
  },
  cartItems: state => {
    return state.cart
  },
  totalQuantity: state => {
    return state.cart.reduce((acc, cart) => {
      return cart.quantity + acc; }, 0)
  },
  cartTotal: state => {
    return state.cart.reduce((a, b) => a + (b.price * b.quantity), 0)
  },
  productFeeds: state => {
    return state.productItems.slice(0, 6)
  },
  products: state => {
    return state.productItems
  },
}
export const mutations = {
    addToCart(state, product){
       let item = state.cart.find(i => i.id === product.id)

       if(item){
        item.quantity++
       } else {
        state.cart.push({...product, quantity: 1})
       }

       updateLocalStorage(state.cart)
    },
    removeFromCart(state, product){
      let item = state.cart.find(i => i.id === product.id)

      if(item){
        if(item.quantity > 0){
          item.quantity--
        }
      } else {
       state.cart = state.cart.filter(i => i.id !== product.id)
      }

      updateLocalStorage(state.cart)
   },
    removeItem(state, product){
      state.cart = state.cart.filter(i => i.id !== product.id)
  
      // if(item){
      //   this.$delete(this.cart, item)
      //     // state.cart.splice(item, item)
        
      // } else {
      //  state.cart = state.cart.filter(i => i.id !== products.id)
      // }

      updateLocalStorage(state.cart)
   },
//    removeAll(state, products){
//     let item = state.cart.find(i => i.id === products.id)

//     if(item){
//       console.log(item)
//         state.cart.splice(item, 1)
      
//     } else {
//      state.cart = state.cart.filter(i => i.id !== products.id)
//     }

//     updateLocalStorage(state.cart)
//  },
   updateCartFromLocalStorage(state){
    const cart = localStorage.getItem('cart')
    if(cart){
      state.cart = JSON.parse(cart)
    }
   }
  }
export const actions = {
  
  
  }
export const Modules = () => ({

  })
  