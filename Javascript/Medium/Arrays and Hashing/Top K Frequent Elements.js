/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let count = {};
  let freq = Array.from({ length: nums.length + 1 }, () => []);

  for (let n of nums) {
    count[n] = (count[n] || 0) + 1;
  }

  for (let n in count) {
    freq[count[n]].push(parseInt(n));
  }

  let result = [];
  for (let i = freq.length - 1; i > 0; i--) {
    for (let n of freq[i]) {
      result.push(n);
      if (result.length === k) return result;
    }
  }
};
