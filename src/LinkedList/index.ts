class Node {
  public next: Node | null = null;

  constructor(public data: any) {}
}

export class LinkedList {
  public head: Node | null = null;

  public isEmpty(): boolean {
    return this.head === null;
  }

  public prepend(data: any): void {
    const node: Node = new Node(data);

    if (this.isEmpty()) {
      this.head = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  public append(data: any): void {
    const node: Node = new Node(data);

    if (this.isEmpty()) {
      this.head = node;
      return;
    }

    let current: Node | null = this.head;

    // ❗This can be avoided by keeping reference to the tail of the list as well
    while (current !== null) {
      if (current.next === null) {
        current.next = node;
        return;
      }
      current = current.next;
    }
  }

  public toArray(): any[] {
    const listArray: any[] = [];

    if (this.isEmpty())
      return listArray; /* Return an empty array if list is empty */

    let current: Node | null = this.head;

    while (current !== null) {
      listArray.push(current.data);
      current = current?.next;
    }

    return listArray;
  }
}
