import { createStore } from 'vuex'
import axios from 'axios';
const url = "https://crtvstudios.onrender.com/";

export default createStore({
  state: {
    users : null,
    user :null,
    products:null,
    product:null,
    message:null,
    login:null,
    searchbar:null
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state, value) {
      state.user = value
    },
    setProducts(state, values) {
      state.products = values
      state.searchbar = values
    },
    setProduct(state, value) {
      state.product = value
    },
    setLogin(state, values) {
      state.users = values
    },
    signup(state, values) {
      state.users = values
    },
    setMessage(state, value) {
      state.message = value
    },
    setSearch(state,search) {
      if(search) {
              state.searchbar = state.products.search(product => product.name.to().and(search.to()))
      }else{
        state.searchbar = state.products
      }
    }
  },
  actions: {
    async login(context, info) {
      const res = await axios.post(`${url}login`, info);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setLogin', result);
        console.log(result)
      }else {
        context.commit('setUsers', err);
      }
    },
    async signup(context, info) {
      const res = await axios.post(`${url}signup`, info);
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setUsers', msg);
      }else {
        console.log(err)
        context.commit('setMessage', err)
      }
    },
      async addProduct(context, info) {
        const res = await axios.post(`${url}product`, info);
        const {msg, err} = await res.data;
        if(msg) {
          context.commit('setProduct', msg);
        }else {
          console.log(err)
          context.commit('setMessage', err)
        }
    },
    async getProducts(context) {
      const res = await axios.get(`${url}products`);
      const {results, err} = await res.data;
      console.log(results);
      if(results) {
        context.commit('setProducts', results);
        console.log(results);
      }else {
        context.commit('setMessage', err)
        console.log(err)
      }
    },
    async getProduct(context, id) {
      const res = await axios.get(`${url}product/${id}`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setProduct',results[0])
      }else {
        context.commit('setMessage', err)
      }
    },
    async getUser(context, id) {
      const res = await axios.get(`${url}user/${id}`)
      const {results, err} = await res.data;
      if(results) {
        context.commit('setUser', results[0])
      }else {
        context.commit('setMessage', err)
      }
    },
    async getUsers(context, info) {
      const res = await axios.get(`${url}users`, info);
      const {result, err} = await res.data;
      if(result) {
        context.commit('setUsers', result);
      }else {
        context.commit('setMessage', err)
      }
    },
    async updateUser(context, {UserId, user}) {
      console.log(UserId, user);
      const res = await axios.put(`${url}user/${UserId}`, user);
      console.log(res)
      const{msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else { 
         context.commit('setMessage', err)
         console.log(err)
      }
    },
    async updateProduct(context, {ProdId, product}) {
      console.log(ProdId, product);
      const res = await axios.put(`${url}product/${ProdId}`, product);
      console.log(res)
      const{msg, err} = await res.data;
      if(msg) {
        context.commit('setProduct', msg);
      }else { 
         context.commit('setMessage', err)
         console.log(err)
      }
    },
    async deleteProduct(context, id, dispatch) {
      const res = await axios.delete(`${url}product/${id}`);
      const{msg, err} = await res.data;
      if(msg) {
        context.commit('setProduct',msg[0]);
        console.log(msg);
        dispatch('getProducts');
      }else{
        context.commit('setMessage', err)
      }
     },
     async deleteUser(context, id, dispatch) {
      const res = await axios.delete(`${url}user/${id}`);
      const{msg, err} = await res.data;
      if(msg) {
        context.commit('setUser',msg[0]);
        console.log(msg);
        dispatch('getUsers');
      }else{
        context.commit('setMessage', err)
      }
     },

  },
  modules: {
  }
})
