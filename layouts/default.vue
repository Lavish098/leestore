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
    <seacrhBar/>
    <div class="cartIcon" @click="toggleCartBar">
      <i class="fas fa-shopping-cart"></i>
      </div>
    <div class="userIcon">
      <i class="fas fa-user"></i>
      </div>
    </div>
    </header>
    <cartBar v-if="cartBar" 
    :toggle="toggleCartBar"/>
    <nuxt />
  </div>
</template>

<script>
import '@/fontawesome-free-5.15.1-web/css/all.css'
export default {
data(){
  return{
    cartBar: false
  }
},
computed:{
  
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