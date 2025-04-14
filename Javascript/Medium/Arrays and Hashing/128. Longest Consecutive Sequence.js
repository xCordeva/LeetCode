/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let set = new Set(nums);
  let count = 0;

  for (let num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentCount = 1;

      while (set.has(currentNum + 1)) {
        currentNum += 1;
        currentCount += 1;
      }
      count = Math.max(count, currentCount);
    }
  }
  return count;
};
