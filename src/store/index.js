import { createStore } from 'vuex'
import axios from 'axios';
const url = "https://crtvstudios.onrender.com/";

export default createStore({
  state: {
    users : null,
    user :null,
    products : null,
    product : null,
    message : null,
    login : null
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
    },
    setProduct(state, value) {
      state.product = value
    },
    login(state, values) {
      state.users = values
    },
    signup(state, values) {
      state.users = values
    },
    setMessage(state, value) {
      state.message = value
    },
    deleteUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async login(context, info) {
      const res = await axios.post(`${url}login`, info);
      const {result, err} = await res.data;
      if(result) {
        context.commit('login', result);
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
    async getProducts(context) {
      const res = await axios.get(`${url}products`);
      const {results, err} = await res.data;
      console.log(results);
      if(results) {
        context.commit('setProducts', results);
        console.log(results);
      }else {
        context.commit('setMessage', err)
      }
    },
    async getProduct(context, id) {
      const res = await axios.get(`${url}product/${id}`);
      const {results, err} = await res.data;
      if(results) {
        context.commit('setProduct',await res.data)
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
    async updateUser(context, info) {
      const res = await axios.post(`${url}updateUser`, info);
      const{msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      }else {
         context.commit('setMessage', err)
      }
    },
    async deleteUser(id) {
      try{
        await axios.delete(`${url}/users/${id}`);
        this.getUsers();
      }catch (err) {
        console.log(err);
      }
     }

  },
  modules: {
  }
})
