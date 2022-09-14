arr=[1,2,3,4,8,6,3,7,8,8]
arr1=[]
for(x of arr){
    if(arr1.includes(x)){
        continue;
    }
    else{
        arr1.push(x)
    }
}
console.log(arr1)
console.log(arr1.sort())





// arr=[1,2,3,4,7,7,7,8,8,8]
// for(i=0;i<arr.length;i++){
//     // console.log(i,'i')
//     for(j=i;j<arr.length;j++){
//         // console.log(j,'j')
//         if(arr[i]==arr[j]){
//             // console.log(arr[i])
//             arr.splice(i,1)
//             console.log(arr)
//         }
        
//     }
    
//     }
//     console.log(arr)



    arr=[1,2,3,4,7,7,7,8,8,8]
    for(i=0;i<arr.length;i++){
        // console.log(i,'i')
        for(j=0;j<arr.length;j++){
            // console.log(i,arr[i]==arr[j]&&i!=j)
            
            if(arr[i]==arr[j]&& i!=j){
                // console.log(arr[i])
                arr.splice(i,1)
                console.log(arr)
            }
            
        }
        
        }
        console.log(arr)
    
    //removing duplicate element from an array
    
    
    
    
