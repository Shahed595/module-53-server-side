const express=require('express');
const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send("Hello World i'm comming to kill everyone");
})


app.listen(port,()=>{
    console.log("listening port",port);
})