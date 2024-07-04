// My Approach

// var reverseWords = function(s) {
//     const originalWords = s.trim().split(" ")
    
//     const reverseWords=[]
//     for(let i=originalWords.length-1;i>=0;i--){
//         if(originalWords[i]!==""){
//             reverseWords.push(originalWords[i])    
//         }
        
//     }

//     return reverseWords.join(" ")
// };

// Another Approach
var reverseWords = function(s) {
    const originalWords = s.trim().split(" ").filter((word)=>word!="")
    
    const reverseWords=[]
    for(let i=originalWords.length-1;i>=0;i--){
       
            reverseWords.push(originalWords[i])    
        
        
    }

    return reverseWords.join(" ")
};

var reverseWords = function(s) {
    let result = []
    let length = s.length;

    let word = ""

    for(let i=0;i<length;i++){
        if(s[i]!==" "){
            word+=s[i]
        }
        else if(word.length>0){
            result.unshift(word)
            word = ""
        }
    }
    if(word.length>0)  result.unshift(word)
    return result.join(" ")
};