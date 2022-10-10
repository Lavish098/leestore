<template>
<div class="home">
  <Loading v-show="!loading"/>
  <VueSlickCarousel v-bind="settings" class="gallery-container">
  <div class="mover-1">
    <img src="@/assets/images/images (32).jpeg" alt="">
    </div>
  <div class="mover-2">
    <img src="@/assets/images/images (33).jpeg" alt="">
    </div>
  </VueSlickCarousel>
<categories/>
<productCard :product="product" v-for="product in productFeeds" :key="product.id"
v-on:view-product="viewProduct($event)"
/>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
  name: 'IndexPage',
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
  speed: 500,
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
  mounted(){
    this.$store.commit('updateCartFromLocalStorage')

  }
}
</script>
<style>
.home{
  display: flex;
  flex-wrap: wrap;
}
</style>
