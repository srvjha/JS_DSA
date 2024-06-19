const graph = {
    a:['b','d'],
    b:['c'],
    c:[],
    d:['b','f'],
    e:['d'],
    f:[]
};

// By Video 

function biggestIsland(graph){
    const visited  = new Set()
    let largetIsland = 0;
    

    function dfs(node){
        if(visited.has(node)) return 0;
            visited.add(node)
            let tempSum = 1;

            for(const neighbour of graph[node]){
             
                // tempSum+= dfs(neighbour)  
                tempSum = tempSum + dfs(neighbour)
               
              
            }

            return tempSum       
        
    }

    for(const node in graph){
        console.log("Node: ",node)
        if(!visited.has(node)){
            const componentSize = dfs(node)
            console.log("Size: ",componentSize)
            largetIsland = Math.max(largetIsland,componentSize)
            
        }
    }

    return largetIsland;
}

// My Approach
// function biggestIsland(graph){
//     const visited  = new Set()
//     let largetIsland = 0;
//     let tempSum = 1;

//     function dfs(node){
//         if(!visited.has(node)){
//             visited.add(node)

//             for(const neighbour of graph[node]){
//               if(!visited.has(neighbour)){
//                 dfs(neighbour)
//                 tempSum++;
//               }
//             }
//         }
        
//     }

//     for(const node in graph){
//         console.log("Node: ",node)
//         if(!visited.has(node)){
//             dfs(node)
//             largetIsland = Math.max(largetIsland,tempSum)
//             tempSum = 1
//         }
//     }

//     return largetIsland;
// }



console.log(biggestIsland(graph))