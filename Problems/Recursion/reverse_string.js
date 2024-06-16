

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
    if(string==="") return string
     let reverse = string[string.length-1]
     reverse = reverse + reverseStringRecursive(string.substring(0,string.length-1))
    console.log("Reverse: ",reverse)
    return reverse;
}

console.log(reverseStringRecursive("hello"))