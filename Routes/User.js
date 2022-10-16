const express = require("express");
const {getUsers, createUser,findUser,deleteUser,updateUser} = require('../Controllers/User.js')

const Route = express.Router();

Route.get('/users',getUsers);
Route.post('/user',createUser);
Route.get('/user/:id',findUser);
Route.delete('/user/:id',deleteUser);
Route.put('/user/:id',updateUser)


module.exports = Route