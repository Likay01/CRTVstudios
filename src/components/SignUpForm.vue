<template>
    <div class="sign overflow-hidden">
        <h1>
            SIGN UP
        </h1>
          <form  @submit.prevent="signUp">
            <div class="form-floating mb-3">
                <input type="name" class="form-control" id="floatingInput" placeholder="Name" v-model="info.firstname" required>
                <label for="floatingInput">Name</label>
              </div>
              <div class="form-floating mb-3">
                <input type="Surname" class="form-control" id="floatingInput" placeholder="Surname"  v-model="info.Surname" required>
                <label for="floatingSurname">Surname</label>
              </div>    
               <div class="form-floating mb-3">
                <input type="profile" class="form-control" id="floatingInput" placeholder="Profile" v-model="info.profilePic">
                <label for="floatingProfile">Profile</label>
              </div>     
              <div class="form-floating mb-3">
                <input type="username" class="form-control" id="floatingInput" placeholder="Username"  v-model="info.Username">
                <label for="floatingInput">Username</label>
              </div>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="email" v-model="info.email" required>
                <label for="floatingInput">Email </label>
              </div>              
       
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="eg.********" autocomplete="off" v-model="info.psswrd" required>
                <label for="floatingInput">Password</label>
              </div>
              <!-- <div class="form-floating mb-3">
                <input type="gender" class="form-control" id="floatingInput" placeholder="example@CRTVstudios.com" v-model="info.gender" required>
                <label for="floatingInput">Gender</label>
              </div>  -->
              <div class="form-floating mb-3">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="info.gender" required>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="others">Others</option>
                </select>
                <label for="floatingSelect">Gender</label>  
                </div>    
              <div class="form-floating mb-3">
                <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model="info.UserRole">
                  <option value="1" disabled>Admin</option>
                  <option value="2">Consumer</option>
                </select>
                <label for="floatingSelect">Role</label>
            </div>
              <div class="form-floating mb-3">
                <input type="date" class="form-control" id="floatingInput" placeholder="Date" v-model="info.JoinDate" required>
                <label for="floatingInput">Date</label>
              </div>
              <div class="form-text text-black mb-3 form-floating">Information provided is confidential information.</div>
              <div class="form-control-wrapper">  
                <label class="form-control bg-gradient" v-show="userMsg">{{userMsg}}</label>
              </div>
              <button type="submit" class="btn btn-dark btn-outline-dark text-white mb-3 " id="liveAlertBtn">Submit</button>
              <div id="liveAlertPlaceholder"></div>
        </form>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
    export default {
        setup(){
      const info = {
        firstname:'',
        Surname:'',
        profilePic:'',
        Username:'',
        email:'',
        psswrd:'',
        UserRole:'',
        gender:'',
        JoinDate:''
      };
      const st = useStore();
      const signUp = ()=> {
        st.dispatch("signup", info);
        st.dispatch("getUsers", info);
      }
      const userMsg = 
      computed( ()=>st.state.message )
      return {
        info,
        userMsg,
        signUp
      }
     }
    }
</script>

<style  scoped>
form{
  height: 100%;
  padding: 10px;
}
.sign{
    margin: auto;
    background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);
    background-size: cover;
    background-position: center;
    opacity: 0;
    animation: fade 1s;
    animation-delay: 0.9s;
    animation-fill-mode: forwards;  
    width: 100%; 
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