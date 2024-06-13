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
        this.root = this.deleteNode(this.root,key)
    }

    deleteNode(node,key){ // node -> root
       // for node to be null
       if(node===null) return null

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
            node.key = tempNode.key
            node.right = this.deleteNode(node.right, tempNode.key)
         }
    }
    return node
}
 findMinNode(node)
 {
    while(node.left!==null)
        {
            node = node.left
        }
        return node
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
 myBST.insert(5)
 myBST.insert(10)
 myBST.insert(1)
 myBST.insert(51)
 myBST.insert(12)
 myBST.insert(26)

 myBST.printMe()
