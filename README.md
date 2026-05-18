# Basic TypeScript Interview Problems

## 1. Reverse a String

Write a function that takes a string and returns the reversed version of it.

Solving:

```ts id="ufq0ph"
const reverseString = (str: string) => {
  return str.split("").reverse().join("");
};
console.log(reverseString("Horidas"));

Input: "Horidas";
Output: "sadiroH";
```

---

## 2. Check Palindrome

Write a function to check whether a string is a palindrome or not.

A palindrome reads the same forward and backward.

Example:

```ts id="c0zv8y"
const palindromeString = (str: string) => {
  const palindrome = str.split("").reverse().join("");
  return palindrome;
};
console.log(palindromeString("level"));

Input: "level";
Output: "level";
```

---

## 3. Find Maximum Number

Given an array of numbers, return the largest number.

Example:

```ts id="w7q8ft"
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

Input: [1, 5, 9, 2];
Output: 9;
```

---

## 4. Count Vowels

Count how many vowels exist in a string.

Example:

```ts id="kq3cvn"
Input: "typescript";
Output: 2;
```

---

## 5. Remove Duplicates from Array

Remove duplicate values from an array and return a new array.

Example:

```ts id="n5hf7y"
Input: [1, 2, 2, 3, 4, 4];
Output: [1, 2, 3, 4];
```

---

# Intermediate Problems

## 6. Two Sum

Given an array of integers and a target number, return the indices of two numbers whose sum equals the target.

Constraints:

- Each input has exactly one solution.
- You cannot use the same element twice.

Example:

```ts id="n41vjlwm"
Input: nums = [2, 7, 11, 15];
target = 9;

Output: [0, 1];
```

---

## 7. Group Anagrams

Given an array of strings, group all anagrams together.

Anagrams are words made from the same letters.

Example:

```ts id="x19fj1"
Input: ["eat", "tea", "tan", "ate", "nat", "bat"];

Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
```

---

## 8. Valid Parentheses

Determine whether the input string containing brackets is valid.

Rules:

- Every opening bracket must have a closing bracket.
- Order must be correct.

Example:

```ts id="upyr0u"
Input: "()[]{}";
Output: true;
```

Example:

```ts id="vj2czh"
Input: "(]";
Output: false;
```

---

## 9. First Non-Repeating Character

Find the first character in a string that appears only once.

Example:

```ts id="8m6l1m"
Input: "swiss";
Output: "w";
```

---

## 10. Product of Array Except Self

Return an array where each element equals the product of all elements except itself.

Do not use division.

Example:

```ts id="c29w8u"
Input: [1, 2, 3, 4];
Output: [24, 12, 8, 6];
```

---

# Advanced Problems

## 11. Longest Substring Without Repeating Characters

Find the length of the longest substring without repeating characters.

Example:

```ts id="lrzm8k"
Input: "abcabcbb";
Output: 3;
```

Explanation:

```ts id="u4f3dg"
"abc" is the longest substring.
```

---

## 12. LRU Cache

Design and implement a data structure for Least Recently Used (LRU) cache.

Functions:

- `get(key)`
- `put(key, value)`

Requirements:

- Both operations must work in O(1) time complexity.

Example:

```ts id="w31x9m"
LRUCache cache = new LRUCache(2)

cache.put(1, 1)
cache.put(2, 2)

cache.get(1) // returns 1

cache.put(3, 3)

cache.get(2) // returns -1
```

---

## 13. Merge Intervals

Given an array of intervals, merge all overlapping intervals.

Example:

```ts id="cmys0u"
Input: [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

Output: [
  [1, 6],
  [8, 10],
  [15, 18],
];
```

---

## 14. Trapping Rain Water

Given heights of bars, calculate how much rain water can be trapped.

Example:

```ts id="r7e4sj"
Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

Output: 6;
```

---

## 15. Top K Frequent Elements

Return the `k` most frequent elements from an array.

Example:

```ts id="lb8i2n"
Input: nums = [1, 1, 1, 2, 2, 3];
k = 2;

Output: [1, 2];
```

---

# Hash Table / Lookup Table Problems

## 16. Character Frequency Counter

Count how many times each character appears in a string.

Example:

```ts id="7a0bdp"
Input: "banana"

Output:
{
  b: 1,
  a: 3,
  n: 2
}
```

---

## 17. Contains Duplicate

Check whether an array contains duplicate values.

Example:

```ts id="6yr4w5"
Input: [1, 2, 3, 1];
Output: true;
```

---

## 18. Longest Consecutive Sequence

Find the length of the longest consecutive sequence in an array.

Example:

```ts id="7pmdby"
Input: [100, 4, 200, 1, 3, 2];

Output: 4;
```

Explanation:

```ts id="gmgczj"
The sequence is [1, 2, 3, 4]
```

---

## 19. Subarray Sum Equals K

Find total number of continuous subarrays whose sum equals `k`.

Example:

```ts id="ytr3cz"
Input: nums = [1, 1, 1];
k = 2;

Output: 2;
```

---

## 20. Minimum Window Substring

Find the minimum substring in `s` that contains all characters of `t`.

Example:

```ts id="2rmtpu"
Input: s = "ADOBECODEBANC";
t = "ABC";

Output: "BANC";
```
