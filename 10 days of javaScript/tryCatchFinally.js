/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
    console.log(s.split("").reverse().join("")) 
  }
  catch(err){
    console.log(err.message)
    console.log(s);
  }
}
