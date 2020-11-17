import { LinkedList, Node } from '../LinkedList';

describe('LinkedList', () => {
  it('should create empty linked list', () => {
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });

  it('should append node to linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.tail?.next).toBeNull();
  });

  it('should prepend node to linked list', () => {
    const linkedList = new LinkedList();

    linkedList.prepend(2);
    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('2');

    linkedList.append(1);
    linkedList.prepend(3);

    expect(linkedList.toString()).toBe('3,2,1');
  });

  it('should delete node by value from linked list', () => {
    const linkedList = new LinkedList();

    expect(linkedList.delete(5)).toBeNull();

    linkedList.append(1);
    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(3);
    linkedList.append(4);
    linkedList.append(5);

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('5');

    const deletedNode: Node | null = linkedList.delete(3);
    expect(deletedNode?.data).toBe(3);
    expect(linkedList.toString()).toBe('1,1,2,3,3,4,5');

    linkedList.delete(3);
    expect(linkedList.toString()).toBe('1,1,2,3,4,5');

    linkedList.delete(1);
    expect(linkedList.toString()).toBe('1,2,3,4,5');

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('5');

    linkedList.delete(5);
    expect(linkedList.toString()).toBe('1,2,3,4');

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('4');

    linkedList.delete(4);
    expect(linkedList.toString()).toBe('1,2,3');

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('3');

    linkedList.delete(2);
    expect(linkedList.toString()).toBe('1,3');
  });

  it('should delete linked list tail', () => {
    const linkedList = new LinkedList();

    linkedList.append(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('3');

    const deletedNode1 = linkedList.deleteTail();

    expect(deletedNode1?.data).toBe(3);
    expect(linkedList.toString()).toBe('1,2');
    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteTail();

    expect(deletedNode2?.data).toBe(2);
    expect(linkedList.toString()).toBe('1');
    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('1');

    const deletedNode3 = linkedList.deleteTail();

    expect(deletedNode3?.data).toBe(1);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should delete linked list head', () => {
    const linkedList = new LinkedList();

    expect(linkedList.deleteHead()).toBeNull();

    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.head?.toString()).toBe('1');
    expect(linkedList.tail?.toString()).toBe('2');

    const deletedNode1 = linkedList.deleteHead();

    expect(deletedNode1?.data).toBe(1);
    expect(linkedList.toString()).toBe('2');
    expect(linkedList.head?.toString()).toBe('2');
    expect(linkedList.tail?.toString()).toBe('2');

    const deletedNode2 = linkedList.deleteHead();

    expect(deletedNode2?.data).toBe(2);
    expect(linkedList.toString()).toBe('');
    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();
  });

  it('should create linked list from array', () => {
    const linkedList = LinkedList.fromArray([1, 1, 2, 3, 3, 3, 4, 5]);

    expect(linkedList.toString()).toBe('1,1,2,3,3,3,4,5');
  });

  // it('should be possible to store objects in the list and to print them out', () => {
  //   const linkedList = new LinkedList();
  //
  //   const nodeValue1 = { value: 1, key: 'key1' };
  //   const nodeValue2 = { value: 2, key: 'key2' };
  //
  //   linkedList.append(nodeValue1).prepend(nodeValue2);
  //
  //   function nodeStringifier(value: { value: number, key: string }): string {
  //     return `${value.key}:${value.value}`;
  // }
  //
  //   expect(linkedList.toString(nodeStringifier)).toBe('key2:2,key1:1');
  // });
});
