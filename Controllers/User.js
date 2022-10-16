const uuid = require("uuid");

let users = [];

const getUsers = (req,res) => {
    res.send(users);
}

const createUser = (req,res) => {
    const user = req.body;
    // console.log(req.body)
    users.push({...user,id:uuid.v1()});
    res.send("user added successfully")
}

const findUser = (req,res) => {
    const singleUser = users.filter(ele => ele.id === req.params.id);
    res.send(singleUser);
}

const deleteUser = (req,res) => {
    users = users.filter(ele => ele.id !== req.params.id);
    res.send("user deleted successfully!!");
}

const updateUser = (req,res) => {
    const user = users.find(ele => ele.id === req.params.id);
    
    user.name = req.body.name;
    user.age = req.body.age;
    user.contact = req.body.contact;

    res.send("User update successfully!!");
}

module.exports = {getUsers,createUser,findUser,deleteUser,updateUser}