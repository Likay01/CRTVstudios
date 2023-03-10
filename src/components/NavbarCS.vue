<template>
    <nav class="navbar navbar-expand-lg bg-white pt-0">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <router-link to="/about" class="nav-link active" aria-current="page">About Us</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul class="dropdown-menu">
                  <li><router-link to="/product" class="dropdown-item" >Products</router-link></li>
                  <li><router-link to="/admin" class="dropdown-item" >Admin</router-link></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><router-link to="/contact" class="dropdown-item" >Contact Us</router-link></li>
                </ul>
              </li>
            </ul>
                  <router-link to="/" class="navbar-brand m-auto" >
                  <img src="https://i.postimg.cc/mkr16hdD/CRTVstudios.png" alt="home">
                </router-link>
            <form class="d-flex" role="search">
             <router-link to="/cart" class="navbar-brand m-auto" ><i class="fa-solid fa-cart-flatbed"></i></router-link>       
              <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
              <button type="button" class="signup" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</button>
            </form>
          </div>
        </div>
      </nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.navbar{
padding-left: 24px;
padding-right: 24px;
}
img{
  width: 5rem;
}
.signup{
border-color: black;
background-color: black;
color: white;
}
i{
  margin-right: 1rem;
}
</style>