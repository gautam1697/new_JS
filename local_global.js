a=10
function func(){
    console.log(a);
    console.log(this.a)
}
func()
console.log(a)
// console.log(this.a)
//how to access global varibale inside a local scope