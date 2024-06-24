const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]

function findMaxArea(grid){
    let maxArea = 0;
    const visited = new Set()
    const rows = grid.length
    const cols = grid[0].length

    function dfs(r,c){
        const pos = r + ',' + c
        if(
            r<0 ||
            r>=rows ||
            c<0 ||
            c>=cols ||
            grid[r][c]===0||
            visited.has(pos)
        ) {
            return 0
        }
        visited.add(pos)
        let countSum = 1;
        

       countSum += dfs(r-1,c) // top
       countSum += dfs(r+1,c) // bottom
       countSum += dfs(r,c-1)//left
       countSum += dfs(r,c+1)//right

       return countSum;
    }

    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(grid[r][c]===1 && !visited.has(r + ',' + c))
                {
                    const componentSize = dfs(r,c)
                    maxArea = Math.max(maxArea,componentSize)
                    
                }
        }
    }
    return maxArea
}
  console.log("MAX AREA: ",findMaxArea(grid))

function findMinArea(grid){
    let minArea = Infinity;
    const visited = new Set()
    const rows = grid.length
    const cols = grid[0].length

    function dfs(r,c){
        const pos = r + ',' + c
        if(
            r<0 ||
            r>=rows ||
            c<0 ||
            c>=cols ||
            grid[r][c]===0||
            visited.has(pos)
        ) {
            return 0
        }
        visited.add(pos)
        let countSum = 1;
        

       countSum += dfs(r-1,c) // top
       countSum += dfs(r+1,c) // bottom
       countSum += dfs(r,c-1)//left
       countSum += dfs(r,c+1)//right

       return countSum;
    }

    for(let r=0;r<rows;r++){
        for(let c=0;c<cols;c++){
            if(grid[r][c]===1 && !visited.has(r + ',' + c))
                {
                    const componentSize = dfs(r,c)
                    minArea = Math.min(minArea,componentSize)
                    
                   
                    
                }
        }
    }
    return minArea
}
  console.log("MIN AREA: ",findMinArea(grid))