<template>
  <div class="product-card">
    <nuxt-link :to="{name: 'productDescription', params:{productid: this.product.id} }">

      <div class="info" >
        <img :src="require(`@/assets/images/${this.image}.jpg`)" alt=""/>
          <h4>{{ product.name }}</h4>
          <h4>₦ {{ product.price.toFixed(2) }}</h4>
          <h4>{{ product.type }}</h4>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    name: "productCard",
    props:['product'],
    data(){
        return{
            image: this.product.image
        }
    },
    methods:{
    },
    mounted(){
        console.log(this.image)
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
.product-card{
    max-width: 1000px;
    display: flex;
    justify-content: center;
    /* flex-wrap: wrap; */
}
.product-card .info{
    margin: 0 0 20px 20px;
    cursor: pointer;
    border-radius: 8px;
    background-color: #fff;
    width: 280px;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: .5s ease all;
}
.product-card .info:hover{
    transform: rotateZ(-1deg) scale(1.01);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.86);
}
/* .product-card img{
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
} */
/* .product-card .info{
    display: flex;
    flex-direction: column;
    height: 100%;
    z-index: 3;
    padding: 32px 16px;
    color: #000;
} */
.product-card .info h4{
    padding-bottom: 10px;
    font-size: 20px;
    font-weight: bold;
}
.product-card .info h6{
    padding-bottom: 16px;
    font-size: 12px;
    font-weight: 400;
}
.product-card img{
    display: block;
    border-radius: 8px 8px 0 0;
    z-index: 1;
    width: 100%;
    min-height: 200px;
    object-fit: cover;
}
/* .blog-card .info link{
    display: inline-flex;
    align-items: center;
    margin-top: auto;
    font-weight: 500;
    padding-top: 20px;
    font-size: 12px;
    padding-bottom: 4px;
    transition: 0.5s ease-in all;
}
.blog-card .info link:hover{
    color: rgba(48, 48, 48, 0.8);
}
.blog-card .info .link .arrow{
    width: 10px;
} */
</style>