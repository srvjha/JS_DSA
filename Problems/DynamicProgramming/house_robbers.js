

function robNonAdjacent(nums,i=0,memo={}){
    if(i in memo) return memo[i]

    if(i>=nums.length) return 0;
    
    const take = nums[i] + robNonAdjacent(nums,i+2,memo)
    const skip = robNonAdjacent(nums,i+1,memo)

    memo[i] = Math.max(take,skip)

    return memo[i]
}

console.log(robNonAdjacent([1,2,3,1]))