<template>
    <body>
        <select class="form-select w-25 m-auto mt-3" aria-label="Default select example">
            <option selected >filter</option>
            <option value="1">Paintings</option>
            <option value="2">Photography</option>
          </select>
          <div class="container" v-for="product in products" :key="product.prodId">
             <div class="card" style="width: 18rem;" >
       <img :src="product.prodImg" alt="">
        <h5 class="card-title" >{{product.prodName}}</h5>
        <h6 class="card-title" >{{product.Artist}}</h6>
         <p class="card-text">{{product.prodDiscription}}</p>
         <h6 class="card-title" >{{product.ProdPrice}}</h6>

           <a href="#" class="btn btn-warning">MORE</a>
     </div> 
          </div>
   
    </body>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
    export default {
        setup() {
  const store = useStore();
  store.dispatch('getProducts');
  let products = computed(() => store.state.products);
  return {
    products
  }
}   
    }
</script>

<style scoped>
body{
  height: 100vh;
  background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);
  background-size: cover;
}
.card{
    margin-top: 3rem;
}
</style>