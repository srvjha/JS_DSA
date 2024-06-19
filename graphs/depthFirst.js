const graph = {
    a:['b','d'],
    b:['c'],
    c:[],
    d:['b','f'],
    e:['d'],
    f:[]
};

// Iterative 

function depthFirstSearch(graph,start){
    const stack  = [[start]]
    const visited = new Set()

    while(stack.length > 0){
        const node = stack.pop()
        if(!visited.has(node)){
            visited.add(node)
            for( const neighbour of graph[node]){
                if(!visited.has(neighbour)){
                    stack.push(neighbour)
                }
            }
        }
    }
}

// Recursive 

function depthFirstSearchRecursive(graph,start,visited=new Set())
{   
     
   
    if(!visited.has(start)){
        console.log(start)
        visited.add(start)
        for(const neighbour of graph[start]){
            depthFirstSearchRecursive(graph,neighbour,visited)
        }
    }
}

depthFirstSearchRecursive(graph, 'a');