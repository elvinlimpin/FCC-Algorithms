function palindrome(str) {

  /* Remove the punctuation and case
     from the string argument first */
  str = str.toLowerCase();
  str = str.replace(/[^0-9a-z]/gi, '');
  
 // Change the string to an array to make it mutable
  var array = str.split("");
  

  var start, end;
  /* You only need to check if half of the characters 
     mirror the other half eg. array.length /2 */
  for (var i = 0; i < array.length / 2; i++) {
    
    
  
  /* take the character from the beggining
   and the end, and compare them */
    start = array[i];
    end = array[array.length - i - 1];
    if (start !== end) return false;
  }
  
  //If all match, return true
  return true;
}
