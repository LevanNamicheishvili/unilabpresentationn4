
// Function declaration
function add(a, b) {        
    console.log(a + b);
}
 
// Calling a function
add(2, 3); //output is 5









// Function Expression
const add = function(a, b) {
    console.log(a+b);
}
 
// Calling function
add(2, 3); //output is 5













// Single line of code
let add = (a, b) => a + b;
 
console.log(add(3, 2)); //output is 5


// Multiple line of code
const great = (a, b) => {
    if (a > b)
        return "a is greater";
    else
        return "b is greater";
}
 
console.log(great(3,5)); 