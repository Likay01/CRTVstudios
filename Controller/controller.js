const express = require('express');

const path = require('path');

const bodyParser = require('body-parser');

const route = express.Router();

const {Users, Products, Cart} = require('../model/model');
const { verify } = require('crypto');
const { verifyAToken } = require('../middleware/AuthenticatedUsers');

const user = new Users();

const product = new Products();

const myCart = new Cart();

route.get('^/$|/CRTVstudios', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname, '../view/index.html'));
})

// Login
route.post('/login', bodyParser.json(), (req, res)=>{
    user.login(req, res);
});
// get all users
route.get('/users',(req, res)=>{
    user.getUsers(req, res);
});
// Update
route.put('/user/:id', bodyParser
.json(), (req, res)=>{
user.updateUser(req, res);
});
// Sign up
route.post('/signup', bodyParser.json(), (req, res)=>{
    user.createUser(req, res);
});
// delete
route.delete('/user/:id', (req, res)=>{
    user.deleteUser(req, res);
});

// Products

// get all Products
route.get('/products', (req, res)=>{
    product.getProducts(req, res);
});
// get a Product
route.get('/product/:id', bodyParser.json(), (req, res)=>{
    product.getProduct(req, res);
});
// Add a Product
route.post('/product', bodyParser.json(),(req, res)=>{
    product.addProduct(req, res);
});
// Update a Product
route.put('/product/:id', bodyParser.json(), (req, res)=>{
    product.updateProduct(req, res);
});
// Delete a Product
route.delete('/product/:id',(req, res)=>{
    product.deleteProduct(req, res);
});

// Cart
route.post('/Cart', bodyParser.json(), (req, res)=> {
    myCart.addCart(req, res);
});

route.get('/Cart/:id', (req, res)=> {
    myCart.getCart(req, res)
});

module.exports = route;