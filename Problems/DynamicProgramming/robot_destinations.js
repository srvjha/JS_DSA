// Input: m = 3, n = 7
// Output: 28

function uniquePath(grid,row=0,col=0,memo={}){
    const pos = row + "," + col

    // Out of bound check
   if(
    row<0 ||
    row>=grid.length ||
    col<0 ||
    col>=grid[0].length ||
    grid[row][col] === "X"
   ) {
    return 0;
   }

   // Check if you have arrived at given location
   if(row===grid.length-1 && col===grid[0].length-1){
    return 1;
   }

   // return the cache(memo) result
   if(pos in memo){
    return memo[pos]
   }

   memo[pos] = uniquePath(grid,row+1,col,memo) + uniquePath(grid,row,col+1)

   return memo[pos]
}

// console.log(
//     uniquePath([
//         ["O","O","O"],
//         ["O","X","O"],
//         ["O","O","O"]
//         ])
//         ) // Output: 2

// Leetcode wala problem ka logic
function uniquePathCount(m,n,row=0,col=0,memo={}){
    const pos = row + "," + col

    // Out of bound check
   if(
    row<0 ||
    row>=m ||
    col<0 ||
    col>=n
   
   ) {
    return 0;
   }

   // Check if you have arrived at given location
   if(row===m-1 && col===n-1){
    return 1;
   }

   // return the cache(memo) result
   if(pos in memo){
    return memo[pos]
   }

   memo[pos] = uniquePathCount(m,n,row+1,col,memo) + uniquePathCount(m,n,row,col+1)

   return memo[pos]
}

console.log(uniquePathCount(3,7))
