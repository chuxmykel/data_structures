class Node {
  public next: Node | null = null;
  constructor(public data: number) {}
}

export class Stack {
  private top: Node | null = null;

  get isEmpty(): boolean { return this.top === null }

  public peek(): number {
    if (this.top === null) { throw new Error('Stack is empty') }
    return this.top.data;
  }

  public push(data: number): void {
    const node = new Node(data);
    node.next = this.top;
    this.top = node;
  }

  public pop(): number {
    if (this.top === null) { throw new Error('Stack is empty') }
    const { data } = this.top;
    this.top = this.top.next;
    return data;
  }
}
