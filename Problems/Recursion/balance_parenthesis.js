// Input = ["(","(",")",")","(",")"]

// array = ["{","(","[","}",")","]"]


// Using Stack
// function checkBalanceParenthesis(array)
// {
//     let stack=[];
//     for(let i=0;i<array.length;i++)
//         {
//             if(array[i]==="{" || array[i]==="(" ||array[i]==="[") stack.push(array[i])
//             if(array[i]==="}" || array[i]===")" || array[i]==="]") stack.pop()
//         }
//     if(stack.length===0) return true
//     return false
// }


// console.log(checkBalanceParenthesis(["(","(",")",")"])) // true

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