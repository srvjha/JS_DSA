

var isSubsequence = function(s, t) {
    let sIndex = 0;
    for(const char of t){
        if(sIndex === s.length) break
        if(s[sIndex]===char)sIndex++
    }
    return sIndex === s.length
};

console.log(isSubsequence("axc", "ahbgdc"))