// Given an array of strings, group all anagrams together.

// Anagrams are words made from the same letters.
const anagramString = (strs: string[]) => {
  const map = new Map();
  for (let str of strs) {
    const key = str.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  }
  return Array.from(map.values());
};
console.log(anagramString(["eat", "tea", "tan", "ate", "nat", "bat"]));