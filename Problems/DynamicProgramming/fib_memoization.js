function fibMemo(n,memo={}){
    if(n in memo){
      console.log("MEMO CAllED: ",memo[n])
      return memo[n]
    }
        
   if(n <=1) return n

   memo[n] = fibMemo(n-1,memo) + fibMemo(n-2,memo)
   console.log("MEMO: ",memo[n])

   return memo[n]
}

console.log(fibMemo(5))