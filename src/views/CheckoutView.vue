<template>
    <body>
        <div class="checkout">
<div class="col info">
    <form action="">
          <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label text-black">Card Number</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="0000-0000-0000">
      </div>
      <div class="split">
            <div class="col m-3">
        <label for="exampleFormControlInput1" class="form-label text-black">Security code</label>
        <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="***">
      </div>
      <div class="col m-3">
        <label for="exampleFormControlInput1" class="form-label text-black">Expiration date</label>
        <input type="date" class="form-control" id="exampleFormControlInput1" placeholder="MM/YY">
      </div>
      </div>  
      <button type="submit" class="btn  btn-outline-warning text-warning  mb-3">Confirm Payment</button>
    </form>
</div>
<div class="col"></div>
<img src="https://i.postimg.cc/JhW5TNgV/My-project-1-41.png" alt="" class="m-auto" width="500px">
        </div>
    </body>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
body{
    background-image: url(https://i.postimg.cc/DZ4CHvgR/My-project-1-42.png);
    background-size: cover;
    background-position: center; 
    overflow: hidden; 
    opacity: 0;
    animation: fade 1s;
    animation-delay: 0.9s;
    animation-fill-mode: forwards; 
}
.checkout{
    display: flex;
    padding: 40px;
    margin-top: 3rem;
    background-color: rgba(0, 0, 0, 0.033);
}
.split{
    display: flex;
}
button:hover{
color: white;
}
.info{
    margin-top: 8rem;
    opacity: 0;
    animation: fade 1s;
    animation-delay: 2s;
    animation-fill-mode: forwards; 
}
img{
    margin-right: 2rem;
    transition: all 10s;
    transform: scale(0.7) rotate();
    animation: awesomeAnimation 10s infinite;
    opacity: 0;
    animation: fade 1s;
    animation-delay: 3s;
    animation-fill-mode: forwards; 
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