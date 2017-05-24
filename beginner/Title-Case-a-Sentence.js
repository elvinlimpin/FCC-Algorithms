
function titleCase(str) {
  
  /* Splits the string, and turns all to
     lowercase (temporarily) */
  str = str.toLowerCase().split(" ");
  
  for (var i = 0; i < str.length; i++) {
    
    //turn the word to a substring array
    var subStr = str[i].split("");
    
    /* capitalize the first letter and assign it
       in place of the original string */
    str[i] =  str[i].charAt(0).toUpperCase();
    
    // concatenate the rest of the word
    for (var j = 1; j < subStr.length; j++ )
      str[i] += subStr[j];
  }
  
  //join the sentence back together
  str = str.join(" ");
  return str;
}
