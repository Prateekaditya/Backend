import express from "express";
const app=express();
const port=3000;
app.get("/",(req,res)=>{
    res.send("Hello World!")
})
app.get("/about",(req,res)=>{
    res.send("<h1>yo bro about me</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>you can't contact me i am god hehe </h1>")
})
app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})