

// Iterative Approach

const reverseString = (string)=>{
    let reverse = ""
    let length = string.length - 1 
    while(length>=0)
        {
            reverse = reverse + string[length]
            length = length - 1
        }

        return reverse
}

//console.log(reverseString("Saurav"))

// Recursive Approach

const reverseStringRecursive = (string)=>{
    // Base Case
    console.log("Current String: ",string)
    if(string==="") return string
    
    let reversePart =  reverseStringRecursive(string.substring(0,string.length-1))
    let result = string[string.length-1] + reversePart

    console.log(`Reversing: Last Char ${string[string.length-1]} added in front of ${reversePart} to form a result:${result}`)

    return result
    
}

console.log(reverseStringRecursive("hello"))