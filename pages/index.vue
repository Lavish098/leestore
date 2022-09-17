<template>
<div class="home">
<productDescription
:product="product"
:active="active.product_drawer"
v-on:close-product-drawer="closeProductDrawer()"/>

<productCard :product="product" v-for="product in productFeeds" :key="product.id"
v-on:view-product="viewProduct($event)"
/>

  <h1>home</h1>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data(){
    return{
      // products: products,
      product: null,
      active:{
        product_drawer: false
      }
    }
  },
  computed:{
    productFeeds(){
      return this.$store.getters.productFeeds
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
