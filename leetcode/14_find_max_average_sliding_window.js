// sliding window 

var findMaxAverage = function(nums, k) {
    let sum = 0;
    for(let i=0;i<k;i++){
        sum+=nums[i]
    }

    let maxSum = sum
    for(let i=k;i<nums.length;i++){
        sum = sum - nums[i-k] + nums[i] // this is where we can say we are sliding to move our window
        maxSum = Math.max(maxSum,sum)
    }

    return maxSum/k
};