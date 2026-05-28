// Given an array of integers and a target number, return the indices of two numbers whose sum equals the target.

const twoNumberSum = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};
console.log(twoNumberSum([2, 7, 11, 15], 9));
