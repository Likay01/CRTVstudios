<template>
    <SpinnerC v-if="isLoading" />  
    <div v-else>
<forms></forms>
    </div>
</template>

<script>
import forms from '../components/ContactForm.vue'
import SpinnerC from '@/components/Spinner.vue'

    export default {
   components: {
        forms,
       SpinnerC
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