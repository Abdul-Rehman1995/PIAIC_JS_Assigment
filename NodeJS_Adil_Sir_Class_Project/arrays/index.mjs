

const Array1 = [];
console.log(Array1);
Array1.push('Monday');
console.log(Array1);
Array1.push('Tuesday');
console.log(Array1);
Array1.push('Thursday');
console.log(Array1);


// note we forget to push wednesday after tuesday so we use slice method

Array1.splice(2,0,'Wednesday');
console.log(Array1);

// Note We want to joint to array s
const Array2 = ["Friday", "Saturday"];
console.log(Array1.concat(Array2));

Array2.push("Sunday");
console.log(Array1.concat(Array2));

// .pop method is used for last array value deleted
// .shift method is used for first array value deleted
// .splice method is used for delet data
// .finf is used for search the value in array
// .sort is used for sorting but not provide value on sequence function(a, b){return a - b} -->  
// note : this compare function If the result is negative a is sorted before b + If the result is positive b is sorted before a + If the result is 0 no changes are done with the sort order of the two values. 


let numArray = [1, 2, 11, 60, 3, 42, 4, 90, 5, 6];
numArray.sort(function(a, b){return a - b});
console.log(numArray);