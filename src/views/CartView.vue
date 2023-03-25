<!-- <template>
      <body>
<SpinnerC v-if="isLoading" />  
<div v-else>
     <div class="cart">  
<div class="col">
    <table class="t2 table" >
        <thead>
          <tr>
            <th scope="col">Icon</th>
            <th scope="col">Title</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
      
        <tbody class="done" v-for="product in cart" :key="product.id">
          <tr>
            <td><img :src="product.image" alt=""></td>
            <td>{{ product.name }}</td>
            <td><input type="number" v-model.number="product.quantity"></td>
            <td>R{{ product.price }}</td>
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
</div>  
    </body>
</template>

<script>
import SpinnerC from '@/components/Spinner.vue'

export default {
components: {
SpinnerC,
},
data(){
return{
  isLoading: true,
  // cart: [],
  // cartTotal: 0,
}
},
created(){
this.getCart(this.login);
setTimeout(()=>{
  this.isLoading = false;
}, 2000)
 }  ,
computed: {
  cart() {
  return this.$store.state.cart;
},
  login() {
    return this.$store.state.login?.UserId;
  }
}
}
</script> -->
<template>
  <div>
    <SpinnerC v-if="isLoading" />
    <div v-else>
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
              <tr v-for="product in cart" :key="product.id">
                <td><img :src="product.image" alt=""></td>
                <td>{{ product.name }}</td>
                <td><input type="number" v-model.number="product.quantity"></td>
                <td>R{{ product.price }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td class="text-black">TOTAL:</td>
                <td></td>
                <td></td>
                <td>R{{ cartTotal }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div class="col right">
          <img src="" alt="" width="400px">

          <router-link to="/checkout" class="navbar-brand m-auto">
            <button class="btn btn-dark text-white mb-3">Proceed to checkout</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerC from '@/components/Spinner.vue'

export default {
  components: {
    SpinnerC,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  created() {
    this.getCart(this.login)
      .then(() => {
        this.isLoading = false
      })
  },
  computed: {
    cart() {
      return this.$store.state.cart
    },
    cartTotal() {
      return this.$store.state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    },
    login() {
      return this.$store.state.login?.UserId
    },
  },
  methods: {
      getCart() {
      const UserId = this.$store.state.login?.UserId;
      this.$store.dispatch('getCart', UserId)
        .then(() => {
          this.isLoading = false;
        })
        .catch(error => {
          console.log(error);
          this.isLoading = false;
        });
    },
  },
}
</script>
<style scoped>
body{
   
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
    opacity: 0;
    animation: fade 1s;
    animation-delay: 0.9s;
    animation-fill-mode: forwards; 
}

.right{
    background-image: url(https://i.postimg.cc/wvgVfqSq/My-project-1-40.png);
     background-color: white;
    background-position: center;
    background-size: cover;
    margin: 4rem;
    box-shadow: 0px 20px 20px 10px rgba(0, 0, 0, 0.275);
    opacity: 0;
    animation: fade 1s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards; 
}
button{
position: relative;
top: 85%;
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