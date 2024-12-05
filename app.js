class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.front === null;
    }

    enqueue(data) {
        const newNode = new Node(data);
        if (this.rear === null) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        }
        const removedData = this.front.data;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        return removedData;
    }

    peek() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        }
        return this.front.data;
    }

    display() {
        if (this.isEmpty()) {
            return "Queue is empty.";
        }
        let current = this.front;
        let result = "";
        while (current !== null) {
            result += current.data + " -> ";
            current = current.next;
        }
        return result + "None";
    }
}

// Create a new Queue instance
const queue = new Queue();

// Handle Enqueue
function enqueue() {
    const data = prompt("Enter the data to enqueue:");
    if (data !== null) {
        queue.enqueue(data);
        document.getElementById("queue-output").textContent = `${data} enqueued to the queue.`;
    }
}

// Handle Dequeue
function dequeue() {
    const removedData = queue.dequeue();
    document.getElementById("queue-output").textContent = removedData === "Queue is empty." 
        ? removedData 
        : `${removedData} dequeued from the queue.`;
}

// Handle Peek
function peek() {
    const frontData = queue.peek();
    document.getElementById("queue-output").textContent = `Front of the queue: ${frontData}`;
}

// Handle Display
function displayQueue() {
    const queueContents = queue.display();
    document.getElementById("queue-output").textContent = `Queue contents: ${queueContents}`;
}
