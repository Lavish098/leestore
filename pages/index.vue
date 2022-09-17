<template>
<div class="home">
  <Loading v-show="!loading"/>
<productDescription
:product="product"
:active="active.product_drawer"
v-on:close-product-drawer="closeProductDrawer()"/>

<productCard :product="product" v-for="product in productFeeds" :key="product.id"
v-on:view-product="viewProduct($event)"
/>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  data(){
    return{
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
