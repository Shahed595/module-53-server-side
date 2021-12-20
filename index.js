const express=require('express');
const app=express();
const port=5000;

app.get('/',(req,res)=>{
    res.send("Hello World i'm comming to kill everyone");
})


const users=[
    {id:0,name:"Shabana",email:"shabana@gamil.com",phone:"01893428883"},
    {id:1,name:"rabeya",email:"rabeya@gamil.com",phone:"01893428883"},
    {id:2,name:"shucorita",email:"shucorita@gamil.com",phone:"01893428883"},
    {id:3,name:"susmita",email:"susmita@gamil.com",phone:"01893428883"},
    {id:4,name:"sagorika",email:"sagorika@gamil.com",phone:"01893428883"},
    {id:5,name:"kobori",email:"kobori@gamil.com",phone:"01893428883"},
]

app.get('/users',(req,res)=>{
    res.send(users);
})
//dynamic,api,params
app.get('/users/:id',(req,res)=>{
    const id=req.params.id;
    const user=users[id];
    res.send(user);
    // console.log(req.params.id);
})

app.listen(port,()=>{
    console.log("listening port",port);
})