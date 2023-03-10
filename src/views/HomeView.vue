<template>
  
  <div class="fstBanner">
    <img class="Crtv" src="https://i.postimg.cc/mkr16hdD/CRTVstudios.png" alt="home">
<h4 class="slogan">Art that speaks to your soul - find your masterpiece with us!</h4>
  </div>
  <div class="origins">
    <div class="col-6">
<img class="OriImg" src="https://i.postimg.cc/zGYmsQnT/My-project-1-28.png" alt="Origin">
    </div>
    <div class="col-6">
<h3>Art draws back to the ancient times of cave painting and rock art to tell stories, now in the present day art has advanced and diverted to many forms such as Painting, Photography and carving to express emotions and explore the depth of the creative minds behind the art.</h3>
<button type="button" class="btn btn-outline-dark"><router-link to="/about" class="nav-link active" aria-current="page">About Us</router-link></button>
    </div>
  </div>
  <div class="grids">
      <div class="grid-container">
        <router-link to="/naledi" class="container-1 nav-link active" aria-current="page"><div class=""><h2 class="Names text-black">Naledi modupi</h2></div></router-link>
        <router-link to="/karen" class="container-2 nav-link active" aria-current="page"><div class=""><h2 class="Names text-black">Karen Rosalie</h2></div></router-link>
        <router-link to="/brian" class="container-3 nav-link active" aria-current="page"><div class=""><h2 class="Names text-black">Brian Donnelly</h2></div></router-link>
        <router-link to="/ines" class="container-4 nav-link active" aria-current="page"><div class=""><h2 class="Names text-black">Inès Longevial</h2></div></router-link>
  </div>
  </div>

</template>

<script>
  export default {
    
  }
</script>

<style scoped>

.fstBanner{
  width: 100%;
  background-image: url(https://i.postimg.cc/T3kwDZBn/Screenshot-2023-03-09-092632.png);
  background-position:bottom;
  background-size: cover;
  height: 93vh;
  color: rgb(0, 0, 0);
}
.slogan{
  opacity: 0;
animation: fade 1s;
animation-delay: 1.5s;
animation-fill-mode: forwards;
}
.Crtv{
    width: 30rem;
  margin-top: 6rem;
  opacity: 0;
animation: fade 1s;
animation-delay: 1s;
animation-fill-mode: forwards;
}
.origins{
  display: flex;
  height: 100vh;
  background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);
  background-size: cover;
}
.OriImg{
width: 30rem;
margin-top: 10vh;

}
h3{
  margin-top: 25vh;
  text-align: start;
}
.btn{
 margin-top: 5rem;
}
.grids{
  background-image: url(https://i.postimg.cc/qq7pnr6n/My-project-1-27.png);
}
.grid-container{
  display: grid;
  grid-template-columns:repeat(2, 48vw);
  grid-template-rows: repeat(2, 50vh);
  grid-auto-rows: 200px;
  margin-left: 18px;
  margin-right: 12px;
  gap: 12px;

}
.container-1{
width: 100%;
transition: transform 2s;
object-fit: contain;
  border: solid;
  background-image:  url(https://i.postimg.cc/HnyQTwZr/My-project-1-26.png);
  background-position: center;
  background-size: cover;
}
.container-2{
  width: 100%;
  transition: transform 2s;
  object-fit: contain;
  border: solid;
  background-image:  url(https://i.postimg.cc/D09PGjJQ/My-project-1-25.png);
  background-position: center;
  background-size: cover;
}
.container-3{
  width: 100%;
  transition: transform 2s;
  object-fit: contain;
  border: solid;
  background-image:  url(https://i.postimg.cc/cJx26CNx/My-project-1-24.png);
  background-position: center;
  background-size: cover;
}
.container-4{
  width: 100%;
  transition: transform 2s;
  object-fit: contain;
  border: solid;
  background-image:  url(https://i.postimg.cc/LsGtwQDc/My-project-1-23.png);
  background-position: center;
  background-size: cover;
}
.container-1:hover,.container-2:hover,.container-3:hover,.container-4:hover{

animation: zoom 0.6s ease-in-out forwards;

}
.Names{
  text-align: end;
  margin-bottom: auto;
  text-decoration: underline;

}
@keyframes fade {
  from{
      opacity: 0;
  }
  to{
      opacity: 1;
  }
}
@keyframes zoom {
  from{
      scale: 1;
  }
  to{
      scale: 0.9;
  }
}
@keyframes scroll {
  0%{
    transform: translateX(0);
  }
  100%{
    transform: translateX(calc(-250px * 9));
  }
}
</style>