<template>
  <div class="product">
      <typeCard :product="product" v-for="product in productType" :key="product.id"/>
  </div>
</template>

<script>
export default {
    data(){
      return{
        productType: null
      }
    },
 async mounted(){
    this.productType = await this.$store.getters.products.filter((product) => {
        return product.type == this.$route.params.producttype;
    })
  }

}
</script>

<style>
.product{
  display: flex;
  flex-wrap: wrap;
}
</style>