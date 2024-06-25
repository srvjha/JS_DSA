const grid = [[1,3,1],[1,5,1],[4,2,1]]
// finding minimum path

function minPathSum(grid,row=0,col=0,memo={}){
    const pos = row + "," + col

     // return the cache(memo) result
   if(pos in memo){
    return memo[pos]
   }

    // Out of bound check
   if(
    row<0 ||
    row>=grid.length ||
    col<0 ||
    col>=grid[0].length
  
   ) {
    return Infinity;
   }

   // Check if you have arrived at given location
   if(row===grid.length-1 && col===grid[0].length-1){
    return grid[row][col];
   }

  

   memo[pos] = grid[row][col] + Math.min(minPathSum(grid,row+1,col,memo) , minPathSum(grid,row,col+1))

   return memo[pos]
}


console.log(minPathSum(grid))