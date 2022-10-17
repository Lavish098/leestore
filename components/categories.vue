<template>
  <div class="category">
    <h1>All Categories</h1>
    <div class="categories">
    <div  v-for="type in categories" :key="type">
      <nuxt-link :to="{name: 'productType',  params:{producttype: type} }">
        <h2>{{ type }}</h2>
      </nuxt-link>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      categories:[
        "HP", "Lenovo", "Acer"
      ]
    }
  },

}
</script>

<style>

</style>