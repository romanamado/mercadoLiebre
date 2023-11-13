const express = require("express")
const path = require("path")
const app = express()
const pathStatic = path.resolve(__dirname,"./public")

app.use(express.static(pathStatic))


app.listen(3300,()=>
    console.log("servidor corriendo en el puerto 3300")
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