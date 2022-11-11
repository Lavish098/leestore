
import products from '../data/products.js'





export const state = () => ({
  productItems: products,
  cart:[],
  productReviews:[]
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
  productReviews: state => product  => {
    const item = state.productReviews.filter((i) => { return i.id == product})
    if(item) return item
    else return null
  },
}
export const mutations = {
  submit(state, productReview){
    let item = state.productItems.find(i => i.id == productReview.id)
    if(item){
      state.productReviews.unshift({id: productReview.id, name: productReview.name, review: productReview.review, rating: productReview.rating,
      uID: productReview.uID})
    }
    localStorage.setItem('productReviews', JSON.stringify(state.productReviews))
  },
    addToCart(state, product){
       let item = state.cart.find(i => i.id === product.id)
       if(item){
        item.quantity++
       } else {
        state.cart.push({...product, quantity: 1})
       }
       localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    removeFromCart(state, product){
      let item = state.cart.find(i => i.id === product.id)
      if(item){
        if(item.quantity > 1){
          item.quantity--
        }
      else {
       state.cart = state.cart.filter(i => i.id !== product.id)
      }
    }
    localStorage.setItem('cart', JSON.stringify(state.cart))
   },
    deleteReview(state, product){
      const review = state.productReviews.map(i => i.uID).indexOf(product.uID)
      if(review > -1){
        state.productReviews.splice(review, 1)
      }
      localStorage.setItem('productReviews', JSON.stringify(state.productReviews))
   },
   removeAll(state, products){
        state.cart = []
    localStorage.setItem('cart', JSON.stringify(state.cart))
 },
   updateCartFromLocalStorage(state){
    const cart = localStorage.getItem('cart')
    if(cart){
      state.cart = JSON.parse(cart)
    }
   },
   updateProductReviewsFromLocalStorage(state){
    const review = localStorage.getItem('productReviews')
    if(review){
      state.productReviews = JSON.parse(review) 
    }
   },
   
  }
export const actions = {
  }
export const Modules = () => ({

  })
  