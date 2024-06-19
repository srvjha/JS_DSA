const graph = {
    a:['b','c'],
    b:['a','d','e'],
    c:['a','f'],
    d:['b'],
    e:['b','f'],
    f:['c','e']
    
}

// Iterative

function breadthFirstSearch(graph,start)
{
    const queue = [start]
    const visited  = new Set()


    while(queue.length>0)
        {
            const node = queue.shift()
            for(const neighbour of graph[node])  {
                    if(!visited.has(neighbour)){
                        console.log(neighbour);
                        visited.add(neighbour)
                        queue.push(neighbour)
                    }
                }
            
        }

}

breadthFirstSearch(graph,'a')