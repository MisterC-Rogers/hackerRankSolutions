// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    //make string arrays
    let a_string = a.split("")
    let b_string = b.split("")
    
    //make total count of letters of both array
    let count = (a_string.length + b_string.length)
    //make a removed count variable 
    let removed = 0 
    //for loop through the arrays and compair the letters
    for(let i = a_string.length; i-- > 0;){
        for(let j = b_string.length; j-- > 0;){
            if(a_string[i] == b_string[j]){
                //remove the current matching from b_string letter
                b_string.splice(j,1)
                //incro the removed count
                removed ++
                //break if statement if nothing matchs
                break
            }
        }
    }
// multiple removed by 2 to count for both sides
    return (count - (removed * 2))
}
