function destroyer(arr,x,y,z) {
  function theX(value){
    return value !== x;
  }
  
  function theY(value){
    return value !== y;
  }
  
  function theZ(value){
    return value !== z;
  }
  
  /* The filter takes away all the values that are
    !x !y and !z from arr
    Filter takes functions as an argument*/
  arr = arr.filter(theY).filter(theX).filter(theZ);
  return arr;
}
