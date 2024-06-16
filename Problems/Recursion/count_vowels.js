// Iterative Approach


const isVowels = (character)=>{
    let vowels = "aeiou"
    let lowerChar = character.toLowerCase()

    if(vowels.indexOf(lowerChar)!=-1)
        {
            return true;
        }
    else
        {
            return false
        }
}

const countVowels = (string)=>{
    let count = 0;
    for(let i=0;i<string.length;i++)
        {
            if(isVowels(string[i])) count+=1
        }
        return count
}

//console.log(countVowels("hello"))

const recursiveCountVowels = (string,stringLength)=>{
    // edge case
    console.log(`Current String Length:${stringLength} for String:${string.substring(0,stringLength)}`)
    if(stringLength==1) {
        console.log("base case got hit here")
        console.log("base case: ",Number(isVowels(string[0])))
        return Number(isVowels(string[0]))
    }

    let result = recursiveCountVowels(string,stringLength-1) +  isVowels(string[stringLength-1])
    console.log(` Count After Checking ${string[stringLength-1]}:${result}`)
    return result
    
}

let myName = "hello"

console.log(recursiveCountVowels(myName,myName.length))