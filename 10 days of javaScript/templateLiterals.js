/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
    const area = expressions[0];
    const perimeter = expressions[1];
    
    const s1 = (perimeter + Math.sqrt(perimeter * perimeter  - (16 * area))) / 4;

    const s2 = (perimeter - Math.sqrt(perimeter * perimeter  - (16 * area))) / 4;

    let array = [s1, s2];
    array =  array.sort(function (a,b) {return a-b;});
    return array;  
}