<template>
    <SpinnerC v-if="isLoading" />  
    <div v-else>

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

</style>