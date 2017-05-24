function chunkArrayInGroups(arr, size) {
  var result = [];
  
  /* this for loop increments by the size */
  for (var i = 0; i < arr.length;i += size) {
    
    /* slice the array to sub arrays that are
       as big as the size variable, and push it
       to the result array */
    result.push(arr.slice(i,i + size));
  } return result;
}
