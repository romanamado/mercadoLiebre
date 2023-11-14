require("dotenv").config();

const express = require("express")
const path = require("path")
const app = express()
const pathStatic = path.resolve(__dirname,"./public")

app.use(express.static("public"))

const port = process.env.PORT || 4050
const mensaje = "servidor corriendo en el puerto "

app.listen(port,()=>  
    console.log( mensaje + port) 
)

app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve("./views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve("./views/login.html"))
})