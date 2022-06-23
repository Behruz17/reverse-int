module.exports = function reverse (n) {
  let arr = Math.abs(n).toString().split('');
  let reversedArr = arr.reverse();
  let result = reversedArr.join('');
  return result;
}
