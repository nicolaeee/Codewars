const str = 'This website is for losers LOL!';

function disemvowel(str) {
    let arr = Array.from(str);
    return arr;//Here I was atempting with array method that is to long
    //much easier is replace method
    function disemvowel(str) {
        return  str.replace(/[aeiou]/gi, '');
        }
  }

  disemvowel();




