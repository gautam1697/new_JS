var fs=require('fs')
var http=require('http');
var url=require('url')
http.createServer(function(request,response){
   var path=url.parse(request.url).path;
   console.log("request for"+path+"recieved.")
   fs.readFile(path.substr(1),function(err,data){
      if(err){
         console.log(err);
         response.writeHead(404,{'Content-type':'text/html'});
      }
      else{
         response.writeHead(200,{'Content-type':'text/html'});
         response.write(data.toString());
      }
      response.end();

   })
}).listen(8078)
console.log('Server running at http://127.0.0.1:8078/');  
