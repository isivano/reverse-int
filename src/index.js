module.exports = function reverse (n) {
  let str = "" + n;
  let arr = str.split("");
  arr.reverse();
  if (n < 0) arr.pop();
  return +(arr.join(""));
}
