<template>
  <header>
  <navbar></navbar>
  </header>
  <body>
    <router-view/>

  </body>
  <footer>
<Footer></Footer>
  </footer>
</template>
<script>
// @ is an alias to /src
import navbar from '@/components/NavbarCS.vue'
import Footer from '@/components/footerCS.vue'
export default {
  components: {
    navbar,
    Footer 
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Barlow+Semi+Condensed:ital,wght@1,200&family=Comfortaa&family=Poppins:ital,wght@0,200;0,300;1,300&family=Roboto:ital,wght@0,300;0,400;0,500;1,100;1,500&display=swap');

#app {
  font-family: 'Archivo Narrow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}
body{
  min-height: 100vh; 
  overflow-x: hidden;
}
footer{
  margin-top: auto;
}
nav a {
  font-weight: bold;
  color: #060d15;
}

nav a.router-link-exact-active {
  color: #fbc000;
}
</style>
