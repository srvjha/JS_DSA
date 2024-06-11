class Queue{
    constructor()
    {
        this.queue = []
    }

    // Data add
    enqueue(data)
    {
        this.queue.push(data)
    }

    // Data remove
    dequeue()
    {
        if(this.isEmpty())
            {
                return "Queue is empty"
            }
        return this.queue.shift()
    }

    isEmpty()
    {
        return this.queue.length === 0
    }

    peek()
    {
        if(this.isEmpty())
            {
                return "Queue is empty"
            }
        return this.queue[0]
    }

    size()
    {
        return this.queue.length
    }

    clear()
    {
        this.queue = []
    }

    printQueue()
    {
        let str = ""
        for(let i=0;i<this.queue.length;i++)
            {
                str += this.queue[i] + "\n"
            }
            return str
    }
}

// Usage Example
let queue = new Queue()
queue.enqueue(10)
queue.enqueue(14)
queue.enqueue(15)
queue.enqueue(17)
queue.dequeue()

console.log(queue.printQueue())