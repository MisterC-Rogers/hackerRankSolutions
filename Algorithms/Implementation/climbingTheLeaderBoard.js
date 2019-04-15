// Complete the climbingLeaderboard function below.
function climbingLeaderboard(scores, alice) { 
    scores = [...new Set(scores)]
    
    let pos = scores.length
    let i = scores.length -1
    let j = 0 
        while(j < alice.length){
            while(alice[j] >= scores[i]){
                i--
                pos--
            }
            alice[j] = pos + 1
            j++
        }
    return alice
    }