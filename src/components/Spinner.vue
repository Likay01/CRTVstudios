<template>
    <div v-if="showSpinner" class="loader"></div>
    <div v-else></div>
</template>

<script>

    export default {
 name: 'SpinnerC'  
    }
</script>

<style scoped>
.loader {
    width: 84px;
    height: 84px;
    position: relative;
    overflow: hidden;
  }
  
  .loader:before , .loader:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: yellow;
    transform: translate(-50% , 100%)  scale(0);
    animation: push_4051 2s infinite ease-in;
  }
  
  .loader:after {
    animation-delay: 1s;
  }
  
  @keyframes push_4051 {
    0% {
      transform: translate(-50% , 100%)  scale(1);
    }
  
    15% , 25% {
      transform: translate(-50% , 50%)  scale(1);
    }
  
    50% , 75% {
      transform: translate(-50%, -30%) scale(0.5);
    }
  
    80%,  100% {
      transform: translate(-50%, -50%) scale(0);
    }
  }
    
</style>