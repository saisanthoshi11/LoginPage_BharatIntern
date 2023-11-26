const express=require("express");
const app=express();
const path= require("path");
const mongoose=require("mongoose");

const {router}=require("./routes/login");


app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,`public`)));

mongoose.connect("mongodb+srv://saisanthoshibonagiri:santhoshi@cluster0.9con09y.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("mongoose is connected successfully")})
.catch(()=>{console.log("mongoose connection failed ")});

port=4000;
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.use("/",router);

app.listen(port,()=>{console.log(`server is listening on ${port}`)});