let nums = [2,2,3,5,3];

var containsDuplicate = function(nums) {
    const set = new Set(nums)

    return set.size !== nums.length

  };

  containsDuplicate(nums)