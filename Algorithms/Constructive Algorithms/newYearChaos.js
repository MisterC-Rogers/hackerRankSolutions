// Complete the minimumBribes function below.
function minimumBribes(q) {
    let count = 0

    for(let i = q.length; i-- >0;){
        if(q[i] - (i+1) > 2){
            count = 'Too chaotic'
            break;
        }
        for(let j = Math.max(q[i]) - 2; j < i; j++){
            if(q[j] > q[i]){
                count+=1
            }
        }
    }
    console.log(count)

}