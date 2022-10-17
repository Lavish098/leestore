<template>
  <div class="product-card">
    <nuxt-link :to="{name: 'productDescription', params:{productid: this.product.id} }">

      <div class="info" >
        <img :src="require(`@/assets/images/${this.image}.jpg`)" alt=""/>
          <h4>{{ product.name }}</h4>
          <h4>₦ {{ product.price }}</h4>
          <h4>{{ product.type }}</h4>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    name: "typeCard",
    props:['product'],
    data(){
        return{
            image: this.product.image
        }
    },
    methods:{
    },
    computed:{
    carts(){
    
      return this.$store.state.carts;
    }
  }, 
    
    //     quantity:{
    //         get(){
    //     console.log(this.$store.getters.storeFeed)
    //     return this.$store.getters.storeFeed;
    //   },
    //   set(payload){
    //     this.$store.commit("updateQuantity", payload)
    //   }
    //     }
    
}
</script>


<style scoped>

</style>