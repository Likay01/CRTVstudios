<template>
<SpinnerC v-if="isLoading"/>
<div v-else>
  <div class="add">
    <div class="col-10 all">
      <div class="Prod" id="Products"> 
    <h5>Products</h5>
    <table class="Products table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Product</th>
          <th scope="col">Artist</th>
          <th scope="col">Img</th>
          <th scope="col">price</th>
          <th scope="col">Description</th>
          <th scope="col">Date</th>
          <th scope="col">Del</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody class="Table">
        <tr v-for="product in products" :key="product.ProdId">
          <td>{{product.ProdId}}</td>
          <td>{{product.ProdName}}</td>
          <td>{{product.Artist}}</td>        
          <td>{{product.ProdImg}}</td>
          <td>R{{product.ProdPrice}}</td>
          <td>{{product.ProdDiscription}}</td>
          <td>{{product.ProdDate}}</td>
          <td><button type="button" class="btn btn-danger"  @submit.prevent="Delete"><i class="fa-regular fa-trash-can"></i></button></td>
          <td><button type="button" class="btn btn-success"  data-bs-toggle="modal" :data-bs-target="'#EditModal'+ `${product.ProdId}`"><i class="fa-regular fa-pen-to-square"></i></button></td>
          <!-- Edit Modal -->
          
                <div class="modal fade" :id="'EditModal' + `${product.ProdId}`" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content bg-success">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">EDIT PRODUCT</h1>
                      </div>
                      <div class="modal-body">
                        <form @submit.prevent="Edit">
                          <div class="mb-3">
                            <label for="product" class="form-label text-white">Product name</label>
                            <input type="text" class="form-control" id="product1" aria-describedby="emailHelp" v-model="product.ProdName" required>
                          </div>
                          <div class="mb-3">
                            <label for="product" class="form-label text-white">Artist </label>
                            <input type="text" class="form-control" id="product" v-model="product.Artist" required>
                          </div>
                          <div class="mb-3">
                            <label for="product" class="form-label text-white">image</label>
                            <input type="text" class="form-control" id="product" v-model="product.ProdImg" required>
                          </div>
          
                          <div class="mb-3">
                            <label for="product" class="form-label text-white">Price</label>
                            <input type="text" class="form-control" id="product" v-model="product.ProdPrice" required>
                          </div>
          
                          <div class="mb-3">
                            <label for="product" class="form-label text-white">Description</label>
                            <input type="text" class="form-control" id="product" v-model="product.ProdDiscription" required>
                          </div>
          
                          <button type="submit" class="btn btn-dark text-white" @click="Edit">Submit</button>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-dark text-white" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
        </tr>
      </tbody>
      <tfoot>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td><button type="button" class="btn btn-outline-dark bg-warning text-dark" data-bs-toggle="modal" data-bs-target="#AddModal">ADD</button></td>
      </tfoot>



      <!-- Add Modal -->
      <div class="modal fade" id="AddModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content bg-warning">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-white" id="exampleModalLabel">NEW PRODUCT</h1>
            </div>
            <div class="modal-body">
              <form @submit.prevent="Add">
                <div class="mb-3">
                  <label for="product" class="form-label text-white">Product name</label>
                  <input type="text" class="form-control" id="product1" aria-describedby="emailHelp" v-model="info.ProdName" required>
                </div>
                <div class="mb-3">
                  <label for="product" class="form-label text-white">Artist </label>
                  <input type="text" class="form-control" id="product" v-model="info.Artist" required>
                </div>
                <div class="mb-3">
                  <label for="product" class="form-label text-white">image</label>
                  <input type="text" class="form-control" id="product" v-model="info.ProdImg" required>
                </div>

                <div class="mb-3">
                  <label for="product" class="form-label text-white">Price</label>
                  <input type="text" class="form-control" id="product" v-model="info.ProdPrice" required>
                </div>

                <div class="mb-3">
                  <label for="product" class="form-label text-white">Description</label>
                  <input type="text" class="form-control" id="product" v-model="info.ProdDiscription" required>
                </div>

                <button type="submit" class="btn btn-dark text-white">Submit</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-dark text-white" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

    </table>
  </div>
    <div class="Use" id="users">
      <h5 class="Users">Users</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">User</th>
            <th scope="col">Profile</th>
            <th scope="col">Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Gender</th>
            <th scope="col">Role</th>
            <th scope="col">Date</th>              
            <th scope="col">Del</th>
            <th scope="col">Edit</th>
          </tr>
        </thead>
        <tbody class="userTable">
          <tr v-for="user in users" :key="user.UserId">
           <td>{{user.UserId}}</td>
           <td><img class="w-25 p-0" :src="user.profilePic" alt=""></td>
           <td>{{user.firstname}}</td>
           <td>{{user.Surname}}</td>
           <td>{{user.Username}}</td>
           <td>{{user.email}}</td>
           <td>{{user.psswrd}}</td>
           <td>{{user.gender}}</td>
           <td>{{user.UserRole}}</td>
           <td>{{user.JoinDate}}</td>
           <td><button type="button" class="btn btn-danger" @click="user.UsedId"><i class="fa-regular fa-trash-can"></i></button></td>
           <td><button type="button" class="btn btn-success"><i class="fa-solid fa-user-pen"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  
</div>
    </template>
    <script>
    import {useStore} from 'vuex';
    import {computed} from '@vue/runtime-core';
    import SpinnerC from '@/components/Spinner.vue'
    export default {
      setup() {
        const info = {
        ProdName:'',
        Artist:'',
        ProdImg:'',
        ProdPrice:'',
        ProdDiscription:'',
      };
      const st = useStore();

      const Edit = (product)=> {
        return st.dispatch('updateProduct', {
        ProdName: product.ProdName,
        Artist: product.Artist,
        ProdImg: product.ProdImg,
        ProdPrice: product.ProdPrice,
        ProdDiscription: product.ProdDiscription, 
        });
        // st.dispatch('getProduct', {
        // ProdName: product.ProdName,
        // Artist: product.Artist,
        // ProdImg: product.ProdImg,
        // ProdPrice: product.ProdPrice,
        // ProdDiscription: product.ProdDiscription, 
        // });
      }
      const Add = ()=> {
            st.dispatch('addProduct', info);
            st.dispatch('getProduct', info);
      } 
      const Delete = ()=> {
        st.dispatch('deleteProduct');
      }
        st.dispatch('getProducts');
        st.dispatch('getUsers');
        let products = computed(() => st.state.products);
        let users = computed(() => st.state.users);
        return {
          info,
         products,
          users,
          Add,
          Edit,
          Delete
        }
      },
    components: {
    SpinnerC,
  },
  data(){
    return{
      isLoading: true,
    }
  },
  created(){
    setTimeout(()=>{
      this.isLoading = false;
    }, 2000);
  },
  methods: {
  },
}
    </script>
    <style scoped>
    .add{
    display: flex;
    width: 100vw;
    background-image: url(https://i.postimg.cc/R00YRQBn/My-project-1-19.png);
    background-size: cover;
    }
    .all{
      padding-top: 2rem;
      width: 99vw;
    }
   .Prod{
    min-height: 100vh;
   }
   .Use{
    min-height: 100vh;
   }
    h4{
  margin: auto;
    }
  
    td {
      word-break: break-all;
      font-size: 8px;
      font-weight: bold;
    }
    </style>