function confirmEnding(str, target) {
  
  /* Create a substring from the character index
     of target relative to str up to the whole string
     eg:
         A r m a d i l l o
                   i l l o
         0 1 2 3 4 5 6 7 8
         
         range index is 5,8
  */
  var lastLetter = str.substr(str.length - target.length, str.length);
  
  if (lastLetter === target) return true;
  else return false;
}
