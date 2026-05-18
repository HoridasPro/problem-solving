// Given an array of numbers, return the largest number.
const largeNumber = (nums: number[]): number => {
  let maxNum = nums[0];
  for (const num of nums) {
    if (num > maxNum) {
      maxNum = num;
    }
  }
  return maxNum;
};
console.log(largeNumber([1, 5, 9, 2]));
