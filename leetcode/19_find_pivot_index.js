// My Approach
var pivotIndex = function(nums) {
    let leftSum=0;
    let rightSum = 0;
    
    for(const num of nums) rightSum+=num   

    for(let pivotIndex=0;pivotIndex<nums.length;pivotIndex++){
            if(pivotIndex>0) leftSum+=nums[pivotIndex-1]    // out of bound check             
            rightSum-=nums[pivotIndex]    
            if(leftSum===rightSum) return pivotIndex        
    }
    return -1
 
};

var pivotIndex = function(nums) {
    const totalSum = nums.reduce((acc,num)=>acc+num,0) 
    let leftSum=0;

    for(let i=0;i<nums.length;i++){
        let rightSum = totalSum - leftSum - nums[i]
        if(leftSum===rightSum) return i
        leftSum+=nums[i]
    }
    return -1;
};

console.log(pivotIndex([2,1,-1]))