/*jshint esversion: 6 */
function destroyer(arr,x,y,z) {
  
  /* The filter takes away all the values that are
    !x !y and !z from arr
    Filter takes functions as an argument */
  return arr.filter(val => val !== x && val !== y && val !== z);
}
