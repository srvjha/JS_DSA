// Remove all space and tabs from the string
// this includes the character " " for space and "/t" for tabs

function removeTabsAndSpace(string)
{
     let result=""
     for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if(char!==" " && char!=="\t") result+=char
        
     }
     return result
}

// console.log(removeTabsAndSpace("Sa  ra  v"))

function recursiveRemoveTAS(string)
{
    if(string.length===0) return ""

    const firstChar = string[0]
    const restOfString = string.slice(1)

    if(firstChar===" " || firstChar==='\t')
        {
            return recursiveRemoveTAS(restOfString)
        }

        return firstChar + recursiveRemoveTAS(restOfString)
}

console.log(recursiveRemoveTAS("Sa  ra  v"))