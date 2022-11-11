<template>
<div>

    <input type="text" v-model="productReview.name">

    <label for="review">Review:</label>
    <textarea v-model="productReview.review"  cols="30" rows="10"></textarea>
    <label for="rating">Rating:</label>
    <select v-model.number="productReview.rating" id="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
    </select>

    <button @click="submit">Submit</button>
       <reviewCard :review="productReview" v-for="(productReview, index) in productReviews" :key="index"/>
    
</div>
</template>

<script>
export default {
    props:['currentProduct'],
    data(){
        return{
            productReview:[
                {id: null, name: "", review: "", rating: null, uID: null}
            ]
        }
    },
    methods:{
        async submit(){
            let uID = Math.ceil(Math.random()*1000000)
            this.productReview.uID = uID;
            this.productReview.id = this.currentProduct;
            await this.$store.commit('submit', this.productReview);
            
        }
    },
    computed:{
        productReviews(){
            return this.$store.getters.productReviews(this.currentProduct)
        },
    },
    async mounted(){
    this.$store.commit('updateProductReviewsFromLocalStorage')
    }
}
</script>

<style>
form{
    background: #3398ff;
}

</style>