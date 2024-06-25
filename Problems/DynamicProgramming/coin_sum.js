// Coin Sum Using Memoization


// My Approach
function coinSum(amount,coins,memo={})
{   
    if(amount in memo) return memo[amount]
    if(amount===0) return true
    if(amount<0) return false

    for(let i=0;i<coins.length;i++){
        memo[amount] = coinSum(amount-coins[i],coins,memo)
    }
    return memo[amount]
}





function coinSum1(amount,coins,memo={})
{   
    if(amount in memo) return memo[amount]
    if(amount===0) return true
    if(amount<0) return false

    for(let i=0;i<coins.length;i++){
        if(coinSum(amount-coins[i],coins,memo)){
            memo[amount] = true
            return true
        }
    }
    memo[amount] = false
    return false
}

console.log(coinSum1(7, [2, 3]));         // true (2+2+3 or 3+2+2)
console.log(coinSum1(7, [5, 3, 4, 7]));   // true (7 or 3+4)
console.log(coinSum1(7, [2, 4]));         // false
console.log(coinSum1(8, [2, 3, 5]));      // true (3+5)
console.log(coinSum1(0, [1, 2, 3]));      // true (amount is 0)
console.log(coinSum1(1, []));             // false (no coins available)
console.log(coinSum1(300, [7, 14]));      // false (cannot sum to 300 with these coins)
