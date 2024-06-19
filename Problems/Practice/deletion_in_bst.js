// Deletion in BST

class BSTNode {
    constructor(key)
    {
        this.key = key
        this.left = null
        this.right = null
    }
}

class BSTTree {
    constructor()
    {
        this.root = null
    }

    delete(key)
    {
        this.root = deleteNode(this.root,key)
    }

    deleteNode(node,key) {
      // node=> this.root

      // check for the node
      if(node===null) return null

      if(key<node.key)
        {
            node.left = this.deleteNode(node.left,key)
        }
       else if(key>node.key)
        {
            node.right = this.deleteNode(node.right,key)
        }
        else
        {
            // 1. for leaf node
            if(node.left === null && node.right === null)
                {
                    return null
                }
            // 2. 1 child
            else if(node.left===null)
                {
                    return node.right
                }
            else if(node.right===null)
                {
                    return node.left
                }
            // 2 nodes
            else{
                // Inorder Suceessor
                let tempNode = findMinNode(node.right)
                node.key = tempNode
                node.right = this.deleteNode(node.right,tempNode)
            }
        }
        return node
    }

    findMinNode(node)
    {
        while(node.left!==null)
            {
                node= node.left
            }
            return node
    }
}