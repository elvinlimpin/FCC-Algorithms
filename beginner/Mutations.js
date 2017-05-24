function mutation(arr) {
  
  // mutate all to same case
  var a = arr[0].toLowerCase();
  var b = arr[1].toLowerCase();
  
  for (var i = 0; i < b.length; i++) {
    
    // if a character in b doesn't exist in 'a'
    if (a.indexOf(b.charAt(i)) === -1)
      return false;
  } return true;
}
