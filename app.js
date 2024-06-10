const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const app=express(cors())

app.get("/",(req,res)=>{
    res.send("Welcome to my home page")
})

app.get("/search",(req,res)=>{
    res.send("Welcome to search page")
})

app.get("/dlt",(req,res)=>{
    res.send("Welcome to delete page")
})
app.get("/view",(req,res)=>{
    res.send("Welcome to view page")
})

app.listen(8080,()=>{
    console.log("server started")
})