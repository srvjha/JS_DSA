
// My Approach
// var reverseVowels = function(s) {
//     let start = 0;
//     let end = s.length-1;
//     let result = s.split("")

//     function checkVowels(char){
//         const vowels = ['a','e','i','o','u']
//        console.log("Char: ",char + "==>" + vowels.includes(char.toLowerCase()))
//         return vowels.includes(char.toLowerCase())        
//     }

//     while(start<=end){
//         if(!checkVowels(result[start])) start++;
//         else if(!checkVowels(result[end])) end--;
//         else{
//             let temp = result[start];
//             result[start] = result[end];
//             result[end] = temp;
//             start++;
//             end--;
            
//          }  
//          console.log("Start: ",start,"End: ",end)

        
        
//     }
      
//     return result.join("")  
// };




console.log(reverseVowels("hello"))