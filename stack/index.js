class Stack{  // because i have class so now constructor has the power to invoke any datatypes
    constructor(){
        this.stack = []
    }

    

    push(data)
    {
        this.stack.push(data)
    }

    pop()
    {
        this.stack.pop()
    }

    peek()
    {
        return this.stack[this.stack.length-1]
    }

    isEmpty()
    {
        return this.stack.length === 0
    }

    size()
    {
        return this.stack.length
    }

    clear()
    {
        this.stack = []

    }

    contain(element)
    {
       return this.stack.includes(element)
       //Manually
        //    let size = this.stack.length
        //    for(let i=0;i<size-1;i++)
        //     {
        //         if(this.stack[i]===element)
        //             {
        //                 return true
        //             }
        //     }
        //     return false
    }

    reverse()
    {
        this.stack.reverse()
    }

    printStack()
    {
        let str =''
        for(let i=0;i<this.stack.length;i++)
            {
                str+=this.stack[i] + "\n"
                
            }
            return str
    }

}

// usage example
let myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(4)
myStack.push(5)
myStack.pop()
console.log(myStack.printStack())
console.log(myStack.contain(2))
myStack.reverse()
console.log(myStack.printStack())