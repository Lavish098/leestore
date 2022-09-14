function updateLocalStorage(cart){
  localStorage.setItem('cart', JSON.stringify(cart))
}


export const state = () => ({
  cart:[],
  })
export const getters = {
  productQuantity: state => product =>{
    console.log(state, "state")
    const item = state.cart.find(i => i.id === product.id)
console.log(item)
    if(item) return item.quantity
    else return null
  },
  cartItems: state => {
    return state.cart
  },
  cartTotal: state => {
    return state.cart.reduce((a, b) => a + (b.price.USD * b.quantity), 0)
  },
  // removeFromCart: state => product => {
  //   const item = state.cart.find(i => i.id ===product.id) 
  //     if(item) return item.pop()
  // }
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
  