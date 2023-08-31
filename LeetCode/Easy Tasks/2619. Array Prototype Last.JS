Array.prototype.last = function() {
    if (this.length === 0) {
        return -1; // Return -1 for an empty array
    } else {
        return this[this.length - 1]; // Return the last element of the array
    }
};

let nums = [null, {}, 3, []];

nums.last()