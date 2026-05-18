// Remove duplicate values from an array and return a new array.
const duplicateNumber = (nums: number[]): number[] => {
  const result: number[] = [];
  for (const num of nums) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }
  return result;
};
console.log(duplicateNumber([1, 2, 2, 3, 4, 4]));
