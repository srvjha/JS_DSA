// find gcd of two numbers
// input:42,56

// 42 divisors 
// 1,2,3,6,7,14,21,42
// 56 divisors
// 1,2,4,7,8,14,28,56
// output:14

function gcd(num1,num2)
{
    if(num1==num2) return num1

    if(num1<num2) return gcd(num1,num2-num1)
    else return gcd(num1-num2,num2)
}


console.log(gcd(6,4)) //output:14
