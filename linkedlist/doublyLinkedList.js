// Desinging Doubly Linked List

class Node{
    constructor(data,prev=null,next=null) {
        this.prev = prev
        this.data = data
        this.next = next
        
    }
}

class DoublyLinkedList{
   constructor() {
    this.head = null
    this.tail = null
    
   }
}

DoublyLinkedList.prototype.insertAtBeginning = function(data)
{
    const newNode  = new Node(data,null,this.head)
     if(this.head!==null)
        {
            this.head.prev = newNode
        }
    this.head = newNode

    if(this.tail===null)
        {
            this.tail = newNode 
            //this.tail  = this.head // For Circular Linked List
        }
}
DoublyLinkedList.prototype.insertAtEnd = function(data)
{
    const newNode = new Node(data,this.tail,null)
    if(this.tail!==null)
        {
            this.tail.next = newNode
            // this.tail = newNode
        }
        this.tail = newNode
    if(this.head===null)
        {
            this.head = newNode
        }
}

// Insert after a point
DoublyLinkedList.prototype.insertAfter = function(data,prevNode)
{

    if(prevNode==null)
        {
            console.log("Previous Node is not present in the list")
        }
    const newNode = new Node(data,prevNode,prevNode.next)
    if(prevNode.next!==null)
        {
          prevNode.next.prev = newNode
          //prevNode.next = newNode
        }
   
    
    prevNode.next = newNode

    if(newNode.next==null)
        {
            this.tail = newNode
        }
    
}

// Deleting first node
DoublyLinkedList.prototype.deleteFirstNode = function()
{
    if(!this.head)
        {
            console.log("Cant Delete Linked List is Empty!")
            return
        }

    if(this.head === this.tail)
        {
            this.head = null
            this.tail = null
        }
    else
        {
            this.head = this.head.next
            this.head.prev = null
        }
   
}

// Deleting last node
DoublyLinkedList.prototype.deleteLastNode = function()
{
    if(!this.tail)
        {
            console.log("Cant Delete Linked List is Empty!")
            return
        }

    if(this.head === this.tail)
        {
            this.head = null
            this.tail = null
        }
    else
    {
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

// reverse
DoublyLinkedList.prototype.reverse = function()
{
    let current = this.head
    let temp = null

    while(current)
        {   
            // basic swap
            temp = current.prev
            current.prev = current.next
            current.next = temp
            // move to next node

            current = current.prev
        }
    if(temp!=null)
        {
            this.tail = this.head
            this.head = temp.prev
        }
}

DoublyLinkedList.prototype.printMe = function()
{
    let head= this.head
    let tail = this.tail
    //console.log("HEAD: ",this.head,"TAIL: ",this.tail)
    let values = []
    while(head && tail)
        {
          values.push({head:head.data,tail:tail.data})
          head = head.next;
          tail = tail.prev
        }
    // console.log(values.join(" => "));
    console.log(values)
}

const myDoublyLinkedList = new DoublyLinkedList();
myDoublyLinkedList.insertAtBeginning(10)
myDoublyLinkedList.insertAtBeginning(20)
myDoublyLinkedList.insertAtBeginning(30)
myDoublyLinkedList.insertAtBeginning(40)
myDoublyLinkedList.insertAtEnd(5)
myDoublyLinkedList.insertAfter(25,myDoublyLinkedList.head.next)
myDoublyLinkedList.deleteFirstNode()

myDoublyLinkedList.printMe()
myDoublyLinkedList.deleteFirstNode()

myDoublyLinkedList.printMe()
myDoublyLinkedList.reverse()

myDoublyLinkedList.printMe()
