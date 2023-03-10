<template>
    <div class="main">
        <div class="ftInfo">
             <div class="col-6 " >
            <img src="https://i.postimg.cc/mkr16hdD/CRTVstudios.png" class="d-flex" alt="home">
            <p class="creds d-flex">Website bulit by Lindokuhle Mgoqi.</p>
        </div>
        <div class="col-6 m-auto">
            <router-link to="/contact" class="nav-link" ><h6 class=" Ftr">Contact Us</h6></router-link>
            <p class="m-0">Join the fam</p>
            <p class="m-0">We would love to hear from you</p>
            <p>Our fellow ART LOVER !</p>
        </div>
        </div>
       
<p class="last">Copyright &copy; 2023 CRTVstudios.</p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
img{
   width: 7rem;
   height: 5rem;
  padding: 20px;
  }
.ftInfo{
    background-color: rgba(209, 208, 208, 0.364);
    min-height: 25vh;
    display: flex;
}
p{
    font-size: small;
}
.creds{
 margin-left: 
 10px;
padding-top:50px;
margin-bottom: 0;
}
.Ftr{
color: black;
}
.last{
    background-color: rgba(164, 162, 162, 0.43);
    color: black;
    margin-bottom: 0;
}
.main{
    width: 100%;
}
.main > *{
    flex-basis: 100%;
    
    }
</style>