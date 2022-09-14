const { json } = require('body-parser');
const { application, query } = require('express');
var express=require('express')
var app=express();
app.use(express.static('public'))
app.get('/index1.html',function(req,res){
    res.sendFile(__dirname+'/'+'index1.html')
})
app.get('/process_get',function(req,res){
    res={
        first_name:query.first_name,
        last_name:query.last_name
    };
    console.log(res)
    console.log(JSON.stringify(res));

})
var server=app.listen(8080,function(){
    var host=server.address().server
    var port=server.address().port

})