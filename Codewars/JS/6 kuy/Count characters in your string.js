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

function count(string) {
    // Create an empty object to store the character count
    histogram = {};

    // Loop through each character in the input string
    for(let i = 0; i < string.length; i++){
        // Get the current character
        let ch = string[i];

        // Check if the character is not already a property in the histogram object
        if(!histogram[ch]){
            // If not, initialize it as 0
            histogram[ch] = 0;
        }

        // Increment the count for the current character in the histogram
        histogram[ch]++;
    }

    // Check if the histogram object is empty (no unique characters)
    if(Object.keys(histogram).length === 0){
        // If it's empty, return the empty histogram object
        return histogram ;
    }
    else
        // If it's not empty, return the histogram object with character counts
        return histogram;
}

let waw = {};
console.log(count(waw));
