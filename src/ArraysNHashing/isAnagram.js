"use strict";
// nlogn using sort 
function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    return s.split("").sort().join() === t.split("").sort().join();
}
// O(n) using map 
function isAnagram2(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const sMap = new Map();
    const tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!sMap.has(s[i])) {
            sMap.set(s[i], 0);
        }
        sMap.set(s[i], sMap.get(s[i]) + 1);
        if (!tMap.has(t[i])) {
            tMap.set(t[i], 0);
        }
        tMap.set(t[i], tMap.get(t[i]) + 1);
    }
    return [...sMap.keys()].reduce((acc, key) => sMap.get(key) === tMap.get(key) && acc, true);
}
//case 1
let s = "anagram", t = "nagaram";
console.log("case 1 ", isAnagram2(s, t));
//case 2
s = "rat";
t = "car";
console.log("case 2 ", isAnagram2(s, t));
