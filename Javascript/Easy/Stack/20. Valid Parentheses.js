/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const parentheses = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  let stackArray = [];
  for (let char of s) {
    if (char === "(" || char === "[" || char === "{") {
      stackArray.push(char);
    } else {
      // the stackArray.pop() removes the last item of the array and compares it the char at the same time
      if (parentheses[char] !== stackArray.pop()) {
        return false;
      }
    }
  }
  return stackArray.length === 0;
};
