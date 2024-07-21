"use strict";
// O(n^2)
function containsDuplicate1(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}
// nlog(n) using sort
function containsDuplicate2(nums) {
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return true;
        }
    }
    return false;
}
// O(n) using set
function containsDuplicate(nums) {
    return nums.length !== new Set(nums).size;
}
//case 1
const nums = [1, 2, 3, 1];
console.log("case 1 ", containsDuplicate(nums));
//case 2
const nums2 = [1, 2, 3, 4];
console.log("case 2 ", containsDuplicate(nums2));
//case 1
const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
console.log("case 1 ", containsDuplicate(nums3));
