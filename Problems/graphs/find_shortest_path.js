const edges = [
    ['b','a'],
    ['c','a'],
    ['d','b'],
    ['e','b'],
    ['e','c'],
    ['f','d'],
    ['f','e'],   

];


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

 function shortestPath(edges,start,dest){
   const graph = createGraph(edges)
   console.log("Graph: ",graph)
   const queue = [[start,0]]
   const visited = new Set([start])

   while(queue.length>0){
    const [node,distance] = queue.shift()
    console.log([node,distance])
    if(node === dest) return [node,distance]

    // process child

    for(const neighbour of graph[node]){
        if(!visited.has(neighbour)){
            visited.add(neighbour)
            queue.push([neighbour,distance+1])
        }
    }
   }
 }


 console.log(shortestPath(edges,'a','f'))