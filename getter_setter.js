const student={name:'gautam',age:25,color:'green',get getname(){return this.name},set newname(changename){
    this.name=changename
    
}};
console.log(student.name)
console.log(student.getname);
// console.log(student.getname())//this will result in an error
student.newname='satan'
console.log(student)
console.log(student.name)
