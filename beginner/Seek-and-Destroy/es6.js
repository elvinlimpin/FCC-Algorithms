/*jshint esversion: 6 */
function destroyer(arr,x,y,z) {
  
  /* The filter takes away all the values that are
    !x !y and !z from arr
    Filter takes functions as an argument 
    Arrow functions shorten this code */
  arr = arr.filter(val => val !== x)
           .filter(val => val !== y)
           .filter(val => val !== z);
  return arr;
}
