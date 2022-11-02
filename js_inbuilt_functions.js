function ab(c=0,d=0,f,g){
e=c/d
h=f*g
console.log(e)
console.log(isNaN(h))//this function checks wether the given value resolves to a number or not and returns a boolean value
console.log(isFinite(e))//this function checks wether the given value is finite or not and returns a bolean value
}
ab()
//_______________________________________________________
x='2+2'
console.log(x,typeof x)//this line will print value of x '2+2'
console.log(eval(x),typeof eval(x))//this line will evaluate the value of x and will return the output 2
//________________________________________________________
const uri= 'https://www.google.co.in/home'
encoded=encodeURI(uri)
console.log(encoded)//output->https://www.google.co.in/home
try{
d=decodeURI(encoded)
console.log(d)//output->https://www.google.co.in/home
    
}
catch(error){
    console.log(error)
}

