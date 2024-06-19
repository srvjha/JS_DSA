// Input = ["(","(",")",")","(",")"]

// array = ["{","(","[","}",")","]"]


// Using Stack
// function checkBalanceParenthesis(array)
// {   if(array.length===0) return "Array is Empty!"
//     let stack=[];
   
//     for(let i=0;i<array.length;i++)
//         {
//             if(array[i]==="{" || array[i]==="(" ||array[i]==="[" || array[i]==="<") stack.push(array[i])
//             if(array[i]==="}" || array[i]===")" || array[i]==="]" || array[i]==='>') stack.pop()
//         }
//     if(stack.length===0) return true
//     return false
// }

// Proper Optimized for types of test cases

function checkBalanceParenthesis(array) {
    if (array.length === 0) return "Array is Empty!";
    
    const stack = [];
    const matchingBrackets = {
        '}': '{',
        ')': '(',
        ']': '[',
        '>': '<'
    };
    
    for (let i = 0; i < array.length; i++) {
        const char = array[i];
        
        if (char === '{' || char === '(' || char === '[' || char === '<') {
            stack.push(char);
        } else if (char === '}' || char === ')' || char === ']' || char === '>') {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}



console.log(checkBalanceParenthesis(["(", ")", "{", "}", "[", "]"])); // true
console.log(checkBalanceParenthesis(["(", "{", "}", ")", "[", "]"])); // true
console.log(checkBalanceParenthesis(["(", "{", "[", "]", "}", ")"])); // true
console.log(checkBalanceParenthesis(["(", ")", "{", "}", "[", "]", "]"])); // false
console.log(checkBalanceParenthesis(["(", ")", "{", "[", "]", "}"])); // false
console.log(checkBalanceParenthesis(["{", "[", "]", "}", "<", ">"])); // true
console.log(checkBalanceParenthesis(["{", "[", "}", "]"])); // false
console.log(checkBalanceParenthesis([])); // "Array is Empty!"

function balancePara(array,startIndex=0,count=0)
{
    if(startIndex===array.length) return count===0
    if(count<0) return false

    if(array[startIndex] =="(")
        {
            balancePara(array,startIndex+1,count+1)
        }
    else if(array[startIndex]===")")
        {
            balancePara(array,startIndex+1,count-1)
        }
    else return false
}