

// Iterative

function lengthWithoutLength(string)
{
    let myLength = 0;
    // for(let i=0;i<string.length;i++)
    //     {
    //         myLength++;
    //     }
   // for(let i in string) myLength++
    for(let i of string) myLength++
    
    return myLength
}

// console.log(lengthWithoutLength("Saurav"))

// Recursive

function recursiveLengthWithoutLength(string)
{   
    if(string==="") return 0;
   

    return 1 + recursiveLengthWithoutLength(string.substring(1))
}
 // Another way

// function recursiveLengthWithoutLength(string)
// {   
//     if(string.length<=1) return string.length;
   

//    return recursiveLengthWithoutLength(string[0]) + recursiveLengthWithoutLength(string.substring(1))
// }

console.log(recursiveLengthWithoutLength("Saurav"))