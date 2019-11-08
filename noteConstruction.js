function checkMagazine(magazine, note) {
    let mag = {};

    //Populate mag with words from the magazine array
    for(let i = 0; i < magazine.length; i++){
        let word = magazine[i]

        if(mag[word]){
            mag[word] = mag[word] + 1
        } else {
            mag[word] = 1
        }
    }

    //Loop through the note and compare with magazine object
    for (let i = 0; i < note.length; i++){
        //mag has the word needed for the note
        if(!(note[i] in mag)){
            console.log(false)
            return(false)
        } else {
            //In the mag
            if (mag[note[i]] < 1) {
                console.log(false)
                return(false)
            }
            //Subtract one from the number of words in dict
            mag[note[i]] = mag[note[i]] - 1;
        }
    }
console.log(true)
return(true)
}

checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today'])
checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four'])