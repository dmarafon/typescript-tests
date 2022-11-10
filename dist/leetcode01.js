const twoSum = (nums, target) => {
    const hashMap = new Map();
    nums.forEach((num, index) => hashMap.set(index, target - num));
    let result = [];
    hashMap.forEach((value, key) => {
        if (result.length === 0) {
            for (let i = 0; i < nums.length; i++) {
                if (i !== key && nums[i] === value) {
                    console.log(key, i);
                    result.push(key);
                    result.push(i);
                    return;
                }
            }
        }
    });
    return result;
};
twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
//# sourceMappingURL=leetcode01.js.map