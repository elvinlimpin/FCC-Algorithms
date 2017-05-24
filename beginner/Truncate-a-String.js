function truncateString(str, num) {
  var finalNum;
  var finalStr = "";
  
  /* Implement instruction:
       if the given maximum string length num is
       less than or equal to 3, then the addition
       of the three dots does not add to the
       string length in determining the truncated
       string. */
  if (num > 3 && str.length > num) {
    finalNum = num -3;
  } else finalNum = num;
  
  //Append characters until you reach the length
  for (var i = 0; i < finalNum; i++) {
    finalStr += str.charAt(i);
  }
  
  //If there was a truncation, add an elipsis
  if (str.length > num) finalStr += "...";
  return finalStr;
}
