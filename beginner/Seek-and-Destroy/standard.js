function destroyer(arr,x,y,z) {
  
  /* The filter takes away all the values that are
    !x !y and !z from arr
    Filter takes functions as an argument */
  return arr = arr.filter(function(val){
    return val !== x && val !== y && val !== z; 
  });
}
