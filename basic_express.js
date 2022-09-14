//Program showing the concept of Express JS
var express=require('express')
var app=express();
app.get('/',function(request,response){
  response.send("this is a dummy text");
})
var server=app.listen(8080,function(){
  var host=server.address().address
  var port=server.address().port
})
//_________________________________________________________________________________

// var express = require('express');  
// var app = express();  
// app.get('/', function (req, res) {  
//    res.send('Welcome to JavaTpoint');  
// })  
// var server = app.listen(8000, function () {  
// var host = server.address().address  
//   var port = server.address().port  
//  console.log("Example app listening at http://%s:%s", host, port)  
// })  