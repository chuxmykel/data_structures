class Node<T> {
  public next: Node<T> | null = null;
  constructor(public data: T) {}
}

export class Stack<T> {
  private top: Node<T> | null = null;

  get isEmpty(): boolean {
    return this.top === null;
  }

  public peek(): T {
    if (this.top === null) {
      throw new Error('Stack is empty');
    }
    return this.top.data;
  }

  public push(data: T): void {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  public pop(): T {
    if (this.top === null) {
      throw new Error('Stack is empty');
    }
    const { data } = this.top;
    this.top = this.top.next;
    return data;
  }
}
