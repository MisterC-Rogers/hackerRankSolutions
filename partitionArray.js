function partitionArray(k, numbers){
    if( numbers.length % k === 0){
        console.log("YES");
        return("Yes") 
    } else {
        console.log("NO");
        return("No")
    }
}

partitionArray(2, [2,5,6,7])
partitionArray(3, [2,5,6,7])
partitionArray(4, [2,5,6,7,3,5,7,8])
partitionArray(5, [2,5,6,7])
