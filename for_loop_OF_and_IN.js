//program showing the difference of of adn in keywords in loop
string='gautam'
for (x of string){
    if (x=='g'){
    console.log(x)
    console.log('this is a condition for OF loop')
}
else{
    console.log(x)
}
}
for (x in string){
    if(x==1){
    console.log(x)
    console.log('this is conditon for IN loop')
}
else{
    console.log(x)
}
}
