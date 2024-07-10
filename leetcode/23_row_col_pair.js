// let grid = [[3,2,1],[1,7,6],[2,7,7]]

// let rows = []
// let cols = []

// for(let j=0;j<grid.length;j++){
//     for(let i=0;i<grid[0].length;i++){
//         cols.push(grid[i][j])
//         rows.push(grid[j][i])
//     }
// }

// console.log({col:cols,row:rows})

var equalPairs = function(grid) {
    const n = grid.length
    const rowMap = new Map()
    
    

    for(let i=0;i<n;i++){
        const rowStr = grid[i].join(',')
        console.log("gird: ",grid[i])
        console.log("rowStr: ",rowStr)
        rowMap.set(rowStr,(rowMap.get(rowStr) || 0) + 1)
    }

    let count=0;
   

    for(let j=0;j<n;j++){
        let colArr=[]
        for(let i=0;i<n;i++){
            colArr.push(grid[i][j])
        }
        const colStr = colArr.join(',')
        console.log("colStr: ",colStr)
        if(rowMap.has(colStr)) {
            count+=rowMap.get(colStr)
        }
    }

    return count;
};

console.log(equalPairs([[3,2,1],[1,7,6],[2,7,7]]))