//  Write a function that takes a string and returns the reversed version of it
const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("Horidas"));
