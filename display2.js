//Build a simple loop, inside a function, that takes an array and prints the value of the array to the console.
function printArrayValues(arr) {
  for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
  }
}
const myArray = ["pear", "banana", "orange"];
printArrayValues(myArray);
