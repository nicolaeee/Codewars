let s = ["abcd"]

function accum(s) {
    let result = s.split("").map((char, index) => char * index).join("");
    console.log(result)
}

accum(s2);