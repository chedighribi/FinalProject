const express = require("express");
const connectDB = require("./Config/connectDB");


const app = expresse();


//middleware
app.use(express.json());


//connect DB
connectDB();

//create a port
const port = process.env.PORT || 5000 ;

//launch the server
app.listen(port,(err)=>{
err ? console.log(err) : console.log("the server is running ...")
});
