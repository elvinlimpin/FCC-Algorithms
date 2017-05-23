/* Arrays are more easily mutable (changed) than strings
in JavaScript, and so I initialized a new array to contain
the characters from the string. I then append these characters
back to a new string in reverse order */
function reverseString(str) {
  var array = str.split("");
  var newStr = "";
  array = array.reverse();
  for (var i = 0; i < array.length; i++) {
   newStr += array[i];
  }
  return newStr;
}
