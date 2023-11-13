require("dotenv").config();

const express = require("express")
const path = require("path")
const app = express()
const pathStatic = path.resolve(__dirname,"./public")

app.use(express.static(pathStatic))

const port = process.env.PORT || 3300


app.listen(port,()=>
    console.log('servidor corriendo en el puerto ${port}')
)

app.get("/",(req,res)=>{
    res.sendFile(__dirname,"./views/home.html")
})

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve("./views/register.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve("./views/login.html"))
})