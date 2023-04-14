function getCommonCharacterCount(s1,s2) {
    let count = 0;

    for (let i = 0; i < s1.length; i++) {
      const char = s1[i];

      // check if the character is present in both strings
      if (s2.includes(char)) {
        count++;

        // remove the character from s2 to avoid double counting
        s2 = s2.replace(char, '');
      }
    }

    return count;

  }