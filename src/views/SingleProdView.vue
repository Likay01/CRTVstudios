<template>
  <SpinnerC v-if="isLoading" />
  <div v-else>
    <div class="main" v-if="product">
      <div class="col">
        <img :src="product.ProdImg" alt="">
      </div>
      <div class="col">
        <div class="content">
          <h1 class="mt-4">{{product.ProdName}}</h1>
          <h3>{{product.Artist}}</h3>
          <div class="des">
            <h6>{{product.ProdDiscription}}</h6>
          </div>
          <h3 class="PRICE">R{{product.ProdPrice}}</h3>
          <p>{{product.ProdDate}}</p>
          <button type="submit" id="buy" class="btn btn-outline-warning text-dark mb-3" @click="addCart(product)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SpinnerC from '@/components/Spinner.vue';
import { computed } from 'vue';
  import { useStore } from 'vuex';
  import cookies from 'js-cookie';
export default {
  components: {
    SpinnerC,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  async addCart(product) {
      const UserId = cookies.get('UserId', );
      console.log(UserId, product.ProdId);
      this.$store.dispatch('addCart', {
        UserId: UserId,
        product: {
          UserId: UserId,
          ProdId: product.ProdId
        }
      })
    },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  setup() {
    const store = useStore();
    const product = computed(() => store.state.product);
    return {
      // eslint-disable-next-line vue/no-dupe-keys
      product
    }
  },
  mounted() {
    this.$store.dispatch('getProduct', parseInt(location.pathname.split('/')[location.pathname.split('/').length - 1]));
    this.$store.dispatch('fetchProductByID', this.$route.params.id)
      console.log(this.$route.params.id)
    },
  };
</script>
<style scoped>
.main{
  height: 100vh;
  background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);
  background-size: cover;
  background-position: center;
  display: flex;
  overflow:hidden;
}
img{
  padding-top: 3rem;
  width: 27rem;
 align-items: center;
 opacity: 0;
 animation: fade 1s;  
 animation-delay: 0.5s;
 animation-fill-mode: forwards; 
}
.content{
  text-align: start;
}
h1{
  font-size: 5rem;
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 0.8s;
  animation-fill-mode: forwards; 
}
h3{
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 1.1s;
  animation-fill-mode: forwards; 
}
.des{
  margin-top: 5rem;
  height: 18rem;
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 1.4s;
  animation-fill-mode: forwards; 
}
p{
margin-top:2rem;
opacity: 0;
animation: fade 1s;  
animation-delay: 2s;
animation-fill-mode: forwards; 
}
.PRICE{
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 1.7s;
  animation-fill-mode: forwards; 
}
button{
  position: relative;
  left: 75%;
  bottom: 5rem;
  width: 8rem;
  height: 3rem;
  opacity: 0;
  animation: fade 1s;  
  animation-delay: 2.3s;
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