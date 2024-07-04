// var maxOperations = function(nums, k) {
//     nums.sort((a,b)=>a-b)

//     let left = 0;
//     let right = nums.length-1
//     let countOperation= 0;

//     while(left<right){
//         let sumPairs = nums[left] + nums[right]
//         if(sumPairs===k){
//              countOperation++;
//              left++;
//              right--;
//             }
//         else if(sumPairs>k) right--;
//         else left++;
//     }
//     return countOperation;
// };

// console.log(maxOperations([1,2,3,4],4))


// method-2 // Without Sorting

var maxOperations = function(nums, k) {
    let map = new Map()
    let operations = 0;

    for(const num of nums){
        let compliment = k - num
        if(map.get(compliment)>0){
            operations++
            map.set(compliment,map.get(compliment) - 1)
        }
        else{
            map.set(num,(map.get(num) || 0) + 1)
        }
    }
    return operations
};