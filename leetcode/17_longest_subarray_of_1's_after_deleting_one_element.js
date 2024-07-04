
var longestSubarray = function(nums) {
     let maxSubrray = 0;
     let left = 0;
     let zeroCount=0;

     for(let right=0;right<nums.length;right++){
        if(nums[right]===0){
            zeroCount++;
           
        }
        while(zeroCount>1){
            if(nums[left]===0){
                zeroCount--
                
            }
            left++
        }
        if(zeroCount===1){
            maxSubrray = Math.max(maxSubrray,right-left)
        }     

        
     }
     return zeroCount === 0 ? nums.length-1 :  maxSubrray;
};

console.log(longestSubarray([0,1,1,1,0,1,1,0,1]))