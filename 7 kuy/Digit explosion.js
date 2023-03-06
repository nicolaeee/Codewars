let input = "12414";

function explode(a) {
    let res = '';
    let solution = a.toString();
    for (let i=0; i < solution.length; i++){
      let y = solution[i].repeat(s[i]);
      result += y;
    }
    return res;
  };

console.log(explode(input));