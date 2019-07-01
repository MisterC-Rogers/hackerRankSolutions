/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    for(let i = grades.length; i-- > 0;){
        if(grades[i] >= 38){
            let newGrade = Math.ceil(grades[i]/5) * 5
            if(newGrade - grades[i] < 3){
                grades[i] = newGrade
            }
        }
    }
    return grades
}