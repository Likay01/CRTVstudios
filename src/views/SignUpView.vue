<template>
    <SpinnerC v-if="isLoading" />  
    <div v-else>
<Signup></Signup>
    </div>
</template>

<script>
import Signup from '../components/SignUpForm.vue'
import SpinnerC from '@/components/Spinner.vue'

    export default {
        components: {
        Signup,
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