// class Node {
//     constructor(key)
//     {
//         this.key = key
//         this.left = null
//         this.right =null
//     }
//  }

// Iterative Approach
const depthFirstTraversal = (root)=>{
    if(root === null) return

    const values = []
    const stack = [root]

    while(stack.length>0)
        {
            const node = stack.pop()
            values.push(node.key)

            // Suppose interviewer asked to traverse left so put right value first
            if(node.right!==null) stack.push(node.right)
            if(node.left!==null) stack.push(node.left)
        }
    return values
}

// Recursive approach
const depthFirstTraversalRecursive = (root)=>{
    if(root===null) return

    const leftValues = depthFirstTraversal(root.left)
    const RightValues = depthFirstTraversal(root.right)

    // return [root.key,leftValues,RightValues]
    // output:- [a,[b,c,d],[e,f,g]]
    return [root.key,...leftValues,...RightValues]
    // output:- [a,b,c,d,e,f,g]
}