// Count how many vowels exist in a string.
const vowels = (v: string): number => {
  let count = 0;
  for (let i = 0; i < v.length; i++) {
    const char = v[i].toLocaleLowerCase();
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};
console.log(vowels("typescsript"));
