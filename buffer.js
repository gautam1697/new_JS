//Program showing the concept of buffers in node js
//There are three methos by which we can create buffers
//1. var buff=new Buffer(20)
//this method will create an unititated buffer of 10 octets
//2. Creating buffer from arrays
//var buff=new Buffer([10,20,30,40])
//3.Creating buffer from string
//var buff=new Buffer('this is a string','utf8')
//_________________________________________________________________
//Writing buffers
//syntax: buff.write(string[offset][length][encoding])
//string:specifies the string data to be written to buffer
//offset:specifies the index of buffer start writing from.default->0
//length:specifies the number of bytes to write.default is buffer length
//encoding:encoding to use. default->'utf8'



// buf = new Buffer(256);  
// len = buf.write("Simply Easy Learning");  
// console.log("Octets written : "+  len);  



//__________________________________________________________________________________

//Reading buffers
//syntax: buuf.toString([encoding][start][end])
//start:defines the starting index to start reading. default 0.
//end:defines the end index to end reading. default is comeplete buffer



buf = new Buffer(23);  
for (var i = 0 ; i < 20 ; i++) {  
  buf[i] = i + 97;  
}  
console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrst
console.log( buf.toString('ascii',0,i));   // outputs: abcdefghijklmnopqrst
console.log( buf.toString('utf8',0,12));    // outputs: abcdefghijkl
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde  