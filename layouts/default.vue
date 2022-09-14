<template>
  <div >
    <header>
      <div class="nav">
    <nuxt-link to="/" class="name">LEESTORE</nuxt-link>
    <div class="nav-links">
      <nuxt-link to="/" class="links">Home</nuxt-link>
    <nuxt-link to="products" class="links">Products</nuxt-link>
    <nuxt-link to="pastorder" class="links">Past order</nuxt-link>
    
    </div>
    <button class="button" @click="toggleCartBar">Cart(0)</button>
    </div>
    </header>
    <cartBar v-if="cartBar" 
    :toggle="toggleCartBar"/>
    <nuxt />
  </div>
</template>

<script>
export default {
data(){
  return{
    cartBar: false
  }
},
computed:{
  // products(){
  //   return this.$store.getters.cartItems
  // }
},
methods:{
toggleCartBar(){
  this.cartBar = !this.cartBar
}
}
}
</script>

<style scoped>

</style>