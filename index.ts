// Обозначение массивов в typescript

const fruits: string[] = ["banana", "apple", "pear"];

function toUpperArray(items: string[]): string[] {
  return items.map((item) => item.toUpperCase());
}

// Фильтр анаграмм

function strToObj(str: string): Record<string, number> {
  const initStr: Record<string, number> = {};
  for (let i = 0; i < str.length; i++) {
    const currLetter: string = str[i];
    if (!initStr[currLetter]) {
      initStr[currLetter] = 1;
    } else {
      initStr[currLetter] += 1;
    }
  }
  return initStr;
}

function filterAnagrams(word: string, words: string[]): string[] {
  const res: string[] = [];
  const inObj = strToObj(word);
  words.forEach((item) => {
    const initObj = {...inObj}
    if (word.length !== item.length) return;

    for (let i = 0; i < item.length; i++) {
      const letter = item[i];
      // if (!initObj[letter] || --initObj[letter] === -1) return;
      // if (!(--initObj[letter] >= 0)) return;
      if (!(initObj[letter]-- > 0)) return;
    }
    res.push(item);
  });
  return res;
}

console.log(filterAnagrams("abba", ["bbaa", "aabb", "adda", "aaab"]));
