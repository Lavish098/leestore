<template>
<div class="home">
  <Loading v-show="!loading"/>
  <div class="gallery-container">

  <VueSlickCarousel v-bind="settings" class="slides">
  <div class="mover-1">
    <img src="@/assets/images/images (32).jpeg" alt="">
    </div>
  <div class="mover-2">
    <img src="@/assets/images/images (33).jpeg" alt="">
    </div>
  </VueSlickCarousel>
  </div>
  
  <categories />

  <div class="productCard">
<productCard :product="product" v-for="product in productFeeds" :key="product.id"
v-on:view-product="viewProduct($event)"
/>
  </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'IndexPage',
  props:['mobile'],
  components:{
    VueSlickCarousel
  },
  data(){
    return{
      settings:{
         dots: true,
         autoplay: true,
dotsClass: "slick-dots custom-dot-class",
  edgeFriction: 0.35,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1
      },
      // products: products,
      loading: null,
      product: null,
      active:{
        product_drawer: false
      }
    }
  },
  computed:{
    productFeeds(){
    this.loading = true
      return this.$store.getters.productFeeds;
    }
  },
  methods:{
    viewProduct(product){
      this.product = product
      this.active.product_drawer = true
      console.log(this.product)
    },
    closeProductDrawer(){
      this.active.product_drawer = false
      console.log(this.active.product_drawer)
    }
  },
 
}
</script>
<style>
.home{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
}
.productCard{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
}
</style>
