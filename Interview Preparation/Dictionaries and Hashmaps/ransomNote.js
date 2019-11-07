// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let mag = {};
    let letter = '';

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
            letter = 'No';
        } else {
            //In the mag
            if (mag[note[i]] < 1) {
                letter = 'No'
            }
            //Subtract one from the number of words in dict
            mag[note[i]] = mag[note[i]] - 1;
        }
    }
    
    if(letter === ''){ 
        letter = 'Yes' 
    }
    console.log(letter);
}