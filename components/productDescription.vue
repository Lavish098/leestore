<template>
<div  :class="{show: active}" >
  <div class="drawer-background" :class="{show: active}" @click="$emit('close-product-drawer')"/>
  <div :class="{show: active}" class="drawer">
    <div class="closeDrawer" @click="$emit('close-product-drawer')">
        X  
    </div>
    <div v-if="product" class="product-details">
        <h3>{{ product.name }}</h3>
        <h3>${{ product.price.USD }}</h3>
    
    <div v-if="product_total" class="cart-total">
        <h3>In cart </h3>
        <h3>{{ product_total }}</h3>
    </div>

    <div class="button-container">
        <button class="remove" @click="removeFromCart">-</button>
        <button class="add" @click="addToCart">+</button>
    </div>
    </div>
</div>
  </div>
</template>

<script>
export default {
    props:['product', 'active'],
    methods:{
        addToCart(){
            this.$store.commit('addToCart', this.product)
        },
        removeFromCart(){
            this.$store.commit('removeFromCart', this.product)
        }
    },
    computed:{
        product_total(){
            return this.$store.getters.productQuantity(this.product)
        }
    }

}
</script>

<style>
.drawer-background{
    width: 100%;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: rgba(124, 124, 124, 0.55);
    z-index: 100;
    display: none;
    transition: display .5s;
}
.show{
    display: block;
}
.drawer{
    width: 95vw;
    height: 100vh;
    background-color: white;
    position: fixed;
    top: 0;
    left: -105vw;
    padding: 15px;
    transition: left .5s;
    z-index: 101;
    overflow-y: scroll;
}
 .show{
    left: 0;
}
.closeDrawer{
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 5px;
    right: 10px;
    cursor: pointer;
    border: 2px solid gray;
    color: gray;
    width: 35px;
    float: right;
}
.closeDrawer:hover{
    background-color: lightgray;
}
.product-details{
    display: flex;
    justify-content: center;
    flex-direction: column;

}
.button-container{
    font-size: 30px;
}
.button-container button{
    width: 150px;
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin: 0 5px 50px 5px;
    cursor: pointer;
}
@media (min-width: 500px){
    .drawer{
        width: 450px;
    }
}
</style>