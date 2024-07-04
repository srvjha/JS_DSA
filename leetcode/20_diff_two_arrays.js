
var findDifference = function(nums1, nums2) {
   let set1 = new Set(nums1);
   let set2 = new Set(nums2);
   
   const unique1 = [...set1].filter((num=>!set2.has(num)))
   const unique2 = [...set2].filter((num=>!set1.has(num)))

   return [unique1,unique2]
};

console.log(findDifference([1,2,3],[2,4,6]))