<template>
  <body>
    <img src="https://i.postimg.cc/mkr16hdD/CRTVstudios.png" alt="">
  </body>
</template>

<script>

    export default {
 name: 'SpinnerC'  
    }
</script>

<style scoped>
body{
  height: 100vh;
  width: 100vh;
  margin: auto;
  padding-top:15% ;
}

img{
  width: 15rem;
  opacity: 0.8;
  animation: pulse_414 0.4s alternate infinite ease-in-out;
  animation-delay: 0.4s;
}

@keyframes pulse_414 {
  to {
    transform: scale(0.8);
    opacity: 0.5;
  }
}
</style>