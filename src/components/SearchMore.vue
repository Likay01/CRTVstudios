<template>
    <div>
        <div class="sub d-flex">
            <select class="form-select w-25 mt-3" aria-label="Default select example">
               <option selected >filter</option>
               <option value="1">Paintings</option>
               <option value="2">Photography</option>
             </select>
               <form class="d-flex w-25  mt-3" role="search">
                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="search">
                 <button class="btn btn-warning" type="submit">Search</button>
               </form>
         </div>
         <div class="card" v-for="product in searchbar" :key="product.ProdId" style="width: 18rem;">
          <img :src="product.ProdImg" alt="">
              <h5 class="card-title" >{{product.ProdName}}</h5>
              <h6 class="card-title" >{{product.Artist}}</h6>
              <h6 class="card-title" >R{{product.ProdPrice}}</h6>
    <router-link :to="{name:'single', params:{id:product.ProdId}}" class="btn btn-warning">More</router-link>       
       </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
select{
  opacity: 0;
  animation: fade 1s;
  animation-delay: 1s;
  animation-fill-mode: forwards; 
  margin-left: 3rem;
}
form{
  margin-left: 43rem ;
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