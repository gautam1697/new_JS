// Without String interpolation
function Info(fname,lname){
    return "My name is "+fname+" "+lname+"."
    
}
console.log(Info('Gautam',"Atre"))

//With String interpolation
function Info(fname,lname){
    return `My name is ${fname} ${lname}`;
    
}
console.log(Info('Gautam',"Atre"))