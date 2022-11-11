<template>
  <div>
    <h1>{{ review.name }}</h1>
    <h1>{{ review.review }}</h1>
    <h1>{{ review.rating }}</h1>

    <button @click="deleteReview">
      Delete Review
    </button>
  </div>
</template>

<script>
export default {
    props:['review'],
    mounted(){
  this.$store.commit('updateProductReviewsFromLocalStorage')
},
methods:{
  deleteReview(){
                this.$store.commit("deleteReview", this.review);
            },
}
}
</script>

<style>

</style>