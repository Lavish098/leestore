<template>
  <div class="cart-bar">
    <div class="cart-header">
    <button @click="toggle" class="cart-button">></button>
    <h1>Cart</h1>
    </div>
    <div class="cart-table">
    <div class="table">
            <p>Product</p>
            <p>quantity</p>
            <p>Price</p>
    </div>
            
           <cartItem v-for="product in products" :key="product.id" :product="product"/>
    <div class="cart-checkout"><h2>Total: ${{ cart_total.toFixed(2)}}</h2>
    <button>Checkout</button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['toggle'],
    data(){
        return{
           items : this.products
        }
    },
    computed:{
       cart_total() {
        return this.$store.getters.cartTotal
       },
       products(){
    return this.$store.getters.cartItems
  }
    //     item_cost() {
    //     // console.log(this.products.price.USD)
    //     if(this.items.data)
    //     console.log(this.items.name)
    //     // return this.products.price.USD * this.products.quantity
    //    }
    
},

}
</script>

<style>
.cart-bar{
    background: whitesmoke;
     box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.86);
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100vh;
    z-index: 99999999999;
}
.cart-header{
    background: black;
    padding: 30px;
    display: flex;
    font-size: 20px;
}
.cart-header button{
    color: white;
    font-size: 30px;
}
.cart-header h1{
    margin-left: 30%;
    display: flex;
    align-self: center;
    color: white;
    font-size: 25px;
    font-weight: 600;
}

.cart-checkout{
    display: flex;
}
.cart-checkout button{
    position: absolute;
    right: 30px;
}
</style>