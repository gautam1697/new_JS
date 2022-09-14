//program showing the concept of streams in node

//Reading from stream



// var fs=require('fs');
// var data='';
// var readerStream=fs.createReadStream('input.txt')
// readerStream.setEncoding('utf-8')
// readerStream.on('data',function(chunk){
//     data+=chunk
// });
// readerStream.on('end',function(){

// console.log(data)
// });
// readerStream.on('error',function(){
//     console.log(err.stack)
// });
// console.log("End")

//_____________________________________________________________
//Writing from stream


// var fs = require("fs");  
// var data = 'Output file';  
// var writerStream = fs.createWriteStream('output.txt');  
// writerStream.write(data,'UTF8');  

// writerStream.end();  
// writerStream.on('finish', function() {  
//     console.log("Write completed.");  
// });  
// writerStream.on('error', function(err){  
//    console.log(err.stack);  
// });  
// console.log("Program Ended");  

//______________________________________________________________________________________
//Piping of stream
// the code shown below shows an example of piping of stream where the output of one stream is
//used as input to another stream.
//There is no limit of piping operation.



// var fs=require('fs')
// var a=fs.createReadStream('input.txt')
// var b=fs.createWriteStream('output.txt')
// a.pipe(b);
// console.log('Program ended')

//________________________________________________________________________________________________
//Chaining streams
//it is a mechanism of creating multiple stream operations by conecitng output of stream with another stream.
//generally used with piping operation


// var fs=require('fs')
// var zlib=require('zlib')
// fs.createReadStream('input.txt').pipe(zlib.createGzip().pipe(fs.createWriteStream('input.txt.gz')));
// console.log('File compressed')


var fs = require("fs");  
var zlib = require('zlib'); 
// Decompress the file input.txt.gz to input.txt  
fs.createReadStream('input.txt.gz')  
  .pipe(zlib.createGzip())  
  .pipe(fs.createWriteStream('input.txt','utf-8'));  
  console.log("File Decompressed.");  


//________________________________________________________________________________
