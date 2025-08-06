/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  if (position.length === 1 || position.length === 0) return position.length;
  const cars = position.map((pos, i) => [pos, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);

  const stack = [];

  for (let [pos, spd] of cars) {
    const time = (target - pos) / spd;
    if (!stack.length || time > stack[stack.length - 1]) {
      stack.push(time);
    }
  }
  return stack.length;
};
