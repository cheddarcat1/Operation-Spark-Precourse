/*Write a function, recursiveReduce, that reduces an array to a single value by repetitively calling iterator(accumulator, item) for each item.

Accumulator should be the return value of the previous iterator call.

You can pass in a starting value for the accumulator as the third argument to reduce.

If no starting value is passed, the first element is used as the accumulator, and is never passed to the iterator. 

(in the case where a starting value is NOT passed, the iterator is NOT invoked until the 2nd element (aka arra[1], with the 1st element as its 2nd argument.)


Inputs:

array: array of values

iterator: function to be used on each value, takes in the accumulator and item

accumulator (optional): the starting value. If no value provided, seed will be first value in array


outputs: 
A reduced value:

*/




function recursiveReduce(arr, iterator, accumulator) {
  if(arr.length === 0){
    return acc; 
  }
  
  
}


function recursiveReduce(array, iterator, acc) {
  
  //base case 
  //start at 0 
  if(array.length === 0){
    return acc; 
  }
  
  //if acc is undefined or nun 
  if(acc === undefined){
    //memo = 1st item of array 
    acc = array[0];
    array = array.slice(1); 
  }
  //if there is no acc 
	const newItem = array[0];
  const newArray = array.slice(1);
  const newAcc = iterator(acc, newItem);
  
  //recurssion 
  return recursiveReduce(newArray, iterator, newAcc);
}




should exist‣
should be a function‣
should not use native reduce or _.reduce‣
should return a value‣
should not mutate the input array‣
should invoke the iterator function with arguments (memo, item) in that order‣
should pass items of the array into the iterator from left to right‣
should continue to call iterator even if the iterator returns undefined‣
should pass every item of the array into the iterator if a memo is passed in‣
should accept falsy values as a valid memo‣
should set memo to be the first item of the array if no memo is passed in‣
should pass the second item of the array into the iterator first if a memo is not passed in‣
should use recursion in the reduce implementation
