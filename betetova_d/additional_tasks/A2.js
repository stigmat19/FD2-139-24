function splitNJoin(word) {
  let result;
  let first = 0;
  let second = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== " ") {
      first = i;
      break;
    }
  }
  for (let i = word.length - 1; i > 0; i--) {
    if (word[i] !== " ") {
      second = i + 1;
      break;
    }
  }
  return (result = word.slice(first, second));
}
console.log(splitNJoin("       Наша строка      "));
