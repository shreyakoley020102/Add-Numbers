const express = require("express");
const bodyParser = require("body-parser");

const app=express();

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  res.send("Thanks for postng that");
});

app.listen(3000, function(){
  console.log("port 3000");
});
