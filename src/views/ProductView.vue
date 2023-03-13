<template>
    <body>
        <select class="form-select w-25 m-auto mt-3" aria-label="Default select example">
            <option selected >filter</option>
            <option value="1">Paintings</option>
            <option value="2">Photography</option>
          </select>
            <div class="container">
             <div class="row">
              <div class="card" v-for="product in products" :key="product.ProdId" style="width: 18rem;" >
                <img :src="product.ProdImg" alt="">
                    <h5 class="card-title" >{{product.ProdName}}</h5>
                    <h6 class="card-title" >{{product.Artist}}</h6>
                    <p class="card-text">{{product.ProdDiscription}}</p>
                    <h6 class="card-title" >R{{product.ProdPrice}}</h6>
                    <p class="card-text">{{product.ProdDate}}</p>

           <a href="#" class="btn btn-warning">MORE</a>
             </div>

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
},

    }
</script>

<style scoped>
body{
  background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);
  background-size: cover;
  background-position: center;
  overflow: hidden;
  opacity: 0;
  animation: fade 1s;
  animation-delay: 0.9s;
  animation-fill-mode: forwards; 
}
select{
  opacity: 0;
  animation: fade 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards; 
}
.card{
    margin-top: 3rem;
}
.container{
  opacity: 0;
  animation: fade 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards; 
}
.row{
  display: flex;
  justify-content: space-between;
}
@keyframes fade {
  from{
      opacity: 0;
  }
  to{
      opacity: 1;
  }
}
</style>