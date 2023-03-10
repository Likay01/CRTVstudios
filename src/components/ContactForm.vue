<template>
    <div class="main">
   <div class="inputs col">
    
        <form action="https://formspree.io/f/mrgvleeo" method="POST">
            <div class="mb-3">
              <label for="InputEmail" class="form-label">Email address</label>
              <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="example@CRTVstudio.com" required>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            <button type="submit" class="btn btn-warning">Submit</button>
          </form>
    </div>
    <p></p>
    <div class="col">
        <img src="https://i.postimg.cc/mr562WXZ/My-project-1-35.png" alt="">
    </div>
    </div>
 

</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.main{
    height: 100vh;
    display: flex;
    margin: auto;
    background-image: url(https://i.postimg.cc/fyYN9fkP/My-project-1-36.png);
    background-size: cover;
    background-position: center;
    opacity: 0;
    animation: fade 1s;
    animation-delay: 0.9s;
    animation-fill-mode: forwards;  
    width: 100%; 
}
.inputs{
    padding: 4rem;
    opacity: 0;
    animation: fade 1s;
    animation-delay: 2s;
    animation-fill-mode: forwards; 
}
form{
    margin-top: 20%; 
}
img{
    width: 40rem;
    margin-top: 3rem;
    opacity: 0;
    animation: fade 1s;
    animation-delay: 2s;
    animation-fill-mode: forwards; 
}
h1{
text-align: start;
font-size: 8rem;
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