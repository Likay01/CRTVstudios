<!-- <template>
  <SpinnerC v-if="isLoading" />  
<div v-else>
    <div class="body">
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
           </form>
     </div>
            <div class="container">
             <div class="row">
              <div class="card" v-for="product in products" :key="product.ProdId" style="width: 18rem;">
                <img :src="product.ProdImg" alt="">
                    <h5 class="card-title" >{{product.ProdName}}</h5>
                    <h6 class="card-title" >{{product.Artist}}</h6>
                    <h6 class="card-title" >R{{product.ProdPrice}}</h6>
          <router-link :to="{name:'single', params:{id:product.ProdId}}" class="btn btn-warning">More</router-link>       
             </div>

            </div>
     </div> 
    </div>
</div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerC from '@/components/Spinner.vue'
    export default {
        setup() {
  const store = useStore();
  store.dispatch('getProducts');
  let products = computed(() => store.state.products);

  return {
    products,
  }
},
components: {
    SpinnerC
  },
  data(){
    return{
      isLoading: true,
      searchbar:'',
      artist:''
    }
  },
  created(){
    setTimeout(()=>{
      this.isLoading = false;
    }, 2000)
  },
  computed:{
        product() {
              return this.$store.state.products;
          },
          search(){
            let filtering = this.products.filter(products => products.Artist == this.artist || this.artist =='')
            if(this.searchbar.trim().length > 0){
              return filtering.filter((input)=> input.Artist.toLowerCase().includes(this.searchbar.trim().toLowerCase()))
            }
              return filtering
          }, 
      }

    }
</script> -->
<template>
  <SpinnerC v-if="isLoading" />  
  <div v-else>
    <div class="body">
      <div class="sub d-flex">
        <select class="form-select w-25 mt-3" aria-label="Default select example" v-model="artist">
          <option value="">filter</option>
          <option value="Naledi Modupi">Naledi Modupi</option>
          <option value="Karen Rosalie">Karen Rosalie</option>
          <option value="Inès Longevial">Inès Longevial</option>
          <option value="Brian Donnelly">Brian Donnelly</option>
        </select>
        <form class="d-flex w-25  mt-3" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="searchbar">
        </form>
      </div>
      <div class="container">
        <div class="row">
          <div class="card" v-for="product in filteredProducts" :key="product.ProdId" style="width: 18rem;">
            <img :src="product.ProdImg" alt="">
            <h5 class="card-title">{{product.ProdName}}</h5>
            <h6 class="card-title">{{product.Artist}}</h6>
            <h6 class="card-title">R{{product.ProdPrice}}</h6>
            <router-link :to="{name:'single', params:{id:product.ProdId}}" class="btn btn-warning">More</router-link>       
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import SpinnerC from '@/components/Spinner.vue'

export default {
  components: {
    SpinnerC
  },
  data(){
    return{
      isLoading: true,
      searchbar:'',
      artist:''
    }
  },
  created(){
    const store = useStore();
    store.dispatch('getProducts').then(() => {
      this.isLoading = false;
    });
  },
  computed:{
    products() {
      return this.$store.state.products;
    },
    filteredProducts() {
      let filtering = this.products.filter(product => {
        return this.artist === '' || product.Artist === this.artist;
      });
      if (this.searchbar.trim().length > 0) {
        return filtering.filter(product => {
          return product.Artist.toLowerCase().includes(this.searchbar.trim().toLowerCase());
        });
      }
      return filtering;
    }, 
  }
}
</script>

<style scoped>
.body{
  background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);
  background-size: cover;
  background-position: center;
  overflow: hidden;
  opacity: 0;
  animation: fade 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards; 
}
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
img{
  height: 394px;
}
.card{
    margin-top: 3rem;
}
.container{
  opacity: 0;
  animation: fade 1s;
  animation-delay: 1s;
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