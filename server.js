const express = require("express") ;
const app = express() ;
require("dotenv").config() ;
const mysql = require("mysql2")
const Port = process.env.PORT ; 

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

db.connect((err)=>{
    if (err){
        console.error(`Error occurred during connection ${err.message}`)
        return ;
    }
    console.log("Connected to DataBase") ;
})

app.get("/" , async(req , res)=>{
    res.send("Hy ! Trying Mysql with Express !")
})
app.listen(Port , ()=>{
    console.log(`Server is running at ${Port}`)
})