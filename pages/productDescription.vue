<template>
<div  v-if="currentProduct" class="product-description" >
    
        <div class="img">
        <img :src="require(`@/assets/images/${this.currentProduct.image}.jpg`)" alt=""/>
        </div>
        <div class="product-container">

        <div class="product-details">
        <h1>{{ (this.currentProduct.name) }}</h1>
        <h2> ₦{{ (this.currentProduct.price).toLocaleString() }}</h2>
        <h3>{{ (this.currentProduct.description) }}</h3>
        </div>
    <div v-if="product_total" class="cart-total">
        <h3>In cart </h3>
        <h3>{{ product_total }}</h3>
    </div>

    <div class="button-container">
        <button class="remove" @click="removeFromCart">-</button>
        <button class="add" @click="addToCart">+</button>
    </div>

<review :currentProduct="reviewId"/>
        </div>
  </div>
</template>

<script>
export default {
    props:[ 'active'],
    data(){
        return{
            reviewId: this.$route.params.productid,
            currentProduct: null,
        }
    },
    methods:{
        addToCart(){
            this.$store.commit('addToCart', this.currentProduct)
        },
        removeFromCart(){
            this.$store.commit('removeFromCart', this.currentProduct)
        }
    }, 
    computed:{
        product_total(){
            return this.$store.getters.productQuantity(this.currentProduct)
        },
    },
    async mounted(){
    this.currentProduct = await this.$store.getters.products.filter((product) => {
        return product.id == this.$route.params.productid;
    })[0];
    
    this.$store.commit('updateCartFromLocalStorage')
  this.$store.commit('updateProductReviewsFromLocalStorage')
  }

}
</script>

<style>

</style>