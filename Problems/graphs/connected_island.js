const graph = {
    a:['b','d'],
    b:['c'],
    c:[],
    d:['b','f'],
    e:['d'],
    f:[]
};

function connectedIsland(graph){
    const visited  = new Set()
    let count = 0;

    function dfs(node){
        if(!visited.has(node)){
            visited.add(node)

            for(const neighbour of graph[node]){
              if(!visited.has(neighbour)){
                dfs(neighbour)
              }
            }
        }
        
    }

    for(const node in graph){
        console.log("Node: ",node)
        if(!visited.has(node)){
            dfs(node)
            count++;
        }
    }

    return count;
}



console.log(connectedIsland(graph))