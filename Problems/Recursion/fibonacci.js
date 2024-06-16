// Iterative Approach

function fibonacci(value){
    let n0 = 0;
    let n1 = 1;
    let temp ;

    for (let i = 0; i < value; i++) {
        temp  = n0+n1
        n0 = n1
        n1 = temp
        
    }
    return n0
   
}

//console.log(fibonacci(5))

// Recursive Approach

function recursiveFibonacci(value)
{    
    if(value<=1) return value
    // if(value===0) return 0;
    // if(value===1) return 1;
    return (recursiveFibonacci(value-2) + recursiveFibonacci(value-1))
}

console.log(recursiveFibonacci(5))