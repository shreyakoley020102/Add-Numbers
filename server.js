const express = require("express");

const app=express();

app.get("/", function(req, res){
  res.send("Hello, world!");
});

app.get("/contact", function(req,res){
  res.send("Don't contact me");
});

app.get("/about", function(req,res){
  res.send("Hey!!! I am Shreya");
});

app.get("/hobbies", function(req,res){
  res.send("Drinking coffee and sketching");
});


app.listen(3000, function(){
  console.log("Server started on port 3000");
});
