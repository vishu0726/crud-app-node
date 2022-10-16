const express = require("express");
const cors = require('cors');
const userRoute = require('./Routes/User')


const app = express();
app.use(express.json());
app.use(cors());

//router
app.use('/',userRoute);


app.get('/',(req,res) => {
    res.send("<h2>HOME PAGE</h2>")
})
app.all('*',(req,res) => {
    res.send('<h2>Route does not exist</h2>')
})


const PORT = '8000';
app.listen(PORT,(err) => {
    if (err) throw err.message;
    console.log(`server is listening on the port no ${PORT}`)
})