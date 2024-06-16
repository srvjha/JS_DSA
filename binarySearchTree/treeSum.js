// Breadth Approach

const treeSumWithBreadthFirstSearch = (root)=>{
    if(root===null) return ;
    let totalSum = 0;

    const queue = [root]

    while(queue.length>0)
    {    
        const node = queue.shift()
        totalSum+= node
        if(node.left!==null) queue.push(node.left)
        if(node.right!==null) queue.push(node.right)
    }
     return totalSum
}

//  Depth Approach

const treeSumWithDepthFirstSearch = (root)=>{
    if(root===null) return 0
    console.log("KEY: ",root.key)
    return root.key+treeSumWithDepthFirstSearch(root.left)+treeSumWithDepthFirstSearch(root.right)
}