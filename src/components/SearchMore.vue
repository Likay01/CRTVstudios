<template>
    <div>
        <div class="sub d-flex">
            <select class="form-select w-25 mt-3" aria-label="Default select example" v-model="artist">
               <option selected >filter</option>
               <option value="Naledi Modupi">Naledi Modupi</option>
               <option value="Karen Rosalie">Karen Rosalie</option>
               <option value="Inès Longevial">Inès Longevial</option>
               <option value="Brian Donnelly">Brian Donnelly</option>
             </select>
               <form class="d-flex w-25  mt-3" role="search">
                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchbar">
                 <button class="btn btn-warning" type="submit">Search</button>
               </form>
         </div>
         <div class="card" v-for="product in search" :key="product.ProdId" style="width: 18rem;">
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
      data(){
        return{
          searchbar:'',
          artist:''
        }
      },
      computed: {
        products() {
              return this.$store.state.products;
          },
          search() {
            let filtering = this.product.filter(item => item.Artist == this.artist || this.artist=='')
            if(this.searchbar.trim().length > 0){
              return filtering.filter((name)=> name.ProdName.toLowerCase().includes(this.searchbar.trim()))
            }
              return filtering
          }, 
      }
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