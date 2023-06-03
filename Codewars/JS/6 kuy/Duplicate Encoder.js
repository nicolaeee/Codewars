function duplicateEncode(word){
  let charCount = {};
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let result = "";
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (charCount[char] > 1) {
      result += ")";
    } else {
      result += "(";
    }
  }

  return result;
}


  console.log(duplicateEncode("Succes")); // Output: "()()()"


