<template>
  <div >
    <header>
      <div class="nav">
        <div @click="toggleMobileNav" v-show="mobile" class="menu-icon" :class="{'btn-home':mobileNav}" >
        <div class="bar" ></div>
        <div class="bar"></div>
        <div class="bar"></div>
      </div>
    <nuxt-link to="/" class="name">SHARONS STORE</nuxt-link>
    <div class="nav-links" v-show="!mobile">
      <nuxt-link :to="{name: 'index'}" class="links">Home</nuxt-link>
    <nuxt-link :to="{name: 'products'}" class="links">Products</nuxt-link>
    <nuxt-link :to="{name: 'index'}" class="links">Past order</nuxt-link>
    
    </div>
    <seacrhBar/>
    <div class="cartIcon" @click="toggleCartBar">
      <i class="fas fa-shopping-cart"></i>
      </div>
    <div class="userIcon">
      <i class="fas fa-user"></i>
      </div>
    </div>
      
      <transition name="mobile-nav" >
          <ul class="mobile-nav"  v-show="mobileNav">
            <button @click="toggleMobileNav">X</button>
              <nuxt-link to="/" class="links" @click="toggleMobileNav">Home</nuxt-link>
    <nuxt-link to="products" class="links" @click="toggleMobileNav">Products</nuxt-link>
    <nuxt-link to="pastorder" class="links" @click="toggleMobileNav">Past order</nuxt-link>
    </ul>
      </transition>
    </header>

    <cartBar v-if="cartBar" 
    :toggle="toggleCartBar"/>
    <nuxt @click="toggleMobileNav"/>
  </div>
</template>

<script>
import '@/fontawesome-free-5.15.1-web/css/all.css'
export default {
data(){
  return{
    cartBar: false,
     mobile: null,
        mobileNav: null,
        windowWidth: null,
  }
},
computed:{
  
},
mounted(){
  if(process.client){
    window.addEventListener('resize', this.checkScreen);
    this.checkScreen();
  }
},

methods:{
    checkScreen(){
      if(process.client){
        this.windowWidth = window.innerWidth;
        if(this.windowWidth <= 750){
          this.mobile = true;
            return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
          }
    },
    toggleMobileNav(){
        this.mobileNav = !this.mobileNav;
    },
toggleCartBar(){
  this.cartBar = !this.cartBar
}
}
}
</script>

<style scoped>

</style>