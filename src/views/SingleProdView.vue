<template>
    <SpinnerC v-if="isLoading" />  
    <div v-else>
<div class="main" v-if="product">
<div class="col">
  <img :src="product.ProdImg" alt="">
</div>
<div class="col">
  <div class="content">
    <h1 class="mt-4">{{product.ProdName}}</h1>
    <h3>{{Artist}}</h3>
    <div class="des">
          <h6>{{product.ProdDiscription}}</h6>
    </div>
    <h4>{{product.ProdPrice}}</h4>
    <p>{{product.ProdDate}}</p>
    <button type="submit" class="btn  btn-outline-warning text-dark mb-3">Cart</button>

  </div>
</div>
</div>
    </div>
</template>

<script>
import SpinnerC from '@/components/Spinner.vue'

    export default {
    components: {
    SpinnerC,
  },
  data(){
    return{
      isLoading: true,
    }
  },
  created(){
    setTimeout(()=>{
      this.isLoading = false;
    }, 2000)
  },
  computed: {
    product(){
      return this.$store.state.product
    }
  },
  mounted() {
    this.$store.dispatch('')
  }  
    }
</script>

<style scoped>
.main{
  height: 100vh;
  background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);
  background-size: cover;
  background-position: center;
  display: flex;
  overflow:hidden;
}
img{
  padding-top: 3rem;
  widows: 15rem;
 align-items: center;
 opacity: 0;
 animation: fade 1s;  
 animation-delay: 0.5s;
 animation-fill-mode: forwards; 
}
.content{
  text-align: start;
}
h1{
  font-size: 5rem;
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 0.8s;
  animation-fill-mode: forwards; 
}
h3{
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 1.1s;
  animation-fill-mode: forwards; 
}
.des{
  margin-top: 5rem;
  height: 20rem;
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 1.4s;
  animation-fill-mode: forwards; 
}
p{
margin-top:2rem;
opacity: 0;
animation: fade 1s;  
animation-delay: 2s;
animation-fill-mode: forwards; 
}
h4{
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 1.7s;
  animation-fill-mode: forwards; 
}
button{
  position: relative;
  left: 75%;
  bottom: 3rem;
  width: 8rem;
  height: 3rem;
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 2.3s;
  animation-fill-mode: forwards; 
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