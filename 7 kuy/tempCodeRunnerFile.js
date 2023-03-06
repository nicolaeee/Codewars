let input = "12414";

function explode(input) {
    let result = '';
    let s = input.toString();  // So that input can also be a number
    for (let i=0; i < s.length; i++){
      let y = s[i].repeat(s[i]);
      result += y;
    }
    return result;
  };

explode(input);