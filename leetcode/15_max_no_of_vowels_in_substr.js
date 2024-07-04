var maxVowels = function(s, k) {
    const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"])
    let currentVowelCount = 0
    let maxVowelCount=0;
    for(let i=0;i<k;i++){
         if(vowels.has(s[i])) currentVowelCount++
    }
    maxVowelCount=currentVowelCount

    for(let i=k;i<s.length;i++){
        if(vowels.has(s[i])) currentVowelCount++
        if(vowels.has(s[i-k])) currentVowelCount--

        maxVowelCount = Math.max(maxVowelCount,currentVowelCount)
    }

    return maxVowelCount
};

// another approach

var maxVowels = function(s, k) {
    const vowels = "aeiouAEIOU"
    let currentVowelCount = 0
    let maxVowelCount=0;
    for(let i=0;i<k;i++){
         if(vowels.includes(s[i])) currentVowelCount++
    }
    maxVowelCount=currentVowelCount

    for(let i=k;i<s.length;i++){
        if(vowels.includes(s[i])) currentVowelCount++
        if(vowels.includes(s[i-k])) currentVowelCount--

        maxVowelCount = Math.max(maxVowelCount,currentVowelCount)
    }

    return maxVowelCount
};