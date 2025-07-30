/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  const funcs = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => Math.trunc(a / b),
  };

  for (let i = 0; i < tokens.length; i++) {
    if (
      tokens[i] !== "+" &&
      tokens[i] !== "-" &&
      tokens[i] !== "*" &&
      tokens[i] !== "/"
    ) {
      stack.push(Number(tokens[i]));
    } else {
      const b = Number(stack.pop());
      const a = Number(stack.pop());
      const res = funcs[tokens[i]](a, b);
      stack.push(res);
    }
  }
  return stack[0];
};
