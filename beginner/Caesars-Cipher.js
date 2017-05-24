function rot13(str){
  
  // Assign the translation algorithm to a variable
  var translate = function(val){
    
    //if not a letter, don't change
    if (!val.match(/[A-Za-z]/)) return val;
    
    //if a letter, do this translation algorithm
    c = Math.floor(val.charCodeAt(0) / 97);
    k = (val.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
    return String.fromCharCode(k + ((c === 0) ? 64 : 96));
  };
  
  //Split to an array, translate, and join
  str = str.split("");
  return str.map(translate).join('');
 }
