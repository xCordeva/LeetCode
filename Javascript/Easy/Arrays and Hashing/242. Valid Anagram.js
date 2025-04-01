/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const counterS = {};
  const counterT = {};
  for (let i = 0; i < s.length; i++) {
    counterS[s[i]] = (counterS[s[i]] || 0) + 1;
    counterT[t[i]] = (counterT[t[i]] || 0) + 1;
  }
  for (let key in counterS) {
    if (counterS[key] !== counterT[key]) return false;
  }
  return true;
};
