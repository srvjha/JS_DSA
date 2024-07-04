var maxArea = function(height) {
    let maxWater = 0; // area
    let left = 0;
    let right = height.length - 1;
     
    while(left < right){
       let currentHeight = Math.min(height[left],height[right])
       let currentWidth = right - left

       let currentArea = currentHeight * currentWidth

       maxWater = Math.max(maxWater,currentArea)

       // move the pointers
       if(height[left]<height[right]){
        left++
       }else {
        right--
       }
    }
    return maxWater
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))

//[1,8,6,2,5,4,8,3,7]