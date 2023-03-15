<template>
    <SpinnerC v-if="isLoading" />  
<div v-else>
      <div class="container">
<div class="col">
    <h2 class="word-effect">Inès Longevial</h2>
    <h2 class="word">Inès Longevial</h2>
<h3 class="col-8">Inès Longevial works with drawing and painting in resonance with impressions, feelings, sensations from which she naturally extracts her palette. The artist approaches her memories in color and gives form to candid and absorbed faces, which carry the nostalgia of seasons, sunsets, shades of light and caresses.</h3>
<button type="button" class="btn btn-outline-dark"><router-link to="/product" class="nav-link active" aria-current="page">See art by Inès ?</router-link></button>
</div>
<div class="Artist col-5 m-auto">
<img src="https://i.postimg.cc/cCS13Fbf/My-project-1-32.png" alt="">
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
  }     
    }
</script>

<style scoped>
.container{
    display: flex;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
    height: 100vh;
    background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);

}
.word-effect{
    font-size: 5rem;
    color: rgba(185, 185, 185, 0.156);
    text-align: start;
    margin: 0;
    opacity: 0;
    animation: fade 1s;
    animation-delay: 0.9s;
    animation-fill-mode: forwards;   
}
.Artist{
    opacity: 0;
    animation: fade 1s;
    animation-delay: 4s;
    animation-fill-mode: forwards;
}
.word{
    font-size: 5rem;
    position: relative;
    bottom: 110px;
    text-align: start;
    opacity: 0;
    animation: fade 1s;
    animation-delay: 0.9s;
    animation-fill-mode: forwards; 
}
h3{
    text-align: start;
    opacity: 0;
    animation: fade 1s;
    animation-delay: 2s;
    animation-fill-mode: forwards;   
}

.btn{
margin-right: 100%;
width: 12rem;
margin-top: 3rem;
font-size: 25px;
border: solid 5px;
font-weight: bold;
opacity: 0;
animation: fade 1s;
animation-delay: 6s;
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