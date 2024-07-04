// My Approach

// var kidsWithCandies = function(candies, extraCandies) {
//     let maxCandies = Math.max(...candies)
//     const result = []
//     for(let i=0;i<candies.length;i++){
//         if(candies[i]+extraCandies>=maxCandies) result.push(true);
//         else result.push(false)
//     }
//     return result
// };


var kidsWithCandies = function(candies, extraCandies) {
    const mostCandies = Math.max(...candies);
    return candies.map((candyAmount) => candyAmount + extraCandies >= mostCandies)
};