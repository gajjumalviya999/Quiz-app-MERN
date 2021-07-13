const express = require('express')
const cors=require('cors');
const app = express()
const port = 5000;
const Java=require('./Questions/Java');
const NodeJS=require('./Questions/NodeJS');
const JavaScript= require('./Questions/JavaScript');
const ReactJS= require('./Questions/ReactJS');
const HTML= require('./Questions/HTML');


const CSS= require('./Questions/CSS');
app.use(cors());
app.get('/Questions/JavaScript',(req,res)=>{
    res.json(JavaScript);
    });
app.get('/Questions/Java',(req,res)=>{
   res.json(Java);
}) ;  
app.get('/Questions/NodeJS',(req,res)=>{
  res.json(NodeJS);
}) ;
app.get('/Questions/ReactJS',(req,res)=>{
  res.json(ReactJS);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});