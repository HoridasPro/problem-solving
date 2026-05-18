// Write a function to check whether a string is a palindrome or not?
const palindromeString = (str: string) => {
  const palindrome = str.split("").reverse().join("");
  return palindrome;
};
console.log(palindromeString("level"));
