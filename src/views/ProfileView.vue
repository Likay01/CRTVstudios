<template>
    <SpinnerC v-if="isLoading" />     
    <div v-else>
      <div class="main">
<div class="containing col"  v-for="user in users" :key="user.UserId">
  <h1 class="text-black">My Account</h1>
  <div class="def ">
     <img :src="user.profilePic" alt="">
  </div>
  <h4 class="mt-4">{{user.Username}}</h4>
  <div class="info">
    <div class="PI col">
    <h6>Personal infomation</h6>
    <div class="text">
     <p class="m-0 text-black">Name</p>
  <p class="answer">{{user.firstname}}</p>
    </div>
    <div class="text">
      <p class="m-0 text-black">Surname</p>
   <p class="answer">{{user.Surname}}</p>
     </div>
     <div class="text">
      <p class="m-0 text-black">Gender</p>
   <p class="answer">{{user.gender}}</p>
     </div>
     <div class="text mb-3">
      <p class="m-0 text-black">Date of membership</p>
   <p class="answer">{{user.JoinDate}}</p>
     </div>  
    </div>
     <div class="AD col">
     <h6>Account Details</h6>   
     <div class="text">
      <p class="m-0 text-black">Email</p>
   <p class="answer">{{user.email}}</p>
     </div>
     <div class="text mb-4">
      <p class="m-0 text-black">Password</p>
   <p class="answer dotted" type="password">{{user.psswrd}}</p>
     </div>
     </div>
    <button type="button" class="btn row"><i class="fa-solid fa-user-pen"  data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i></button>
    <button type="button" class="btn row btn-dark">Logout?</button>

  </div>
</div>
<div class="col">
<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-floating mb-3">
            <input type="username" class="form-control" id="floatingInput" placeholder="Username"  >
            <label for="floatingInput">Username</label>
          </div>
          <div class="form-floating mb-3">
              <input type="name" class="form-control" id="floatingInput" placeholder="Name"  required>
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input type="Surname" class="form-control" id="floatingInput" placeholder="Surname"   required>
              <label for="floatingSurname">Surname</label>
            </div>    
             <div class="form-floating mb-3">
              <input type="profile" class="form-control" id="floatingInput" placeholder="Profile" >
              <label for="floatingProfile">Profile</label>
            </div>     
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="email"  required>
              <label for="floatingInput">Email </label>
            </div>              
     
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="eg.********" autocomplete="off"  required>
              <label for="floatingInput">Password</label>
            </div>
            <div class="form-floating mb-3">
              <select class="form-select" id="floatingSelect" aria-label="Floating label select example"  required>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="others">Others</option>
              </select>
              <label for="floatingSelect">Gender</label>  
              </div>    
      </form>
      </div>
      <div class="modal-footer">
          <button type="submit" class="btn btn-dark btn-outline-dark text-white mb-3 " id="liveAlertBtn">Update</button>
            <div id="liveAlertPlaceholder"></div>
      </div>
    </div>
  </div>
</div>
</div>

</div>
    </div>
</template>

<script>
import SpinnerC from '@/components/Spinner.vue'
import { useStore } from 'vuex'
import { onMounted } from 'vue'
import {computed} from '@vue/runtime-core';

    export default {
      setup(){
const st = useStore()
  onMounted(async() => {
 await st.dispatch('getUser') 
})
let users = computed(() => st.state.users);
return{
  users
}
},
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
   currentUser(){     
    return this.$store.state.login;
   }  
  },

    }
</script>

<style scoped>
.main{
  height: 100vh;
  background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);
  background-size: cover;
  background-position: center;
  overflow: hidden;
}
.containing{
  background-color: rgba(174, 171, 171, 0.37);
  margin-left: 15rem;
  margin-right: 15rem;
  height: 100%;
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 0.9s;
  animation-fill-mode: forwards; 
}
.def{
  border: solid 1px;
  border-radius: 50%;
  width: 13rem;
  height: 13rem;
  margin: auto;
  background-image: url(https://i.postimg.cc/pLdk38Td/226-2267516-male-shadow-circle-default-profile-image-round-hd.jpg);
  background-position: center;
  background-size: cover;
}
img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.answer{
  font-size: smaller;
}
p{
font-size: medium;
}
.info{
  display: flex;
  text-align: start;
  margin-top: 5rem;
  margin-left: 25%;
}
.row{
height: 70px;
margin-top: 12.5rem;
position: relative;
right: 11rem;
}
.modal-content{
  background-color: rgba(174, 171, 171, 0.822);
}
.dotted{
  -webkit-text-security: circle;
  -moz-text-security: circle;
  font-size: medium;
  
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