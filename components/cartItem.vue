<template>
  <div class="table">
   
<p>{{ product.name }}</p>
                <p>{{ product.quantity }}</p>
                <p>${{ item_cost.toFixed(2) }}</p>
                <button @click="removeItem">X</button>
         
  </div>
</template>

<script>
export default {
props:['product'],
computed:{
     item_cost() {
        return this.product.price.USD * this.product.quantity
       }
},
methods:{
    removeItem(){
            this.$store.commit('removeItem', this.product)
        }
}
}
</script>

<style>
.table{
    font-weight: 500;
    margin-left: 20px;
}

.table table{
     font-size: 20px;
}
 .table th{
    padding-right: 50px;
}
</style>