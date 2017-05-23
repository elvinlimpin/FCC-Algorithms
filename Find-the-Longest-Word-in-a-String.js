
function findLongestWord(str) {
  
  // The string will be split to its spaces
  var strArray = str.split(" ");
  
  // setting the longest string to the first string
  var longestStr = strArray[0];
  for (var i = 0; i < strArray.length;i++) {
    var testStr = strArray[i];
    if (testStr.length > longestStr.length) {
      
      /* If the current string being tested is
         longer, set it as the longest string */
      longestStr = strArray[i];
    }
 }
  return longestStr.length;
}
