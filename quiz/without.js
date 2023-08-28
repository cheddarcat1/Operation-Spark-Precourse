/*
Write a function called without() that takes in an array and other values that should be withheld from the new returned array
*/

function without(arr, ...deleteThat) {
  // Your code here
  
}



//Removing item

let value = 3

let arr = [1, 2, 3, 4, 5, 3]

arr = arr.filter(item => item !== value)

console.log(arr)
// [ 1, 2, 4, 5 ]



function without(arr, ...deleteThis) {
  
  //use filter to iterate over the array and then delete the item 
  
  /*
  
  ... before deleteThis because you want it to return an array 
  
  ! will turn a true statement false; a false statement true. use that so if deleteThis is true, it will delete the item. if it is false, it will leave it alone
  
  .includes: if the item is in the array, it will be deleted 
  
  */
  
  return arr.filter(item => !deleteThis.includes(item)); 
  
}
