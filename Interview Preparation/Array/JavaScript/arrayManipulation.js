// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    // the object to push in the values
    let r = {}
    // make two vars to check to max with 
    let t = 0
    let m = 0
      
  //O(n) 
  for (let i = queries.length; i--> 0;) {
    // a is the start
    // b is the end
    // k is the value 
    let [a, b, k] = queries[i]

    //check if the index before given a is there 
    if (r[--a]){
      //make r[a] plus its self and k
      r[a] += k
    }
    else {
      //make equal to k
      r[a] = k
    }
    
    //check if b is within the n length
    if (b < n){
      //check b is in r 
      if (r[b]){
        //make r[b] minus its self and k
        r[b] -= k
      }
      else{
        //make it just minus k
        r[b] = -k
      }
    }
  }

  //loop through the values of r => O(n)
  for (let v of Object.values(r)) {
    //make the t equal the looping var
    t += v
    //if the t is larger then m make m equal the t 
    if (t > m){
        m = t
    } 
  }
  console.log(m)
  return m

}
