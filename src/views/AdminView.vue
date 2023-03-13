<template>
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
            <td>{{product.ProdPrice}}</td>
            <td>{{product.ProdDiscription}}</td>
            <td>{{product.ProdDate}}</td>
            <td><button type="button" class="btn btn-danger"><i class="fa-regular fa-trash-can"></i></button></td>
            <td><button type="button" class="btn btn-success"><i class="fa-regular fa-pen-to-square"></i></button></td>
          </tr>
        </tbody>
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
             <td><button type="button" class="btn btn-danger"><i class="fa-regular fa-trash-can"></i></button></td>
             <td><button type="button" class="btn btn-warning "><i class="fa-solid fa-user-pen"></i></button></td>
            </tr>
          </tbody>
        </table>
    
      </div>
    </div>
    </div>
    </template>
    <script>
    import {useStore} from 'vuex';
    import {computed} from '@vue/runtime-core';
    export default {
      setup() {
        const st = useStore();
        st.dispatch('getProducts');
        st.dispatch('getUsers');
        let products = computed(() => st.state.products);
        let users = computed(() => st.state.users);
        return {
         products,
          users
        }
      }
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