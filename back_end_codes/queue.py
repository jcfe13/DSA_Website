class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.front = None
        self.rear = None

    def is_empty(self):
        return self.front is None

    def enqueue(self, data):
        new_node = Node(data)
        if self.rear is None:
            self.front = self.rear = new_node
        else:
            self.rear.next = new_node
            self.rear = new_node

    def dequeue(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        removed_data = self.front.data
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        return removed_data

    def peek(self):
        if self.is_empty():
            print("Queue is empty")
            return None
        return self.front.data

    def display(self):
        if self.is_empty():
            print("Queue is empty")
            return
        current = self.front
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


# Interactive Mode
if __name__ == "__main__":
    queue = Queue()

    while True:
        print("\nQueue Operations:")
        print("1. Enqueue")
        print("2. Dequeue")
        print("3. Peek")
        print("4. Display")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")

        if choice == "1":
            data = input("Enter the data to enqueue: ")
            queue.enqueue(data)
            print(f"{data} enqueued to the queue.")
        elif choice == "2":
            removed_data = queue.dequeue()
            if removed_data is not None:
                print(f"{removed_data} dequeued from the queue.")
        elif choice == "3":
            front_data = queue.peek()
            if front_data is not None:
                print(f"Front of the queue: {front_data}")
        elif choice == "4":
            print("Queue contents:")
            queue.display()
        elif choice == "5":
            print("Exiting...")
            break
        else:
            print("Invalid choice. Please try again.")
