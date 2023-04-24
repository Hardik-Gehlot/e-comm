const express = require("express")
const mongoose = require("mongoose")
const db = require('./configuration/config');
const bodyParser = require("body-parser");
const cors = require('cors');
const {registerSeller,loginSeller} = require("./api/seller");
const {register,login} = require("./api");
const {addProduct} = require("./api/seller/products")

const app =express();
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use(cors());
app.post("/register",register);
app.post("/login",login)

//seller
app.post("/seller/register",registerSeller);
app.post("/seller/login",loginSeller);
app.post("/seller/add_product",addProduct);
app.listen(3000, () => console.log('Server started on port 3000'));
