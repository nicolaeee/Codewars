Array.prototype.last = function(arr) {

    if (this.length === 0){
        return JSON.parse('-1');
    }
        else{
            return JSON.parse(this.slice(-1))
        }
    // return console.log(this.slice(-1).join(''));
};

let nums = [null, {}, 3];

nums.last()