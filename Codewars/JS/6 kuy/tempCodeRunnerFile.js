let string = "aba",
    histogram = {};

for(let i = 0; i < string.length; i++){
    let ch = string[i]

    if(!histogram[ch]){
        histogram[ch] = 0;
    }
    histogram[ch]++
}

console.log(histogram)

function arr(string) {
    histogram = {};
    for(let i = 0; i < string.length; i++){
        let ch = string[i]

        if(!histogram[ch]){
            histogram[ch] = 0;
        }
        histogram[ch]++
    }

    if(Object.keys(histogram).length === 0){
        return histogram ;
    }
    else
        return histogram
  }

console.log(arr(string));
