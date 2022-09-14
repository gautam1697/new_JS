const { json } = require('body-parser');
const { application, query, response } = require('express');
var express=require('express')
var app=express();
app.use(express.static('public'))
app.get('/index1.html',function(req,res){
    res.sendFile(__dirname+'/'+'index1.html')
})
app.get('/process_get',function(req,res){
    response={
        first_name:query.first_name,
        last_name:query.last_name
    };
    console.log(res)
    console.log(JSON.stringify(response));

})
var server=app.listen(8080,function(){
    var host=server.address().server
    var port=server.address().port
    console.log("Example app listening at http://127.0.0.1:8080")  

})