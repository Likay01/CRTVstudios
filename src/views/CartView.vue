<template>
    <body>
     <div class="cart">
    
<div class="col">
    <table class="t2 table">
        <thead>
          <tr>
            <th scope="col">Icon</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody class="done">
            <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>   
            </tr>
        </tbody>
        <tfoot>
            <tr>
            <td class="text-black">TOTAL:</td>
            <td></td>
            <td></td>
            <td>R</td>
            </tr>
        </tfoot>
      </table>  
      
</div>
<div class="col right">
    <img src="" alt="" width="400px">

    <router-link to="/checkout" class="navbar-brand m-auto" ><button class="btn btn-dark text-white mb-3">Proceed to checkout</button>
</router-link>       
</div>
</div>   
    </body>


</template>

<script>
    export default {
        
    }
</script>

<style scoped>
body{
    background-color: rgba(201, 201, 201, 0.263);
    height: 100vh;
}
.cart{
    display: flex;
    background-image: url(https://i.postimg.cc/HxTvxzvp/My-project-1-38.png);
    background-size: cover;
    background-position: center;
    height: 80vh;
    margin:auto;
    width: 80vw;
    margin-top:70px ;
    box-shadow: 0px 20px 20px 10px rgba(0, 0, 0, 0.275);

}

.right{
    background-image: url(https://i.postimg.cc/wvgVfqSq/My-project-1-40.png);
     background-color: white;
    background-position: center;
    background-size: cover;
    margin: 4rem;
    box-shadow: 0px 20px 20px 10px rgba(0, 0, 0, 0.275);
}
button{
position: relative;
top: 85%;
}
</style>