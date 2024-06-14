import express from "express";

const app=express();
const port=3000;

const today= new Date();
let day=today.getDay();

let dtype= "a weekday";
let adv="its is time to work hard.";

if(day===0 || day===6){
    dtype="it is a weekend"
    adv="have fun"
}

app.get("/",(req,res)=>{
    res.render("index.ejs",{daytype:dtype,advice:adv})
})


app.listen(port, ()=>{
    console.log(`Server is running on ${port}.`);
})