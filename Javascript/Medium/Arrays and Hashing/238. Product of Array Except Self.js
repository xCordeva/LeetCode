/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;
  let result = new Array(n);
  let prefix = 1;
  let suffix = 1;
  for (i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  for (i = n - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }
  return result;
};
