
const edges = [
    ['b','a'],
    ['c','a'],
    ['d','b'],
    ['e','b'],
    ['e','c'],
    ['f','d'],
    ['f','e'],   

];

  

// now we need to convert this into a adjaceny list like:-

/* 
const graph = {
  b:[a],
  a:[b,c],
  c:[a],
}

loop => check if key DOES NOT exist, then add key => push both nodes


*/

const createGraph=(edges) =>{
   const graph = {}

   for(const edge of edges){
    const [x,y] = edge 
    if(!(x in graph)){
        graph[x] = []
    }
    if(!(y in graph)){
        graph[y] = []
    }
    graph[x].push(y)
    graph[y].push(x)
   }
   
   return graph
}


const hasPathDfs = (graph,start,dest)=>{
    const stack = [start]
    const visited = new Set()

    // now to find route go in depth of graph

    while(stack.length>0){
        const node = stack.pop()
        //console.log("Node: ",node)
        if(node===dest) return true
        if(!visited.has(node)) visited.add(node)
        for(const padosi of graph[node]){
            if(!visited.has(padosi)){
                stack.push(padosi)
            }   
        }
    }

    return false
}

const finalFuntionBundle = (edges,source,destination)=>{
    const graph = createGraph(edges)
    return hasPathDfs(graph,source,destination)
}

// Test the function
console.log(finalFuntionBundle(edges, 'a', 'b')); // true
console.log(finalFuntionBundle(edges, 'a', 'f')); // true
console.log(finalFuntionBundle(edges, 'b', 'c')); // true
console.log(finalFuntionBundle(edges, 'd', 'c')); // true
console.log(finalFuntionBundle(edges, 'a', 'd')); // false