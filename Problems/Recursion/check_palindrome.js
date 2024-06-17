// iterative approach

// madam

function checkPalindrome(string)
{
    for(let i=0;i<string.length/2;i++)
        {

            if(string[i]!==string[string.length-1-i]) return false
        }
        return true
}


//console.log(checkPalindrome("madm")); // true

// Recursive approach

function recursiveCheckPalindrom(inputString)
{
    if(inputString.length<=1) return true

   if(inputString[0] === inputString[inputString.length-1])
    {
        return recursiveCheckPalindrom(inputString.substring(1,inputString.length-1))
    }

    return false
}

console.log(recursiveCheckPalindrom("madm"));