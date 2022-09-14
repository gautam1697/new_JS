//Non-Blocking example of code
var fs=require('fs')
fs.readFile('input.txt',function(err,data){
    if(err)throw(err);
    console.log(data.toString())
});
console.log("END")


//__________________________________________________
//Blocking example of code


// var fs=require('fs')
// var data=fs.readFileSync('input.txt',function(err){
//     if(err)throw(err)});
// console.log(data.toString());
// console.log('End')