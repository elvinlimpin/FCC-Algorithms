/* The for-loop multiplies the counter(i value)
to the result until it reaches the number to
factorialize */

function factorialize(num) {
  var result = 1;
  for (var i = 1; i < num + 1;i++) result *= i;
  return result;
}
