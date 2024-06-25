function minCoins(amount,coins,memo={})
{   
    if(amount in memo) return memo[amount]
    if(amount===0) return 0
    if(amount<0) return -1
    let minCoin=Infinity

    for(let i=0;i<coins.length;i++){
       const result =  minCoins(amount-coins[i],coins,memo)
       if(result!=-1){
         minCoin = Math.min(minCoin,result+1)
       }           
    }
    memo[amount] = minCoin === Infinity? -1:minCoin
    return memo[amount]
}

console.log(minCoins(25,[1,5,10,25])) // 1