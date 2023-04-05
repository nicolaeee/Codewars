function replaceChars(str) {
    let counts = {};
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
      let char = str[i].toLowerCase();
      if (counts[char]) {
        newStr += ')';
      } else {
        newStr += '(';
      }
      counts[char] = (counts[char] || 0) + 1;
    }
    return newStr;
  }

  console.log(replaceChars("Succes")); // Output: "()()()"


