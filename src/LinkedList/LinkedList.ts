export class Node {
  public next: Node | null = null;

  constructor(public data: any) {}

  public toString() {
    return `${this.data}`;
  }
}

export class LinkedList {
  private _head: Node | null = null;
  private _tail: Node | null = null;

  get isEmpty(): boolean {
    return !this._head;
  }

  get head(): Node | null {
    return this._head;
  }

  get tail(): Node | null {
    return this._tail;
  }

  public prepend(data: any): LinkedList {
    const node = new Node(data);

    if (this.isEmpty) {
      this._head = node;
      this._tail = node;
      return this;
    }

    node.next = this._head;
    this._head = node;
    return this;
  }

  public append(data: any): LinkedList {
    const node = new Node(data);

    if (this._tail === null) {
      this._head = node;
      this._tail = node;
      return this;
    }

    this._tail.next = node;
    this._tail = node;
    return this;
  }

  public delete(data: any): Node | null {
    let deletedNode = null;
    if (this.isEmpty) {
      return deletedNode;
    }

    if (data === this._head?.data) {
      return this.deleteHead();
    }

    if (data === this._tail?.data) {
      return this.deleteTail();
    }

    let currentNode = this._head;

    while (currentNode?.next) {
      if (currentNode?.next?.data === data) {
        deletedNode = currentNode.next;
        currentNode.next = currentNode.next?.next;
        break;
      }
      currentNode = currentNode.next;
    }
    return deletedNode;
  }

  public deleteTail(): Node | null {
    let deletedNode = null;
    if (this._head === this._tail || this._head === null) {
      deletedNode = this._head;
      this._head = null;
      this._tail = null;
      return deletedNode;
    }

    let currentNode = this._head;
    while (currentNode.next) {
      if (!currentNode.next.next) {
        deletedNode = currentNode.next;
        currentNode.next = null;
        this._tail = currentNode;
      } else {
        currentNode = currentNode.next;
      }
    }

    return deletedNode;
  }

  public deleteHead(): Node | null {
    let deletedNode = this._head;

    this._head = this._head?.next || null;

    if (this._head === null) {
      this._tail = null;
    }

    return deletedNode;
  }

  public static fromArray(arr: any[]): LinkedList {
    const linkedList = new LinkedList();
    arr.forEach(item => linkedList.append(item));
    return linkedList;
  }

  public toArray(): Node[] {
    const listArray: any[] = [];

    if (this.isEmpty)
      return listArray; /* Return an empty array if list is empty */

    let current = this._head;

    while (current) {
      listArray.push(current.data);
      current = current?.next;
    }

    return listArray;
  }

  public toString(): string {
    return this.toArray()
      .map(node => node.toString())
      .toString();
  }
}
