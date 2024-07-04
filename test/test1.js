var minimumAverage = function(nums) {
   
    let averages = []
    let n =  Math.floor(nums.length / 2); 
    let averageNum = 0
    
    for (let i = 0; i < n; i++) {
    let minElement  = Math.min(...nums) // 15
    let maxElement  = Math.max(...nums)  // 1
    console.log("MaxElement: ",maxElement)
    console.log("MinElement: ",minElement)

        averageNum = (maxElement+minElement)/2
        console.log("Average: ",averageNum)
        averages.push(averageNum)
      // Use filter to remove only one instance of minElement and maxElement
      let minRemoved = false;
      let maxRemoved = false;
      nums = nums.filter(num => {
          if (num === minElement && !minRemoved) {
              minRemoved = true;
              return false; // Remove this occurrence
          }
          if (num === maxElement && !maxRemoved) {
              maxRemoved = true;
              return false; // Remove this occurrence
          }
          return true; // Keep other elements
      });
    }

    let smallestElement= Math.min(...averages)
    return smallestElement
    
};
console.log(minimumAverage([7,8,3,4,15,13,4,1]))
console.log(minimumAverage([1,9,8,3,10,5]))