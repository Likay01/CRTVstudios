<template>
  <body>
    <h1 class="heading">About Us</h1>
    <div class="container">
<div class="col m-4">
<h1>"</h1>
<h5>CRTVstudios is an art selling business that offers a unique and diverse collection of art pieces for sale. From stunning paintings to captivating sculptures, CRTVstudios offers a wide range of artistic styles to suit every taste and preference. With a focus on high-quality craftsmanship and exceptional customer service, CRTVstudios is the go-to destination for art lovers looking to enhance their home or office with one-of-a-kind pieces that reflect their individual style and personality.</h5>
</div>
<div class="occupation">
  <img class="profile col" src="https://i.postimg.cc/HL5Y47sG/My-project-1-34.png" alt="">
 <div class="me">
    <p class="name">Lindokuhle Mgoqi</p>
  <p class="job">Founder of CRTVstudios</p>
 </div>
</div>
<div class="col m-2">
<img class="shoot" src="https://i.postimg.cc/tTFWnTVD/My-project-1-33.png" alt="">
</div>
  </div> 
  </body>
</template>

<script>
  export default {
      
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Archivo+Narrow&family=Barlow+Semi+Condensed:ital,wght@1,200&family=Comfortaa&family=Golos+Text:wght@400;500&family=News+Cycle:wght@700&family=Poppins:ital,wght@0,200;0,300;1,300&family=Roboto:ital,wght@0,300;0,400;0,500;1,100;1,500&display=swap');

body{
  background-color: rgba(217, 217, 215, 0.212);
  font-family: 'Archivo Narrow', sans-serif;
  opacity: 0;
  animation: fade 1s;
  animation-delay: 0.9s;
  animation-fill-mode: forwards;  
  width: 100%; 
  
}
.heading{
  margin-left: 4rem;
  font-weight: bold;
  font-size: 20rem;
  margin-top: 0;
  color: rgba(0, 0, 0, 0.044);
}
.container{
  box-shadow: 0px 20px 20px 10px rgba(0, 0, 0, 0.275);
  height: 70vh;
  align-items: center;
  width: 70vw;
  margin-top: 6rem;
  background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);
  display: flex;
  position: relative;
  bottom: 18rem;
  opacity: 0;
  animation: fade 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards; 
}
h1{
  font-size: 12rem;
  text-align: start;
  color: rgba(2, 2, 2, 0.264);
}
h5{
text-align: start;
position: relative;
bottom: 7rem;
margin-left:2rem;
word-wrap: break-word;
}
.profile{
  width: 3rem;
  border-radius: 50%;
  border: solid 1px;;
  height: 3rem;
}
.occupation{
  display: flex;
  position: relative;
  top: 12rem;
  right: 25rem;
}
.me{
  text-align: start;
  margin-left: 6px;
  margin-top:7px ;
  font-size: smaller;
}
.name{
  margin: 0;
}
.job{
  font-size: smaller;
}
.shoot{
  width: 25rem;
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