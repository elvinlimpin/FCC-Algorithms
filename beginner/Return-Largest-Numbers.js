
function largestOfFour(arr) {
  
  /* Initialize array to test,
     the biggest number, and an array
     for the result */
  var testArr, biggestNum;
  var result = [];
  
  /* the length of the arrays are always
     4 for simplicity */
  for (var i = 0; i < 4; i++){
    
    // assign testArr and biggest number
    testArr = arr[i];
    biggestNum = testArr[0];
    for (var j = 1; j < 4; j++){
      
      /* if the current biggest number is
         smaller than the number being tested,
         re assign it */
      if (testArr[j] > biggestNum)
        biggestNum = testArr[j];
    }
    
    //Push the biggest number for each array
    result.push(biggestNum);
  }
  return result;
}
