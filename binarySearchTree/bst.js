 
 //import { breadthFirstSearchRecursive } from "./bft.js"
 class BSTNode {
    constructor(key)
    {
        this.key = key
        this.left = null
        this.right =null
    }
 }

 class BSTTree {
    constructor()
    {
        this.root = null
    }

    // Insertion in BST

    insert(key)
    {
        const newNode  = new BSTNode(key)
        
        if(this.root===null){
            this.root = newNode
            }
        else {
           this.insertNode(this.root,newNode)
        }
    }

    insertNode(node,newNode)  // node->root node
    {
        if(newNode.key<node.key)  {
                if(node.left===null) {
                        node.left = newNode
                    }
                else{
                        this.insertNode(node.left,newNode)
                    }
            }
        else if(newNode.key===node.key) {
                node.left = newNode
            }
        else {
                if(node.right===null){
                        node.right = newNode
                    }
                else{
                        this.insertNode(node.right,newNode)
                    }
            }
    }

    delete(key){
        console.log("Root Before Deletion: ",this.root)
        this.root = this.deleteNodeWithInOrderPredecessor(this.root,key)
        console.log("Root After Deletion: ",this.root)
    }
    //  Following Inorder Successor
    deleteNode(node,key){ // node -> root
       // for node to be null
       if(node===null) return null
       // First we will search for the key

       if(key < node.key){ 
        node.left= this.deleteNode(node.left,key)
        
       } else if(key > node.key){
        node.right = this.deleteNode(node.right,key)
       } else{
        // In this case we got they key
        // 1. Now first will if this is a leaf node
        if(node.left === null && node.right === null){
            return null
             // here this will make the  this.root = this.deleteNode(this.root,key) "null" becuase recursion ki wajah se traversal krke usne point of refrence change kr diya hai 
        }
        // 2. 1 Child
        else if(node.left === null){
            return node.right // idhr point of refrence "node.right" kr diya wo root ko replace kr dega
        }
        else if(node.right === null){
            return node.left // idhr point of refrence "node.left" kr diya wo root ko replace kr dega
        }

        // 3. Two node ->In Order Successor (Smallest Key in right subtree)
         else {
            let tempNode = this.findMinNode(node.right)
            console.log("TempNode: ",tempNode)
            node.key = tempNode.key
            console.log("Node key: ",node.key)
            console.log("Node right before: ",node.right)
            node.right = this.deleteNode(node.right, tempNode.key)
            console.log("Node right: ",node.right)
         }
    }
    return node
}
   deleteNodeWithInOrderPredecessor(node,key)
   {
    if(node===null) {
        console.log("Node is Empty!!")
        return null
    }
    if(key<node.key)
        {
            node.left = this.deleteNodeWithInOrderPredecessor(node.left,key)
        }
    else if(key>node.key)
        {
            node.right = this.deleteNodeWithInOrderPredecessor(node.right,key)
        }
    else
    {
        //1.Check For Leaf Node
        if(node.left===null && node.right===null) return null

        //2. Check if either of left or right child is present
        else if(node.left===null) return node.right
        else if(node.right===null) return node.left
        // 3, Both childs are present
        else{
            // In Order Predecessor(Largest Key in Left Subtree)
            let tempNode = this.findMaxNode(node.left)
            console.log("TempNode: ",tempNode)
            node.key = tempNode
            console.log("Node: ",node)
            
            node.left = this.deleteNodeWithInOrderPredecessor(node.left,tempNode)
            console.log("Node left: ",node.left)
            console.log("Node1: ",node)
        }
        console.log("New Node: ",node)
       
    }
    return node
   }
 findMinNode(node)
 {
    while(node.left!==null)
        {
            node = node.left
        }
        console.log("Find Min Node: ",node)
        return node
  }

  findMaxNode(node)
 {
    while(node.right!==null)
        {
            node = node.right
        }
        console.log("Find Max Node: ",node)
        return node
  }

  // Pre-In-Post Order Traversal
  inorderTraversal()
  {
    const result = []
    this.inorder(this.root,result)
    return result
  }

  inorder(node,result)
  {
    if(node!==null){
        this.inorder(node.left,result)
        result.push(node.key)
        this.inorder(node.right,result)
    }
  }

  preorderTraversal()
  {
    const result = []
    this.preorder(this.root,result)
    return result
  }

  preorder(node,result)
  {
    if(node!==null){
        result.push(node.key)
        this.preorder(node.left,result)       
        this.preorder(node.right,result)
    }
  }

  postorderTraversal()
  {
    const result = []
    this.postorder(this.root,result)
    return result
  }

  postorder(node,result)
  {
    if(node!==null){
        this.postorder(node.left,result)        
        this.postorderorder(node.right,result)
        result.push(node.key)
    }
  }

  depthFirstTraversalRecursive = (root)=>{
    if(root===null) return [];

    // const leftValues = this.depthFirstTraversalRecursive(root.left)
    // const RightValues = this.depthFirstTraversalRecursive(root.right)

   
    return [root.key,...this.depthFirstTraversalRecursive(root.left),...this.depthFirstTraversalRecursive(root.right)]
    
}

   breadthFirstSearchRecursive = (root)=>{
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

treeSumWithDepthFirstSearch = (root)=>{
    if(root===null) return 0;    
    console.log("key: ",root.key)   
    return root.key+this.treeSumWithDepthFirstSearch(root.left)+this.treeSumWithDepthFirstSearch(root.right)
}



    printMe()
    {
        let root = this.root
        while(root)
            {
                console.log(root)
                root = root.right

                
            }
        
    }
 }

 const myBST = new BSTTree()
 myBST.insert(15)
 myBST.insert(9)
 myBST.insert(19)
 myBST.insert(4)
 myBST.insert(12)
 myBST.insert(18)
 myBST.insert(30)
 const values = myBST.depthFirstTraversalRecursive(myBST.root)
 
 console.log(values)

 //myBST.printMe()
