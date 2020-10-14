var express = require("express");
var globalConfig = require("./config")
var loader = require("./loader")

var app = new express();

app.use(express.static("./page/"));
app.post("/editEveryday", loader.get("/editEveryday"))
app.get("/queryEveryday", loader.get("/queryEveryday"))

app.post("/editBlog", loader.get("/editBlog"))

app.listen(globalConfig.port, function(){
    console.log("server is start...")
})