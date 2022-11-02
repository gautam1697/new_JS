let str='this is a sample string '
reg=/string/
console.log(reg.source)//.source is used to get the string inside the regular expression
const re= new RegExp(str)//RegExp is used to create a string into a regular expresion
console.log(re)
let result= reg.exec(str)//this exec will return an array if matched else it will return null
console.log(result)


//_________________________________________________________________
let str="this is a sample string and this also ."
reg=/this/g // the word g after regular expression represent a flag that is global and finds the patterns all over the string
console.log(reg.source)//.source is used to get the string inside the regular expression
const re= new RegExp(str)//RegExp is used to create a string into a regular expresion
console.log(re)
let result= reg.exec(str)//this exec will return an array if matched else it will return null
console.log(result)
result= reg.exec(str)
console.log(result)
result= reg.exec(str)
console.log(result)
//____________________________________________________________________
let str="this is a sample string and this also ."
reg=/this/i // the word i after regular expression represent a flag that represents case insensitivity.
console.log(reg.source)//.source is used to get the string inside the regular expression
const re= new RegExp(str)//RegExp is used to create a string into a regular expresion
console.log(re)
let result= reg.exec(str)//this exec will return an array if matched else it will return null
console.log(result)
result= reg.exec(str)
console.log(result)
result= reg.exec(str)
console.log(result)

//____________________________________________________________________________________
let str="is a sample string and THis ThIS also ."
reg=/this/i// we can use multiple exec with global flag
let result= reg.exec(str)
result= reg.exec(str)
console.log(result.index)
console.log(result.input)

//________________________________________________________________________________________
let str="is a sample string and THis ThIS also ."

reg=/thiss/i
result= reg.test(str)//this test fuction will return wether the given expression is present in the string or not
console.log(result)s




//_____________________________________________________________


let str="this a sample string and this THis ThIS also ."
reg=/this/g
result= str.match(reg)//this function  will return an array if the expression in present otherwise it will return null
console.log(result)
