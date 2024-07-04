// Desinging Linkedlist

class Node {
   constructor(data,next=null)
   {
      this.data = data
      this.next = next
   }
}

 class LinkedList{
    constructor()
    {  /*
        [] => isko normally khaali hoga toh null bolenge but 
        LinkedList mein thoda fancines aa jata hai toh "head" bolte hai
        isse 
        [1,2,3] => idhr 3 ko normally mein array ka 2nd obj bolnege
        but LinkedList hai bhai toh "tail bol denge isse"
        */
       this.head = null
    }
 }  
 // adding methods using prototype we can simply define methods in constructor of linkedlist but just a showoff
 // Insert at start

 LinkedList.prototype.insertAtBeginning  = function(data)
 {
    const newNode = new Node(data,this.head)
   //  console.log("1: ",this)
   //  console.log("head before: ",this.head)
   //  console.log("newNode: ",newNode)
    this.head = newNode;
   //  console.log("head after: ",this.head)
 }

 // Insert at end

 LinkedList.prototype.insertAtEnd = function(data)
 {
    const newNode = new Node(data)
    if(!this.head) // ==> this.head ===null
      {
         this.head = newNode;
         return;
      }

    // Now if this.head is not null
    // assume krle ki last hai bhai
    let last = this.head
    // last.next == null => true
    while(last.next)
      {
         last  = last.next
      }
    last.next  = newNode
 }
  
 // Insert at position
  
 LinkedList.prototype.insertAtPostion = function(prevNode,data)
 {
   
   if(!prevNode)
      {
         console.log("The prev node cant be null")
         return
      }

   const newNode = new Node(data,prevNode.next)
   prevNode.next  = newNode
   
 }
 // ALTERNATIVE SOLUTION WITH TAKING USE OF EXTRA FUNCTION -->

//  LinkedList.prototype.insertAtPostion = function(prevNode,data)
//  {
   
//    if(!prevNode)
//       {
//          console.log("The prev node cant be null")
//          return
//       }
   
//       let current = this.head
     
//       while(current)
//          {  // check for node in linked list
//             if(current.data===prevNode)
//                {  
//                   const newNode = new Node(data,current.next)
//                   current.next  = newNode                 
                 
//                }
//                current = current.next
//          }
//  }

 // helper function to pass a node when called with pos
 LinkedList.prototype.getNodeAtPosition = function(pos)
 {
   let currentVal = this.head

   // currentVal => this.head => uska data===pos agr hai toh return currentVal nhi toh currentVal mein currentVal.next
   
   while(!(currentVal.data===pos))
      {
         currentVal = currentVal.next
      }
      
   return currentVal;
 }

 // traversal
 LinkedList.prototype.printList = function() {
   let current = this.head;
   let values = []
   while (current) {
     
      values.push(current.data);
       current = current.next;
   }
   values.length===0? console.log(values):console.log(values.join(" -> "))   
};

// delete firstNode

LinkedList.prototype.deletefirstNode = function()
{
   if(!this.head)
      {
         console.log("Cant Delete Linked List is Empty!")
         return
      }
     this.head = this.head.next
}

// delete lastNode
LinkedList.prototype.deletelastNode = function()
{
   if(!this.head)
      {  
         console.log("Cant Delete Linked List is Empty!")
         return
      }
   if(!this.head.next)
      {
         this.head=null
         return
      }
   let secondlast  = this.head
   while(secondlast.next.next)
      {
         secondlast= secondlast.next
      }

   secondlast.next = null
}

LinkedList.prototype.deleteNodeAtGivenKey = function(key)
{
   if(!this.head)
      {  
         console.log("Cant Delete Linked List is Empty!")
         return
      }

   // data found at head
   if(this.head.data===key.data)
      {
         this.head = this.head.next
         return
      }

   let current = this.head
   while(current.next!==null)
      {
         if(current.next.data===key.data)
            {
               current.next = current.next.next
               return 
            }
            current = current.next
        
      }
      console.log("No Node found with key: ",key)

}

LinkedList.prototype.searchNodeAtGivenKey = function(key)
{
   if(!this.head)
      {
         console.log("Cant Search LinkedList is Empty!")
      }

   // searching till we get null
   let searchNode = this.head
   while(searchNode)  // direct write searchNode
      {  
         if(searchNode.data===key) 
            {  console.log("key Found!")
               return true               
            }
         searchNode = searchNode.next
      }
      console.log("key Not Found!")
      return false
      
}

// Reverse a linkedlist 

LinkedList.prototype.reverseLinkedList = function()
{
   let current = this.head
   let prev = null
   let next = null
   
   while(current)
      {  // 1. Ensure the chaining first
         next = current.next
         // 2. Now to change the pointer to previous node 
         current.next = prev
         // 3. now we will the update the prev by using curre t
         prev=current
         // 4. finally updating the current by next not current.next as it contains the prevs
         current = next
      }
      this.head = prev
}

// Create a new LinkedList instance
const list = new LinkedList();

// Insert elements
list.insertAtBeginning(10);
list.insertAtBeginning(20);
list.insertAtBeginning(30);
list.insertAtEnd(5)
list.insertAtEnd(100)
// list.insertAtPostion(list.getNodeAtPosition(20),50)
// list.deletefirstNode()
// list.deletelastNode()
// list.deleteNodeAtGivenKey(list.getNodeAtPosition(50))
// list.searchNodeAtGivenKey(100)

console.log("Original linked list: ")
list.printList();
list.reverseLinkedList()

console.log("Reversed linked list: ")
// Print the list to verify
list.printList();
  



