// class Node {
//     constructor(key)
//     {
//         this.key = key
//         this.left = null
//         this.right =null
//     }
//  }

const breadthFirstSearch = (root)=>{
    const values = []
   
    if(root===null) return values;

    const queue = [root]

    while(queue.length>0)
        {
            const node = queue.shift()  // Point of Optimization
            values.push(node.key)
            if(root.left!==null) queue.push(node.left)
            if(root.right!==null) queue.push(node.right)

        }
        return values
}

const breadthFirstSearchRecursive = (root)=>{
    const values = []
    if(root===null) return values;
    
      const traverseLevel = (nodeLevel)=>{
        if(nodeLevel.length===0) return
        const levelVals = []
        for(let node of nodeLevel)
            {
                values.push(node.key)
                if(node.left!==null) levelVals.push(node.left)
                if(node.right!==null) levelVals.push(node.right)
            }
        traverseLevel(levelVals)
      }
      traverseLevel([root])
      return values 

}

