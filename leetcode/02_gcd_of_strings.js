
// My Approach

function gcdStrings(str1,str2){
    if(str1+str2!==str2+str1) return ""

   let m = str1.length
   let n = str2.length   
   function gcd(m,n){
       if(m===n) return m
       if(m>n) return gcd(m-n,n) 
       else return gcd(m,n-m)   
   } 
   const result = gcd(m,n)

   return  str1.substring(0,result)
  


}

// Another Approach
// function gcdStrings(str1,str2){
    
    
//         let m = str1.length
//         let n = str2.length   
//         function gcd(m,n){
//             if(m===n) return m
//             if(m>n) return gcd(m-n,n) 
//             else return gcd(m,n-m)   
//         } 
//         const result = gcd(m,n)
 
//         const check = str1.substring(0,result)
//         if(str1.split(check).join("")==="" && str2.split(check).join("")==="") return check
        
//         return ""
    
    
// }

console.log(gcdStrings("ABCDEF","ABC"))

function gcdOfStrings(str1,str2){
    // base case
    if(str1+str2!==str2+str1) return ""

    // Eucleadian Algo
    // gcd(a,b) => gcd(a,(b-a))
    function gcd(a,b){
        if(b.length===0) return a
        return gcd(b,a.slice(0,a.length % b.length))
    }

    return gcd(str1,str2)
   
}