/* 
5512103073210694
4556-3646-0793-5616
""
*/

function maskify(cardNumber){
   if(typeof cardNumber === 'number'){
    cardNumber = cardNumber.toString()
   }
   // optional
   if(cardNumber.length < 6){
    return cardNumber
   }

   const firstChar = cardNumber[0];
   const lastFourChar = cardNumber.slice(-4)

   let maskedSection = ""
   for(let i=1;cardNumber.length-4;i++){
    const char = cardNumber[i];
    maskedSection += isNaN(parseInt(char)) ? char : '#'
   }
   return firstChar + maskedSection + lastFourChar
}

console.log(maskify(5512103073210694))
console.log(maskify("4556-3646-0793-5616"))