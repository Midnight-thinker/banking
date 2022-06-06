const express = require("express");

const app = express();

app.get("/",function(req,res){
    res.send("<h1>Hello, World</h1>");
});

app.post("/transfer",function(req,res){
    res.render("transfer");
});

app.listen(3000,function () {
    console.log("Server just started 3000");
});