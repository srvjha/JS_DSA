function mergeWords(word1, word2) {
    let i = 0
    let j = 0
    let result = ""
    while(i<word1.length && j<word2.length){
       result +=word1[i]
       result +=word2[j] 
       i++;
       j++;
    }
   while(i<word1.length){
    result+=word1[i];
    i++;
   }

   while(j<word2.length){
    result+=word2[j];
    j++;
   }

   return result
};

console.log(mergeWords("abcd","pq"))