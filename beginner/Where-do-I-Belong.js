function getIndexToIns(arr, num) {
  
  // sorts the array from lowest to highest
  arr = arr.sort(function(a, b){return a-b;});
  for (var i = 0; i < arr.length;i++){
    
    /* if the current number is greater
       than the the num input, return its
       index value */
    if (arr[i] >= num) return i;
  } return arr.length;
}
