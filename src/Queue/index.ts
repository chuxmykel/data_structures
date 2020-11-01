class Node {
  public next: Node | null = null;
  constructor(public data: number) {}
}

class Queue {
  private head: Node | null = null;
  private tail: Node | null = null;

  get isEmpty(): boolean { return this.head === null; }

  public peek(): number {
    if (this.head === null) {
      throw new Error('Queue is empty');
    }
    return this.head.data;
  }

  public enqueue(data: number): void {
    const node = new Node(data);
    if (this.tail === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    console.log(this.toString())
  }

  public dequeue(): number {
    if (this.head === null) { throw new Error('Queue is empty') }
    const { data } = this.head;
    this.head = this.head.next;
    if (this.head === this.tail) {
      this.tail = null
    }
    console.log(this.toString());
    return data;
  }

  public toString(): string {
    let currentNode: Node | null = this.head;
    let queueString: string = '';
    while (currentNode) {
      queueString += `${currentNode.data}`;
      if (currentNode.next) {
        queueString += '  |  '
      }
      currentNode = currentNode.next;
    }
    return queueString;
  }
}

const queue = new Queue();

new Array(10).map(() => {
  queue.enqueue(Math.round(Math.random() * 20));
});
