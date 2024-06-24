// using depth first search

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  // grid lslands
  function gridIslandsCount(grid){
    
    const rows = grid.length;
    const cols = grid[0].length // We can pick any col btw!

    const visited = new Set()
    let count = 0

    function dfs(r,c){
        const pos = r + ',' + c

        if(
            r < 0 ||
            r>=rows ||
            c < 0 ||
            c >=cols ||
            grid[r][c] === '0' ||
            visited.has(pos)
        ) {
            return
        }
        visited.add(pos)

        dfs(r+1,c) // bottom
        dfs(r-1,c)  // top
        dfs(r,c+1)  // right 
        dfs(r,c-1)  // left
    }

    for(let r = 0;r<rows;r++){
        for(let c = 0; c<cols;c++){
            //grid[r][c]
            if(grid[r][c]==='1' && !visited.has(r,+','+ c)){
                /*
                (!visited.has(gird[r][c]) => 
                    this is completely wrong because only
                 1 and 0 are there so once it will mark as
                  visited it will be for every 1 and 0 
                  present there
                  */
                 count++;
                 dfs(r,c)

            }
        }
    }

    return count;
    
  }


  console.log(gridIslandsCount(grid))

 