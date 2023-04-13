/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */


let arr = ['^^'[[3,4, '^^'][[1, 's,'['l',2, 3 ['^^']]]]]];

function countCats(matrix){ //Here I used function declaration
    let searchChar = '^^';
    let count = 0;
    for(let i = 0; i < matrix.length; i++){
        if (Array.isArray(matrix[i])){
            count += countCats(matrix[i], searchChar);
        }
        else if (matrix[i] === searchChar){
            count++;
        }
    }
    return count;
}

console.log(countCats(arr))



