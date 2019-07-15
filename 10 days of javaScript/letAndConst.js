function main() {
    // Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
    const PI = Math.PI;
    const r = parseFloat(readLine());
    
    // Print the area of the circle:
    console.log((r ** 2)* PI);
    
    // Print the perimeter of the circle:
    console.log(2 * r * PI);
}