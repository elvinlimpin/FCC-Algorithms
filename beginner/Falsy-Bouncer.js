function bouncer1(arr) {
  var result = [];
  
  //iterate over all values in the array
  for (var i = 0; i < arr.length; i++) {
    
    /* Switch statements checks "strictly"
       so x must be converted to a string
       for comparison */
    var arrString = String(arr[i]);
	switch(arrString){
      //do nothing if one of the below cases
      case "false": case "null": case "NaN":
	  case "0": case "undefined": case "": break;
      default: result.push(arr[i]);
	}
  } return result;
}
