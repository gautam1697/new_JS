str='SHivam VIHSWAkarma SHivam VIHSWAkarma SHivam VIHSWAkarmaSHivam VIHSWAkarmaSHivam VIHSWAkarmaSHivam VIHSWAkarmaSHivam VIHSWAkarmaSHivam VIHSWAkarmaSHivam VIHSWAkarmaSHivam VIHSWAkarmaSHivam VIHSWAkarmaSHivam VIHSWAkarma SHivam VIHSWAkarma SHivam VIHSWAkarma SHivam VIHSWAkarma ABHISHEK ABHISKEHK ABHISHEK'
{"sv":34,"ab":2}
b=str.toUpperCase()
console.log(b)
c=/SHIVAM/g
e=/ABHISHEK/g
d=b.match(c)
console.log(d.length)//output-> 15
//______________________________________________________
//find the missing numbers
//arr=[1,2,3,4,6,9,24]
// f1=arr[0]
// arr2=[]
// i=0;
// while(i<arr.length){
//     if(arr[i]==f1){
//         i++;
//         f1++;
//     }
//     else{
//         arr2.push(f1)
//         f1++;
//     }
    
// }
// console.log(arr2)

//____________________________________________________________________________________
//find the missing numbers
arr=[1,2,3,4,6,9,24]

console.log(arr.indexOf(3))
arr1=[]
for (i of arr){
    first=arr.indexOf(i);
    last=arr.indexOf(i)+1;
    // console.log(first,last);
    // console.log(arr[first],arr[last])
    for(j=arr[first];j<arr[last];j++){
        if(j!==arr[first]&&j!==arr[last]){
        arr1.push(j)
        }
    }
}
console.log(arr1)
