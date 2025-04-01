/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let setNums = new Set();
  for (i = 0; i < nums.length; i++) {
    if (setNums.has(nums[i])) {
      return true;
    }
    setNums.add(nums[i]);
  }
  return false;
};
