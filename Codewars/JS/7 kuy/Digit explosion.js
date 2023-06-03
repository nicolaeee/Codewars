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

function explode(s) {
    let arr = [];
    let split = s.split("");
    for (let item of s) {
      if (item == "1") {
        arr.push("1");
      } else if (item == "2") {
        arr.push("22");
      } else if (item == "3") {
        arr.push("333");
      } else if (item == "4") {
        arr.push("4444");
      } else if (item == "5") {
        arr.push("55555");
      } else if (item == "6") {
        arr.push("666666");
      } else if (item == "7") {
        arr.push("7777777");
      } else if (item == "8") {
        arr.push("88888888");
      } else if (item == "9") {
        arr.push("999999999");
      }
    }
    return arr.join("");
  }